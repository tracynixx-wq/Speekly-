const E2E = require('../src/crypto.js');
const assert = require('assert');
(async () => {
  // два пользователя
  const A = await E2E.genKeyPair(), B = await E2E.genKeyPair(), M = await E2E.genKeyPair();
  const aPriv = await E2E.importPriv(A.priv), bPriv = await E2E.importPriv(B.priv), mPriv = await E2E.importPriv(M.priv);

  // ключ переписки одинаков с обеих сторон
  const kA = await E2E.sharedKey(aPriv, B.pub), kB = await E2E.sharedKey(bPriv, A.pub);
  const text = JSON.stringify({ v: 1, t: 'Привет, мир 👋', f: null });
  const body = await E2E.encStr(kA, text);
  assert(E2E.isEnc(body) && !body.includes('Привет'), 'шифртекст не должен содержать открытый текст');
  assert.strictEqual(await E2E.decStr(kB, body), text, 'B расшифровывает сообщение A');
  assert.strictEqual(await E2E.decStr(kA, body), text, 'A читает своё же сообщение');
  console.log('1. обмен ключами и текст: OK, длина шифртекста', body.length);

  // посторонний не может прочитать
  const kM = await E2E.sharedKey(mPriv, A.pub);
  await assert.rejects(E2E.decStr(kM, body));
  console.log('2. чужой ключ не расшифровывает: OK');

  // подмена данных обнаруживается
  const parts = body.split(':'); const ct = E2E.b64d(parts[2]); ct[0] ^= 1;
  await assert.rejects(E2E.decStr(kB, parts[0] + ':' + parts[1] + ':' + E2E.b64e(ct)));
  console.log('3. подмена шифртекста обнаруживается: OK');

  // каждый раз разный шифртекст (случайный IV)
  assert.notStrictEqual(await E2E.encStr(kA, text), await E2E.encStr(kA, text));
  console.log('4. случайный IV: OK');

  // максимальное сообщение: 4000 символов по 4 байта
  const big = '😀'.repeat(2000) + 'я'.repeat(2000);
  const bb = await E2E.encStr(kA, JSON.stringify({ v: 1, t: big, f: null }));
  console.log('5. самое длинное сообщение в базе:', bb.length, 'символов (лимит в базе 24000)');
  assert(bb.length < 24000);

  // файлы
  const file = require('crypto').randomBytes(3 * 1024 * 1024);
  const e = await E2E.encFile(file.buffer.slice(file.byteOffset, file.byteOffset + file.length));
  const back = Buffer.from(await E2E.decFile(e.ct, e.k, e.i));
  assert(back.equals(file)); assert.strictEqual(e.ct.byteLength, file.length + 16);
  console.log('6. шифрование файла 3 МБ туда-обратно: OK, накладные расходы', e.ct.byteLength - file.length, 'байт');

  // резервная копия по паролю
  const t0 = Date.now();
  const wrapped = await E2E.wrapPriv('мой пароль', A.priv);
  const un = await E2E.unwrapPriv('мой пароль', wrapped);
  assert.deepStrictEqual({ x: un.x, y: un.y, d: un.d }, { x: A.priv.x, y: A.priv.y, d: A.priv.d });
  await assert.rejects(E2E.unwrapPriv('неверный', wrapped));
  assert(!wrapped.includes(A.priv.d), 'приватный ключ не должен лежать в открытом виде');
  console.log('7. резерв ключа по паролю: OK,', Date.now() - t0, 'мс на 2 PBKDF2');
  // восстановленный ключ работает
  const k2 = await E2E.sharedKey(await E2E.importPriv(un), B.pub);
  assert.strictEqual(await E2E.decStr(k2, body), text);
  console.log('8. после восстановления из резерва старые сообщения читаются: OK');

  // код безопасности
  const f1 = await E2E.fingerprint(A.pub, B.pub), f2 = await E2E.fingerprint(B.pub, A.pub), f3 = await E2E.fingerprint(A.pub, M.pub);
  assert.strictEqual(f1, f2); assert.notStrictEqual(f1, f3);
  console.log('9. код безопасности одинаков у обоих, при подмене ключа другой:', f1);
})().catch(e => { console.error('FAIL', e); process.exit(1); });
