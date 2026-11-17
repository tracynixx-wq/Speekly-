// Сквозное шифрование Speekly (Web Crypto, без внешних библиотек).
//  - у каждого пользователя пара ключей ECDH P-256; публичный лежит в profiles.public_key,
//    приватный живёт на устройстве (и в резервной копии, зашифрованной паролем)
//  - ключ переписки = ECDH(мой приватный, публичный собеседника) -> HKDF -> AES-256-GCM
//  - файлы шифруются отдельным случайным AES-ключом, ключ едет внутри зашифрованного сообщения
(function (root) {
  'use strict';
  const C = (typeof crypto !== 'undefined' && crypto.subtle) ? crypto : require('crypto').webcrypto;
  const subtle = C.subtle;
  const te = new TextEncoder(), td = new TextDecoder();
  const ECDH = { name: 'ECDH', namedCurve: 'P-256' };
  const PREFIX = 'e2e1:';
  const PBKDF2_ITER = 250000;

  function b64e(buf) {
    const b = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    let s = '';
    for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
    return btoa(s);
  }
  function b64d(str) {
    const s = atob(str), b = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
    return b;
  }
  const rand = n => C.getRandomValues(new Uint8Array(n));
  const pubToStr = jwk => JSON.stringify({ kty: 'EC', crv: 'P-256', x: jwk.x, y: jwk.y });

  async function genKeyPair() {
    const pair = await subtle.generateKey(ECDH, true, ['deriveBits']);
    const priv = await subtle.exportKey('jwk', pair.privateKey);
    const pub = await subtle.exportKey('jwk', pair.publicKey);
    return { priv, pub: pubToStr(pub) };
  }
  const importPriv = jwk => subtle.importKey('jwk', { kty: jwk.kty, crv: jwk.crv, x: jwk.x, y: jwk.y, d: jwk.d }, ECDH, false, ['deriveBits']);

  // ключ переписки с человеком, у которого публичный ключ pubStr
  async function sharedKey(privKey, pubStr) {
    const pub = await subtle.importKey('jwk', JSON.parse(pubStr), ECDH, false, []);
    const bits = await subtle.deriveBits({ name: 'ECDH', public: pub }, privKey, 256);
    const hk = await subtle.importKey('raw', bits, 'HKDF', false, ['deriveKey']);
    return subtle.deriveKey(
      { name: 'HKDF', hash: 'SHA-256', salt: te.encode('speekly-e2e-v1'), info: te.encode('chat') },
      hk, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }

  async function encStr(key, text) {
    const iv = rand(12);
    const ct = await subtle.encrypt({ name: 'AES-GCM', iv }, key, te.encode(text));
    return PREFIX + b64e(iv) + ':' + b64e(ct);
  }
  async function decStr(key, body) {
    const parts = String(body).split(':');
    if (parts[0] + ':' !== PREFIX || parts.length !== 3) throw new Error('bad format');
    const pt = await subtle.decrypt({ name: 'AES-GCM', iv: b64d(parts[1]) }, key, b64d(parts[2]));
    return td.decode(pt);
  }
  const isEnc = body => typeof body === 'string' && body.startsWith(PREFIX);

  // файлы: случайный ключ на каждый файл
  async function encFile(buf) {
    const k = await subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt']);
    const iv = rand(12);
    const ct = await subtle.encrypt({ name: 'AES-GCM', iv }, k, buf);
    return { ct, k: b64e(await subtle.exportKey('raw', k)), i: b64e(iv) };
  }
  async function decFile(ct, kB64, ivB64) {
    const k = await subtle.importKey('raw', b64d(kB64), 'AES-GCM', false, ['decrypt']);
    return subtle.decrypt({ name: 'AES-GCM', iv: b64d(ivB64) }, k, ct);
  }

  // резервная копия приватного ключа, защищённая паролем
  async function pwKey(pw, salt, iter, usage) {
    const base = await subtle.importKey('raw', te.encode(pw), 'PBKDF2', false, ['deriveKey']);
    return subtle.deriveKey({ name: 'PBKDF2', salt, iterations: iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, [usage]);
  }
  async function wrapPriv(pw, privJwk) {
    const salt = rand(16), iv = rand(12);
    const k = await pwKey(pw, salt, PBKDF2_ITER, 'encrypt');
    const ct = await subtle.encrypt({ name: 'AES-GCM', iv }, k, te.encode(JSON.stringify(privJwk)));
    return JSON.stringify({ s: b64e(salt), i: b64e(iv), c: b64e(ct), n: PBKDF2_ITER });
  }
  async function unwrapPriv(pw, str) {
    const o = JSON.parse(str);
    const k = await pwKey(pw, b64d(o.s), o.n, 'decrypt');
    return JSON.parse(td.decode(await subtle.decrypt({ name: 'AES-GCM', iv: b64d(o.i) }, k, b64d(o.c))));
  }

  // код безопасности: одинаковый у обоих собеседников, если никто не подменил ключи
  async function fingerprint(pubA, pubB) {
    const joined = [pubA, pubB].sort().join('\n');
    const h = new Uint8Array(await subtle.digest('SHA-256', te.encode(joined)));
    const hex = [...h].map(x => x.toString(16).padStart(2, '0')).join('');
    return hex.slice(0, 32).match(/.{4}/g).join(' ');
  }

  const E2E = { PREFIX, isEnc, b64e, b64d, pubToStr, genKeyPair, importPriv, sharedKey, encStr, decStr, encFile, decFile, wrapPriv, unwrapPriv, fingerprint };
  root.E2E = E2E;
  if (typeof module !== 'undefined' && module.exports) module.exports = E2E;
})(typeof window !== 'undefined' ? window : globalThis);
