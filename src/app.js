(() => {
'use strict';

// ================= переводы / translations =================
const I18N = {
  ru: {
    app_sub: 'Мессенджер для своих', cfg_title: 'Настрой config.js',
    cfg_text: 'Впиши SUPABASE_URL и SUPABASE_PUBLISHABLE_KEY в src/config.js и убедись, что выполнен npm install.',
    tab_login: 'Вход', tab_register: 'Регистрация', lbl_nick: 'Ник',
    lbl_nick_new: 'Придумай ник (a-z, 0-9, _ ; 3–20 символов)', lbl_pass: 'Пароль',
    lbl_pass_new: 'Пароль (минимум 6 символов)', lbl_pass2: 'Повтори пароль',
    remember: 'Запомнить меня на этом компьютере', btn_login: 'Войти', btn_register: 'Создать аккаунт',
    err_fill: 'Введи ник и пароль (от 6 символов)', err_creds: 'Неверный ник или пароль',
    err_nick_fmt: 'Ник: 3–20 символов, только a-z, 0-9 и _', err_pass_match: 'Пароли не совпадают',
    err_taken: 'Этот ник уже занят',
    msg_confirm: 'Регистрация почти завершена: в настройках Supabase ещё включено подтверждение. Администратору нужно отключить Confirm email; ник и пароль — единственные данные пользователя.',
    saved_accounts: 'Сохранённые аккаунты', back: 'Назад',
    err_profile: 'Профиль не найден. Проверь, что выполнен schema.sql',
    chats: 'Чаты', friends: 'Друзья', settings: 'Настройки', profile: 'Профиль',
    no_friends: 'Пока нет друзей.<br>Добавь их во вкладке «Друзья».', no_messages: 'Нет сообщений',
    you_prefix: 'Вы: ', pick_chat: 'Выбери чат слева', write_first: 'Напиши первое сообщение',
    msg_ph: 'Сообщение…', send: 'Отправить', not_sent: 'Не отправлено: {0}',
    search_ph: 'Найти человека по нику…', incoming: 'Входящие заявки', outgoing: 'Исходящие заявки',
    accept: 'Принять', cancel: 'Отменить', my_friends: 'Мои друзья ({0})', list_empty: 'Список пуст',
    search_results: 'Результаты поиска', nobody: 'Никого не найдено', st_friend: 'Друг',
    st_sent: 'Заявка отправлена', st_wait: 'Ждёт ответа', add: 'Добавить', req_sent: 'Заявка отправлена',
    req_blocked: 'Этот пользователь не принимает заявки в друзья', req_exists: 'Заявка уже существует',
    error: 'Ошибка: {0}', pick_friend: 'Выбери друга слева,<br>чтобы посмотреть профиль',
    write: 'Написать', unfriend: 'Удалить из друзей', confirm_unfriend: 'Удалить из друзей?',
    no_bio: 'Нет описания', notif_req: 'Заявка в друзья', notif_req_body: '{0} хочет добавить вас в друзья',
    new_message: 'Новое сообщение',
    online: 'в сети', offline: 'не в сети', seen_at: 'был(а) в {0}', seen_yday: 'был(а) вчера в {0}',
    seen_date: 'был(а) {0} в {1}', today: 'Сегодня', yesterday: 'Вчера',
    s_appearance: 'Внешний вид', s_notifications: 'Уведомления', s_privacy: 'Приватность',
    s_chats: 'Чаты', s_account: 'Аккаунт',
    lang: 'Язык', lang_d: 'Язык интерфейса',
    theme: 'Тема', theme_d: 'Светлая, тёмная или как в системе', theme_dark: 'Тёмная',
    theme_light: 'Светлая', theme_system: 'Системная',
    accent: 'Цвет акцента', accent_d: 'Кнопки, свои сообщения, выделения',
    font: 'Размер текста', font_d: 'Меняет размер шрифта во всём приложении',
    font_small: 'Мелкий', font_normal: 'Обычный', font_large: 'Крупный',
    compact: 'Компактный режим', compact_d: 'Плотнее список чатов и сообщения',
    n_win: 'Уведомления Windows', n_win_d: 'Показывать всплывающие уведомления о новых сообщениях и заявках',
    n_sound: 'Звук', n_sound_d: 'Короткий сигнал при новом сообщении',
    n_preview: 'Показывать текст', n_preview_d: 'Если выключено, в уведомлении будет только «Новое сообщение»',
    n_test: 'Проверка', n_test_d: 'Отправить тестовое уведомление', check: 'Проверить',
    notif_perm: 'Разреши уведомления для приложения в настройках Windows',
    notif_test_body: 'Так выглядит уведомление',
    p_req: 'Заявки в друзья', p_req_d: 'Если выключено, никто не сможет отправить вам заявку',
    p_online: 'Статус «в сети» и время захода',
    p_online_d: 'Друзья видят, когда вы онлайн и когда были в сети (применяется сразу)',
    p_read: 'Отметки о прочтении', p_read_d: 'Собеседник видит ✓✓, когда вы прочитали сообщение',
    c_enter: 'Отправка по Enter',
    c_enter_d: 'Включено: Enter отправляет, Shift+Enter — новая строка. Выключено: отправка по Ctrl+Enter',
    c_24: '24-часовой формат времени', c_24_d: 'Выключено: 12-часовой формат (AM/PM)',
    a_login: 'Ник для входа', a_chpass: 'Сменить пароль', a_new: 'Новый пароль', a_new2: 'Повтори пароль',
    a_min6: 'Минимум 6 символов', a_changed: 'Пароль изменён', a_logout: 'Выйти из аккаунта',
    a_logout_d: 'Этот аккаунт будет убран из списка сохранённых', a_logout_btn: 'Выйти',
    edit_profile: 'Редактировать профиль', switch_profile: 'Смена профиля', add_profile: 'Добавить профиль',
    f_name: 'Имя', f_bio: 'О себе', f_nick: 'Ник (по нему входят и ищут тебя, изменить нельзя)',
    save: 'Сохранить', saved: 'Сохранено', photo: 'Фото профиля', banner: 'Обложка',
    upload: 'Загрузить', remove: 'Удалить',
    media_hint: 'Можно загрузить анимацию: GIF или WebP (до 4 МБ для фото и 8 МБ для обложки)',
    err_img: 'Не удалось прочитать картинку', err_big: 'Файл слишком большой (максимум {0} МБ)',
    err_upload: 'Не удалось загрузить: {0}', switch_fail: 'Не удалось переключить аккаунт, войди заново',
    verified: 'Подтверждённый аккаунт', setting_err: 'Не удалось сохранить настройку: {0}',
    load_err_friends: 'Ошибка загрузки друзей: {0}', load_err_msgs: 'Ошибка загрузки сообщений: {0}',
    help: 'Помощь', st_online: 'В сети', st_invisible: 'Невидимка', search_chats: 'Поиск…',
    attach: 'Прикрепить файл', attach_img: 'Фото или видео', emoji: 'Смайлы', download: 'Скачать',
    uploading: 'Загрузка файла…', pv_photo: '📷 Фото', pv_file: 'Файл', new_chat: 'Новый чат',
    help_title: 'Как пользоваться Speekly',
    help_1_t: 'Как добавить друга', help_1_d: 'Вкладка «Друзья» → поиск по нику → «Добавить». Когда человек примет заявку, появится чат.',
    help_2_t: 'Фото и файлы', help_2_d: 'Скрепка отправляет любой файл, кнопка с картинкой — фото и видео (до 25 МБ). Картинку можно вставить из буфера обмена (Ctrl+V).',
    help_3_t: 'Профиль', help_3_d: 'Нажми на свою аватарку слева: обложка и фото (можно GIF), имя, о себе, смена аккаунта.',
    help_4_t: 'Невидимка', help_4_d: 'Кнопка статуса внизу слева скрывает «в сети» и время захода.',
    help_5_t: 'Язык и тема', help_5_d: 'Настройки → Внешний вид: русский или английский, тема и цвет акцента.',
    help_6_t: 'Шифрование', help_6_d: 'Сообщения и файлы шифруются на твоём компьютере, сервер видит только шифртекст. Код безопасности (кнопка «E2E шифрование» в чате) помогает убедиться, что собеседника не подменили.',
    no_enc_peer: 'Собеседник ещё не включил шифрование. Пусть обновит приложение и войдёт в аккаунт.',
    enc_locked: 'Шифрование заблокировано: Настройки → Аккаунт → Разблокировать.',
    err_creds_pw: 'Неверный пароль', skip: 'Пропустить',
    unlock_title: 'Разблокируй переписки', unlock_text: 'Введи пароль от аккаунта, чтобы восстановить ключ шифрования на этом компьютере.',
    backup_title: 'Защити ключ паролем', backup_text: 'Введи пароль от аккаунта. Копия ключа шифрования сохранится в зашифрованном виде, чтобы ты мог читать переписки на другом компьютере.',
    keys_reset: 'Старый ключ восстановить не удалось: создан новый, прежние сообщения нечитаемы.',
    cant_decrypt: 'Не удалось расшифровать сообщение', pv_locked: '🔒 Зашифровано',
    e2e_on: 'E2E шифрование', e2e_wait: 'Ждёт шифрования', e2e_locked: 'Ключ заблокирован',
    sec_btn: 'Код безопасности', sec_title: 'Код безопасности',
    sec_text: 'Сравни этот код с {0} лично или по звонку. Если коды совпадают, переписку никто не подменяет.',
    enc_title: 'Шифрование', enc_on: 'Сквозное шифрование включено',
    enc_on_d: 'Ключ хранится на этом компьютере. Сообщения и файлы читаете только вы и собеседник.',
    enc_off: 'Ключ заблокирован', enc_off_d: 'Введи пароль, чтобы восстановить ключ и читать переписки.', unlock_btn: 'Разблокировать',
    bk_title: 'Резервная копия ключа', bk_on: 'Есть. Ключ защищён паролем, его можно восстановить на другом компьютере.',
    bk_off: 'Нет. Если потерять этот компьютер, переписки не восстановить.', bk_make: 'Создать', bk_done: 'Резервная копия создана',
    logout_nobackup: 'У тебя нет резервной копии ключа. После выхода переписки нельзя будет прочитать. Всё равно выйти?'
  },
  en: {
    app_sub: 'A messenger for friends', cfg_title: 'Set up config.js',
    cfg_text: 'Put SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY into src/config.js and make sure npm install has been run.',
    tab_login: 'Sign in', tab_register: 'Sign up', lbl_nick: 'Username',
    lbl_nick_new: 'Choose a username (a-z, 0-9, _ ; 3–20 characters)', lbl_pass: 'Password',
    lbl_pass_new: 'Password (at least 6 characters)', lbl_pass2: 'Repeat password',
    remember: 'Remember me on this computer', btn_login: 'Sign in', btn_register: 'Create account',
    err_fill: 'Enter a username and a password (6+ characters)', err_creds: 'Wrong username or password',
    err_nick_fmt: 'Username: 3–20 characters, only a-z, 0-9 and _', err_pass_match: "Passwords don't match",
    err_taken: 'This username is already taken',
    msg_confirm: 'Registration is waiting for the Supabase confirmation setting. The administrator must turn off Confirm email; users only provide a username and password.',
    saved_accounts: 'Saved accounts', back: 'Back',
    err_profile: 'Profile not found. Make sure schema.sql has been run',
    chats: 'Chats', friends: 'Friends', settings: 'Settings', profile: 'Profile',
    no_friends: 'No friends yet.<br>Add some in the Friends tab.', no_messages: 'No messages',
    you_prefix: 'You: ', pick_chat: 'Pick a chat on the left', write_first: 'Write the first message',
    msg_ph: 'Message…', send: 'Send', not_sent: 'Not sent: {0}',
    search_ph: 'Find a person by username…', incoming: 'Incoming requests', outgoing: 'Outgoing requests',
    accept: 'Accept', cancel: 'Cancel', my_friends: 'My friends ({0})', list_empty: 'The list is empty',
    search_results: 'Search results', nobody: 'Nobody found', st_friend: 'Friend',
    st_sent: 'Request sent', st_wait: 'Waiting for reply', add: 'Add', req_sent: 'Request sent',
    req_blocked: "This user doesn't accept friend requests", req_exists: 'A request already exists',
    error: 'Error: {0}', pick_friend: 'Pick a friend on the left<br>to see their profile',
    write: 'Message', unfriend: 'Remove friend', confirm_unfriend: 'Remove from friends?',
    no_bio: 'No description', notif_req: 'Friend request', notif_req_body: '{0} wants to add you as a friend',
    new_message: 'New message',
    online: 'online', offline: 'offline', seen_at: 'last seen at {0}', seen_yday: 'last seen yesterday at {0}',
    seen_date: 'last seen {0} at {1}', today: 'Today', yesterday: 'Yesterday',
    s_appearance: 'Appearance', s_notifications: 'Notifications', s_privacy: 'Privacy',
    s_chats: 'Chats', s_account: 'Account',
    lang: 'Language', lang_d: 'Interface language',
    theme: 'Theme', theme_d: 'Light, dark or follow the system', theme_dark: 'Dark',
    theme_light: 'Light', theme_system: 'System',
    accent: 'Accent color', accent_d: 'Buttons, your messages, highlights',
    font: 'Text size', font_d: 'Changes the font size across the app',
    font_small: 'Small', font_normal: 'Normal', font_large: 'Large',
    compact: 'Compact mode', compact_d: 'Denser chat list and messages',
    n_win: 'Windows notifications', n_win_d: 'Show pop-up notifications about new messages and requests',
    n_sound: 'Sound', n_sound_d: 'A short beep on a new message',
    n_preview: 'Show message text', n_preview_d: 'If off, the notification just says “New message”',
    n_test: 'Test', n_test_d: 'Send a test notification', check: 'Test',
    notif_perm: 'Allow notifications for the app in Windows settings',
    notif_test_body: 'This is how a notification looks',
    p_req: 'Friend requests', p_req_d: 'If off, nobody can send you a request',
    p_online: 'Online status and last seen',
    p_online_d: 'Friends see when you are online and when you were last seen (applies immediately)',
    p_read: 'Read receipts', p_read_d: 'The other person sees ✓✓ when you have read the message',
    c_enter: 'Send with Enter',
    c_enter_d: 'On: Enter sends, Shift+Enter adds a new line. Off: send with Ctrl+Enter',
    c_24: '24-hour time', c_24_d: 'Off: 12-hour format (AM/PM)',
    a_login: 'Login username', a_chpass: 'Change password', a_new: 'New password', a_new2: 'Repeat password',
    a_min6: 'At least 6 characters', a_changed: 'Password changed', a_logout: 'Sign out',
    a_logout_d: 'This account will be removed from the saved list', a_logout_btn: 'Sign out',
    edit_profile: 'Edit profile', switch_profile: 'Switch profile', add_profile: 'Add profile',
    f_name: 'Name', f_bio: 'About', f_nick: 'Username (used to sign in and find you, cannot be changed)',
    save: 'Save', saved: 'Saved', photo: 'Profile photo', banner: 'Cover',
    upload: 'Upload', remove: 'Remove',
    media_hint: 'Animated GIF or WebP works too (up to 4 MB for the photo, 8 MB for the cover)',
    err_img: 'Could not read the image', err_big: 'File is too large (max {0} MB)',
    err_upload: 'Upload failed: {0}', switch_fail: 'Could not switch account, please sign in again',
    verified: 'Verified account', setting_err: 'Could not save the setting: {0}',
    load_err_friends: 'Failed to load friends: {0}', load_err_msgs: 'Failed to load messages: {0}',
    help: 'Help', st_online: 'Online', st_invisible: 'Invisible', search_chats: 'Search…',
    attach: 'Attach a file', attach_img: 'Photo or video', emoji: 'Emoji', download: 'Download',
    uploading: 'Uploading file…', pv_photo: '📷 Photo', pv_file: 'File', new_chat: 'New chat',
    help_title: 'How to use Speekly',
    help_1_t: 'Adding a friend', help_1_d: 'Friends tab → search by username → Add. Once they accept, a chat appears.',
    help_2_t: 'Photos and files', help_2_d: 'The paperclip sends any file, the picture button sends photos and videos (up to 25 MB). You can paste an image from the clipboard (Ctrl+V).',
    help_3_t: 'Profile', help_3_d: 'Click your avatar on the left: cover and photo (GIFs work), name, about, account switching.',
    help_4_t: 'Invisible mode', help_4_d: 'The status button at the bottom left hides your online status and last seen.',
    help_5_t: 'Language and theme', help_5_d: 'Settings → Appearance: Russian or English, theme and accent color.',
    help_6_t: 'Encryption', help_6_d: 'Messages and files are encrypted on your computer, the server only sees ciphertext. The security code (the “E2E Encrypted” button in a chat) lets you check that nobody swapped your friend.',
    no_enc_peer: 'Your friend has not enabled encryption yet. Ask them to update the app and sign in.',
    enc_locked: 'Encryption is locked: Settings → Account → Unlock.',
    err_creds_pw: 'Wrong password', skip: 'Skip',
    unlock_title: 'Unlock your chats', unlock_text: 'Enter your account password to restore your encryption key on this computer.',
    backup_title: 'Protect your key with your password', backup_text: 'Enter your account password. A copy of your encryption key will be stored in encrypted form so you can read your chats on another computer.',
    keys_reset: 'Could not restore your old key: a new one was created and earlier messages are unreadable.',
    cant_decrypt: 'Could not decrypt this message', pv_locked: '🔒 Encrypted',
    e2e_on: 'E2E Encrypted', e2e_wait: 'Waiting for encryption', e2e_locked: 'Key locked',
    sec_btn: 'Security code', sec_title: 'Security code',
    sec_text: 'Compare this code with {0} in person or on a call. If the codes match, nobody is tampering with your chat.',
    enc_title: 'Encryption', enc_on: 'End-to-end encryption is on',
    enc_on_d: 'The key is stored on this computer. Only you and your friend can read messages and files.',
    enc_off: 'Key locked', enc_off_d: 'Enter your password to restore the key and read your chats.', unlock_btn: 'Unlock',
    bk_title: 'Key backup', bk_on: 'Stored. Your key is protected by your password and can be restored on another computer.',
    bk_off: 'None. If you lose this computer your chats cannot be recovered.', bk_make: 'Create', bk_done: 'Backup created',
    logout_nobackup: 'You have no key backup. After signing out your chats can no longer be read. Sign out anyway?'
  }
};

// ================= утилиты и состояние =================
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const name = p => (p && (p.display_name || p.username)) || '?';
const lsGet = k => { try { return localStorage.getItem(k); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } };
const remember = () => lsGet('msg_remember') !== 'false';
const sessionAllowed = () => { try { return remember() || sessionStorage.getItem('msg_alive') === '1'; } catch { return true; } };
const markAlive = () => { try { sessionStorage.setItem('msg_alive', '1'); } catch { /* ignore */ } };
const LOGIN_DOMAIN = '@speekly.app'; // вход по нику: ник превращается во внутренний логин
const ACCENTS = ['#4f8cff', '#8e5be8', '#e5484d', '#f76b15', '#30a46c', '#12a594'];
const PCOLS = 'id,username,display_name,bio,avatar_url,banner_url,last_seen,verified,public_key';
const detectLang = () => ((navigator.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en');
const DEFAULTS = {
  lang: detectLang(), theme: 'dark', accent: ACCENTS[0], font: 'normal', compact: false,
  notifications: true, sound: true, preview: true,
  allow_requests: true, show_online: true, read_receipts: true,
  enter_send: true, time24: true
};
const S = {
  me: null, settings: { ...DEFAULTS }, profs: {},
  friends: [], incoming: [], outgoing: [],
  msgs: {}, active: null, view: null,
  tab: 'chats', stab: 'appearance', editing: false, draft: null,
  online: new Set(), dbChannel: null, presence: null, timer: null,
  starting: false, switching: false, addingAccount: false, prevId: null, sideTab: null
};
const t = (k, ...a) => {
  let s = (I18N[S.settings.lang] || I18N.ru)[k] ?? I18N.en[k] ?? k;
  a.forEach((v, i) => { s = s.replace('{' + i + '}', v); });
  return s;
};
const loc = () => (S.settings.lang === 'ru' ? 'ru-RU' : 'en-US');
const VERIFIED = () => `<svg class="verified" viewBox="0 0 24 24" role="img" aria-label="${esc(t('verified'))}"><title>${esc(t('verified'))}</title><path fill="#3b82f6" d="M12 1l2.6 2 3.2-.3 1.1 3 2.8 1.6-.8 3.1 1.6 2.8-2.2 2.3-.2 3.2-3.1.9L12 23l-2.8-2.4-3.1-.9-.2-3.2L3.7 14.2l1.6-2.8-.8-3.1 2.8-1.6 1.1-3 3.2.3z"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M8 12.5l2.7 2.7L16 9.5"/></svg>`;

const LOGO = '<span class="logo">speekly<i></i></span>';
const ICONS = {
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c2.2.7 3.5 2.6 3.5 5.7"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><circle cx="12" cy="17" r=".7" fill="currentColor"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  compose: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  clip: '<path d="M21 11.5l-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l8.6-8.6a3.7 3.7 0 0 1 5.2 5.2l-8.6 8.6a1.8 1.8 0 0 1-2.6-2.6l7.9-7.9"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="9" r="1.6"/><path d="M21 16l-5-5-9 9"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9.5h.01M15 9.5h.01"/>',
  send: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
  download: '<path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
};
const ic = (n, s = 24) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const EMOJIS = ['😀', '😂', '🥹', '😍', '😘', '😎', '🤔', '😅', '😭', '😡', '🥳', '😴', '🙏', '👍', '👎', '👏', '🙌', '💪', '🔥', '❤️', '💔', '✨', '🎉', '💯', '👀', '🤝', '😉', '😌', '🤗', '😱', '🤣', '🫡'];
const fmtSize = n => (!n ? '' : n < 1048576 ? Math.max(1, Math.round(n / 1024)) + ' KB' : (n / 1048576).toFixed(1) + ' MB');
const prevText = m => {
  const d = m.dec || { body: m.body, file: null };
  if (d.bad) return t('pv_locked');
  if (!d.file) return d.body;
  return ((d.file.y || '').startsWith('image/') ? t('pv_photo') : '📎 ' + (d.file.n || t('pv_file'))) + (d.body ? ' ' + d.body : '');
};

const root = document.getElementById('root');
const cfg = window.CONFIG || {};
if (!cfg.SUPABASE_URL || cfg.SUPABASE_URL.includes('YOUR-') || !window.supabase) {
  root.innerHTML = `<div class="auth"><div class="card"><h1>${esc(t('cfg_title'))}</h1><p class="sub">${esc(t('cfg_text'))}</p></div></div>`;
  return;
}
const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_PUBLISHABLE_KEY || cfg.SUPABASE_ANON_KEY);

function toast(text) {
  const box = $('#toast');
  const el = document.createElement('div');
  el.textContent = text;
  box.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

// ================= сквозное шифрование =================
const keyCache = new Map();   // id собеседника -> { pub, key }
const blobCache = new Map();  // id сообщения -> Promise<blob URL расшифрованного файла>
const lkKey = id => 'e2e_' + id;
function readLocalKeys(id) {
  try { const o = JSON.parse(lsGet(lkKey(id)) || 'null'); return o && o.priv && o.pub ? o : null; } catch { return null; }
}
function saveLocalKeys(id, priv, pub) { lsSet(lkKey(id), JSON.stringify({ priv, pub })); }
function removeLocalKeys(id) { try { localStorage.removeItem(lkKey(id)); } catch { /* ignore */ } }

function modal(html) {
  const o = document.createElement('div');
  o.className = 'modal';
  o.innerHTML = `<div class="mcard">${html}</div>`;
  document.body.appendChild(o);
  return o;
}
function askPassword({ title, text, verify, skip }) {
  return new Promise(resolve => {
    const o = modal(`<h3>${esc(title)}</h3><p class="d">${esc(text)}</p>
      <div class="field"><input id="m_pw" type="password" autocomplete="current-password"></div><div class="err" id="m_err"></div>
      <div class="mbtns"><button class="btn ghost" id="m_skip">${esc(skip)}</button><button class="btn" id="m_ok">OK</button></div>`);
    const inp = o.querySelector('#m_pw'), err = o.querySelector('#m_err'), ok = o.querySelector('#m_ok');
    inp.focus();
    const done = v => { o.remove(); resolve(v); };
    const submit = async () => {
      if (!inp.value) return;
      err.textContent = ''; ok.disabled = true;
      const bad = verify ? await verify(inp.value) : '';
      ok.disabled = false;
      if (bad) { err.textContent = bad; return; }
      done(inp.value);
    };
    ok.onclick = submit;
    o.querySelector('#m_skip').onclick = () => done(null);
    inp.onkeydown = e => { if (e.key === 'Enter') submit(); };
  });
}
async function verifyLoginPassword(pw) {
  const { error } = await sb.auth.signInWithPassword({ email: S.authEmail, password: pw });
  return error ? t('err_creds_pw') : '';
}
async function useKeys(privJwk, pubStr) {
  S.priv = await E2E.importPriv(privJwk);
  S.privJwk = privJwk; S.pubStr = pubStr;
  keyCache.clear();
  saveLocalKeys(S.me.id, privJwk, pubStr);
}
async function uploadBackup(pw) {
  const data = await E2E.wrapPriv(pw, S.privJwk);
  const { error } = await sb.from('key_backups').upsert({ user_id: S.me.id, data, updated_at: new Date().toISOString() });
  if (error) { toast(t('error', error.message)); return false; }
  S.hasBackup = true;
  return true;
}
async function publishKey(pw) {
  const { error } = await sb.from('profiles').update({ public_key: S.pubStr }).eq('id', S.me.id);
  if (error) { toast(t('error', error.message)); return false; }
  S.me.public_key = S.pubStr;
  if (pw) await uploadBackup(pw);
  return true;
}
// достаёт ключ с этого устройства, из резервной копии (по паролю) или создаёт новый
async function initKeys() {
  S.priv = S.privJwk = S.pubStr = null; S.hasBackup = false; keyCache.clear();
  const me = S.me, local = readLocalKeys(me.id);
  const { data: bk } = await sb.from('key_backups').select('data').eq('user_id', me.id).maybeSingle();
  S.hasBackup = !!bk;
  if (local && (!me.public_key || local.pub === me.public_key)) {
    await useKeys(local.priv, local.pub);
    if (!me.public_key) await publishKey(S.pw);
    return;
  }
  if (me.public_key && bk) { // другой компьютер: восстанавливаем ключ из резервной копии
    let jwk = null;
    const attempt = async pw => {
      try { const j = await E2E.unwrapPriv(pw, bk.data); if (E2E.pubToStr(j) !== me.public_key) return false; jwk = j; return true; } catch { return false; }
    };
    if (!(S.pw && await attempt(S.pw))) {
      await askPassword({ title: t('unlock_title'), text: t('unlock_text'), skip: t('skip'), verify: async pw => ((await attempt(pw)) ? '' : t('err_creds_pw')) });
    }
    if (jwk) await useKeys(jwk, me.public_key);
    return; // без пароля остаёмся в режиме «ключ заблокирован»
  }
  if (me.public_key) toast(t('keys_reset')); // ключ когда-то был, но восстановить его нечем
  const kp = await E2E.genKeyPair();
  await useKeys(kp.priv, kp.pub);
  let pw = S.pw;
  if (!pw) pw = await askPassword({ title: t('backup_title'), text: t('backup_text'), skip: t('skip'), verify: verifyLoginPassword });
  await publishKey(pw);
}
async function unlockKeys() {
  try { await initKeys(); } catch (e) { toast(t('error', e.message)); }
  S.pw = null;
  await loadMessages();
  renderRail(); renderSide(); renderMain();
}
async function makeBackup() {
  const pw = await askPassword({ title: t('backup_title'), text: t('backup_text'), skip: t('skip'), verify: verifyLoginPassword });
  if (pw && await uploadBackup(pw)) { toast(t('bk_done')); renderMain(); }
}
async function loadProfile(id) {
  const { data } = await sb.from('profiles').select(PCOLS).eq('id', id).maybeSingle();
  if (!data) return;
  if (S.profs[id]) patchProfile(id, data); else S.profs[id] = data;
}
async function sharedKeyFor(id) {
  if (!S.priv) return null;
  let p = S.profs[id];
  if (!p || !p.public_key) { await loadProfile(id); p = S.profs[id]; }
  if (!p || !p.public_key) return null;
  const c = keyCache.get(id);
  if (c && c.pub === p.public_key) return c.key;
  try {
    const key = await E2E.sharedKey(S.priv, p.public_key);
    keyCache.set(id, { pub: p.public_key, key });
    return key;
  } catch { return null; }
}
// раскладывает сообщение в m.dec = { body, file, enc, bad }
async function decryptMsg(m) {
  if (E2E.isEnc(m.body)) {
    const other = m.sender === S.me.id ? m.recipient : m.sender;
    const key = await sharedKeyFor(other);
    if (key) {
      try { const j = JSON.parse(await E2E.decStr(key, m.body)); m.dec = { body: j.t || '', file: j.f || null, enc: true }; return m; } catch { /* упадёт ниже */ }
    }
    m.dec = { body: '', file: null, enc: true, bad: true };
    return m;
  }
  // старые сообщения без шифрования
  m.dec = { body: m.body, file: m.file_url ? { u: m.file_url, n: m.file_name, y: m.file_type, s: m.file_size } : null, enc: false };
  return m;
}
function findMsg(id) {
  const all = [...(S.msgs[S.active] || []), ...Object.values(S.msgs).flat()];
  return all.find(x => String(x.id) === String(id));
}
function encBlobUrl(m) {
  if (!blobCache.has(m.id)) {
    blobCache.set(m.id, (async () => {
      const f = m.dec.file;
      const r = await fetch(f.u);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const pt = await E2E.decFile(await r.arrayBuffer(), f.k, f.i);
      return URL.createObjectURL(new Blob([pt], { type: f.y || 'application/octet-stream' }));
    })());
  }
  return blobCache.get(m.id);
}
async function sendEnc(to, text, file) {
  const key = await sharedKeyFor(to);
  if (!key) { toast(t(S.priv ? 'no_enc_peer' : 'enc_locked')); return false; }
  const body = await E2E.encStr(key, JSON.stringify({ v: 1, t: text, f: file || null }));
  const { data, error } = await sb.from('messages').insert({ sender: S.me.id, recipient: to, body }).select().single();
  if (error) { toast(t('not_sent', error.message)); return false; }
  data.dec = { body: text, file: file || null, enc: true };
  const list = (S.msgs[to] = S.msgs[to] || []);
  if (!list.some(x => x.id === data.id)) list.push(data);
  if (S.tab === 'chats' && S.active === to) renderMessages();
  renderSide();
  return true;
}
async function showSecCode(id) {
  const p = S.profs[id];
  if (!p || !p.public_key || !S.pubStr) return toast(t('no_enc_peer'));
  const code = await E2E.fingerprint(S.pubStr, p.public_key);
  const o = modal(`<h3>${esc(t('sec_title'))}</h3><p class="d">${esc(t('sec_text', name(p)))}</p><div class="code">${esc(code)}</div><div class="mbtns"><button class="btn" id="m_ok">OK</button></div>`);
  o.querySelector('#m_ok').onclick = () => o.remove();
}

// ================= настройки =================
function loadLocalSettings() {
  try { S.settings = { ...DEFAULTS, ...JSON.parse(lsGet('msg_settings') || '{}') }; } catch { /* ignore */ }
}
function saveLocalSettings() { lsSet('msg_settings', JSON.stringify(S.settings)); }
function applySettings() {
  const s = S.settings, r = document.documentElement;
  const dark = s.theme === 'system' ? matchMedia('(prefers-color-scheme: dark)').matches : s.theme === 'dark';
  r.dataset.theme = dark ? 'dark' : 'light';
  r.style.setProperty('--accent', s.accent);
  r.dataset.font = s.font;
  r.dataset.compact = s.compact ? '1' : '0';
  r.lang = s.lang;
}
async function setSetting(key, val) {
  S.settings[key] = val;
  applySettings();
  saveLocalSettings();
  if (key === 'show_online') {
    if (S.presence) { val ? await S.presence.track({ at: Date.now() }) : await S.presence.untrack(); }
    touchSeen();
  }
  if (key === 'notifications' && val) await ensureNotifPermission(true);
  if (S.me) {
    const { error } = await sb.from('profiles').update({ settings: S.settings }).eq('id', S.me.id);
    if (error) toast(t('setting_err', error.message));
    if (key === 'lang') renderApp(); else { renderMain(); renderRail(); }
  } else if (key === 'lang') renderAuth();
}
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (S.settings.theme === 'system') applySettings(); });

// ================= UI-хелперы =================
function avatar(p, size = 40, online = false, ring = false) {
  const dot = online ? '<i class="dot"></i>' : '';
  const st = `width:${size}px;height:${size}px;font-size:${Math.round(size * 0.42)}px`;
  const cls = 'av' + (ring ? ' ring' : '');
  if (p.avatar_url) return `<span class="${cls}" style="${st}"><img src="${esc(p.avatar_url)}" alt="">${dot}</span>`;
  const h = [...String(p.id)].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return `<span class="${cls}" style="${st};background:hsl(${h} 55% 45%)">${esc((name(p)[0] || '?').toUpperCase())}${dot}</span>`;
}
function fmtTime(iso) {
  return new Date(iso).toLocaleTimeString(loc(), { hour: '2-digit', minute: '2-digit', hour12: !S.settings.time24 });
}
function dayLabel(iso) {
  const d = new Date(iso), n = new Date(), y = new Date();
  y.setDate(n.getDate() - 1);
  if (d.toDateString() === n.toDateString()) return t('today');
  if (d.toDateString() === y.toDateString()) return t('yesterday');
  return d.toLocaleDateString(loc(), { day: 'numeric', month: 'long', year: d.getFullYear() === n.getFullYear() ? undefined : 'numeric' });
}
function statusInfo(p) {
  if (S.me && p.id === S.me.id) return { on: true, text: t('online') };
  if (S.online.has(p.id)) return { on: true, text: t('online') };
  if (!p.last_seen) return { on: false, text: t('offline') };
  const d = new Date(p.last_seen), n = new Date(), y = new Date();
  y.setDate(n.getDate() - 1);
  const tm = fmtTime(p.last_seen);
  if (d.toDateString() === n.toDateString()) return { on: false, text: t('seen_at', tm) };
  if (d.toDateString() === y.toDateString()) return { on: false, text: t('seen_yday', tm) };
  return { on: false, text: t('seen_date', d.toLocaleDateString(loc(), { day: 'numeric', month: 'short' }), tm) };
}
function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = 880;
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.25);
    setTimeout(() => ctx.close(), 400);
  } catch { /* ignore */ }
}
async function ensureNotifPermission(announce) {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'default') await Notification.requestPermission();
  if (Notification.permission !== 'granted' && announce) toast(t('notif_perm'));
  return Notification.permission === 'granted';
}
function showNotif(title, body, onclick) {
  if (S.settings.notifications && 'Notification' in window && Notification.permission === 'granted') {
    const n = new Notification(title, { body, silent: true });
    n.onclick = () => { window.api && window.api.focus(); onclick && onclick(); };
  }
  if (S.settings.sound) beep();
}

// ================= сохранённые аккаунты =================
const getAccounts = () => { try { return JSON.parse(lsGet('msg_accounts') || '[]'); } catch { return []; } };
const setAccounts = a => lsSet('msg_accounts', JSON.stringify(a));
function upsertAccount(patch) {
  if (!remember()) return;
  const list = getAccounts(), i = list.findIndex(x => x.id === patch.id);
  if (i >= 0) list[i] = { ...list[i], ...patch }; else list.push(patch);
  setAccounts(list);
}
function removeAccount(id) { setAccounts(getAccounts().filter(a => a.id !== id)); }
function syncAccountMeta() {
  if (S.me) upsertAccount({ id: S.me.id, username: S.me.username, display_name: S.me.display_name, avatar_url: S.me.avatar_url });
}
function accountList() {
  const list = getAccounts().filter(a => a.username && a.refresh_token);
  if (S.me && !list.some(a => a.id === S.me.id)) list.unshift({ id: S.me.id, username: S.me.username, display_name: S.me.display_name, avatar_url: S.me.avatar_url });
  return list;
}
async function switchAccount(id) {
  if (S.me && S.me.id === id) return;
  const acc = getAccounts().find(a => a.id === id);
  if (!acc) return;
  S.switching = true; stop(); await sb.auth.signOut({ scope: 'local' }); S.switching = false;
  const { data, error } = await sb.auth.refreshSession({ refresh_token: acc.refresh_token });
  if (error || !data.session) { toast(t('switch_fail')); removeAccount(id); renderAuth(); return; }
  S.addingAccount = false;
  if (!S.me && !S.starting) { S.starting = true; try { await start(data.session); } finally { S.starting = false; } }
}
async function addProfile() {
  S.prevId = S.me ? S.me.id : null;
  S.switching = true; stop(); await sb.auth.signOut({ scope: 'local' }); S.switching = false;
  S.addingAccount = true; authMode = 'login'; renderAuth();
}
async function logout() {
  if (S.privJwk && !S.hasBackup && !confirm(t('logout_nobackup'))) return; // без резерва выход = потеря ключа
  if (S.me) { removeAccount(S.me.id); removeLocalKeys(S.me.id); }
  await sb.auth.signOut();
}

// ================= прочитанное =================
const lrKey = () => 'lr_' + S.me.id;
function getLR() { try { return JSON.parse(lsGet(lrKey()) || '{}'); } catch { return {}; } }
function setLR(fid, iso) { const m = getLR(); m[fid] = iso; lsSet(lrKey(), JSON.stringify(m)); }
function unread(fid) {
  const lr = getLR()[fid];
  return (S.msgs[fid] || []).filter(m => m.sender === fid && (lr ? m.created_at > lr : !m.read_at)).length;
}
const totalUnread = () => S.friends.reduce((a, f) => a + unread(f.id), 0);
function updateTitle() {
  if (!S.me) { document.title = 'Speekly'; return; }
  const n = totalUnread();
  document.title = n ? `(${n}) Speekly` : 'Speekly';
}
async function markRead(fid) {
  const ms = S.msgs[fid] || [];
  setLR(fid, new Date().toISOString());
  if (ms.length && S.settings.read_receipts && ms.some(m => m.sender === fid && !m.read_at)) {
    const now = new Date().toISOString();
    ms.forEach(m => { if (m.sender === fid && !m.read_at) m.read_at = now; });
    await sb.from('messages').update({ read_at: now }).eq('recipient', S.me.id).eq('sender', fid).is('read_at', null);
  }
  updateTitle(); renderRail(); renderSide();
}

// ================= авторизация =================
let authMode = 'login';
function renderAuth() {
  const accs = authMode === 'login' ? getAccounts().filter(a => a.username && a.refresh_token) : [];
  const L = S.settings.lang;
  root.innerHTML = `
  <div class="langsw"><button data-lang="ru" class="${L === 'ru' ? 'on' : ''}">RU</button><button data-lang="en" class="${L === 'en' ? 'on' : ''}">EN</button></div>
  <div class="auth"><form class="card" id="authForm">
    <div class="authlogo">${LOGO}</div><p class="sub">${esc(t('app_sub'))}</p>
    <div class="tabs">
      <button type="button" data-mode="login" class="${authMode === 'login' ? 'on' : ''}">${esc(t('tab_login'))}</button>
      <button type="button" data-mode="register" class="${authMode === 'register' ? 'on' : ''}">${esc(t('tab_register'))}</button>
    </div>
    ${accs.length ? `<div class="saved"><div class="side-sec" style="padding-left:0">${esc(t('saved_accounts'))}</div>${accs.map(a => `<div class="accrow" data-acc="${a.id}">${avatar(a, 36)}<div><b>${esc(name(a))}</b><div class="prev">@${esc(a.username)}</div></div></div>`).join('')}</div>` : ''}
    <div class="field"><label>${esc(authMode === 'login' ? t('lbl_nick') : t('lbl_nick_new'))}</label><input id="a_user" autocomplete="username" maxlength="60" value="${authMode === 'login' ? esc(lsGet('msg_last_login') || '') : ''}"></div>
    <div class="field"><label>${esc(authMode === 'login' ? t('lbl_pass') : t('lbl_pass_new'))}</label><input id="a_pass" type="password" autocomplete="${authMode === 'login' ? 'current-password' : 'new-password'}"></div>
    ${authMode === 'register'
      ? `<div class="field"><label>${esc(t('lbl_pass2'))}</label><input id="a_pass2" type="password" autocomplete="new-password"></div>`
      : `<label class="chk"><input type="checkbox" id="a_rem" ${remember() ? 'checked' : ''}> ${esc(t('remember'))}</label>`}
    <div class="err" id="a_err"></div>
    <button class="btn full" type="submit">${esc(authMode === 'login' ? t('btn_login') : t('btn_register'))}</button>
    ${S.addingAccount && S.prevId ? `<button class="btn ghost full" type="button" style="margin-top:8px" data-acc="${S.prevId}">${esc(t('back'))}</button>` : ''}
  </form></div>`;
  $('#authForm').addEventListener('submit', onAuthSubmit);
}
async function onAuthSubmit(e) {
  e.preventDefault();
  const err = $('#a_err'); err.className = 'err'; err.textContent = '';
  const login = $('#a_user').value.trim().toLowerCase().replace(/^@/, ''), password = $('#a_pass').value;
  if (login.includes('@')) { err.textContent = t('err_nick_fmt'); return; }
  if (!login || password.length < 6) { err.textContent = t('err_fill'); return; }
  const btn = $('#authForm button[type=submit]'); btn.disabled = true;
  try {
    if (authMode === 'login') {
      const email = login + LOGIN_DOMAIN; // внутренний технический адрес; пользователь вводит только ник
      lsSet('msg_remember', $('#a_rem').checked ? 'true' : 'false');
      lsSet('msg_last_login', login);
      markAlive();
      S.pw = password; // нужен только на время входа, чтобы разблокировать ключ шифрования
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) { S.pw = null; err.textContent = /email not confirmed/i.test(error.message) ? t('msg_confirm') : (error.message.includes('Invalid') ? t('err_creds') : error.message); }
    } else {
      if (!/^[a-z0-9_]{3,20}$/.test(login)) { err.textContent = t('err_nick_fmt'); return; }
      if (password !== $('#a_pass2').value) { err.textContent = t('err_pass_match'); return; }
      lsSet('msg_remember', 'true'); lsSet('msg_last_login', login); markAlive();
      S.pw = password;
      const { data, error } = await sb.auth.signUp({ email: login + LOGIN_DOMAIN, password, options: { data: { username: login } } });
      if (error) { S.pw = null; err.textContent = /database|already|registered/i.test(error.message) ? t('err_taken') : error.message; }
      else if (!data.session) { S.pw = null; err.className = 'err ok'; err.textContent = t('msg_confirm'); }
    }
  } finally { btn.disabled = false; }
}

// ================= загрузка данных =================
async function start(session) {
  if (S.me) return;
  const { data: p, error } = await sb.from('profiles').select('*').eq('id', session.user.id).single();
  if (error || !p) { renderAuth(); toast(t('err_profile')); await sb.auth.signOut(); return; }
  S.me = p;
  S.settings = { ...DEFAULTS, ...(p.settings || {}) };
  S.addingAccount = false; S.editing = false; S.draft = null;
  saveLocalSettings(); applySettings(); syncAccountMeta();
  S.authEmail = session.user.email;
  try { await initKeys(); } catch (e) { toast(t('error', e.message)); } finally { S.pw = null; }
  await loadFriends();
  await loadMessages(); // расшифровка нужна ключи и профили друзей, поэтому строго после них
  renderApp();
  subscribe();
  touchSeen();
  S.timer = setInterval(() => { touchSeen(); refreshProfiles(); }, 60000);
  updateTitle();
  if (S.settings.notifications) ensureNotifPermission(false);
}
function stop() {
  if (S.dbChannel) sb.removeChannel(S.dbChannel);
  if (S.presence) sb.removeChannel(S.presence);
  if (S.timer) clearInterval(S.timer);
  keyCache.clear();
  blobCache.forEach(p => p.then(u => URL.revokeObjectURL(u)).catch(() => {}));
  blobCache.clear();
  Object.assign(S, { priv: null, privJwk: null, pubStr: null, hasBackup: false, pw: null, authEmail: null, me: null, profs: {}, friends: [], incoming: [], outgoing: [], msgs: {}, active: null, view: null, tab: 'chats', stab: 'appearance', editing: false, draft: null, online: new Set(), dbChannel: null, presence: null, timer: null, sideTab: null });
  updateTitle();
}
async function loadFriends() {
  const { data: fr, error } = await sb.from('friendships').select('*');
  if (error) { toast(t('load_err_friends', error.message)); return; }
  const other = f => (f.requester === S.me.id ? f.addressee : f.requester);
  const ids = [...new Set(fr.map(other))];
  if (ids.length) {
    const { data } = await sb.from('profiles').select(PCOLS).in('id', ids);
    (data || []).forEach(p => { S.profs[p.id] = p; });
  }
  S.friends = fr.filter(f => f.status === 'accepted' && S.profs[other(f)]).map(f => ({ ...S.profs[other(f)], fid: f.id }));
  S.incoming = fr.filter(f => f.status === 'pending' && f.addressee === S.me.id && S.profs[f.requester]).map(f => ({ ...S.profs[f.requester], fid: f.id }));
  S.outgoing = fr.filter(f => f.status === 'pending' && f.requester === S.me.id && S.profs[f.addressee]).map(f => ({ ...S.profs[f.addressee], fid: f.id }));
  if (S.active && !S.friends.some(f => f.id === S.active)) S.active = null;
  if (S.view && !S.friends.some(f => f.id === S.view)) S.view = null;
}
async function loadMessages() {
  const { data, error } = await sb.from('messages').select('*').order('created_at', { ascending: false }).limit(1000);
  if (error) { toast(t('load_err_msgs', error.message)); return; }
  await Promise.all(data.map(decryptMsg));
  S.msgs = {};
  data.reverse().forEach(m => {
    const o = m.sender === S.me.id ? m.recipient : m.sender;
    (S.msgs[o] = S.msgs[o] || []).push(m);
  });
}
function patchProfile(id, patch) {
  if (S.profs[id]) Object.assign(S.profs[id], patch);
  [S.friends, S.incoming, S.outgoing].forEach(list => list.forEach(p => { if (p.id === id) Object.assign(p, patch); }));
}
async function refreshProfiles() {
  if (!S.me) return;
  const ids = Object.keys(S.profs).filter(i => i !== S.me.id);
  if (!ids.length) return;
  const { data } = await sb.from('profiles').select(PCOLS).in('id', ids);
  (data || []).forEach(p => patchProfile(p.id, p));
  renderSide(); renderChatHeader();
  if (S.tab === 'friends') renderFriendCard();
}
async function touchSeen() {
  if (!S.me) return;
  const v = S.settings.show_online ? new Date().toISOString() : null;
  S.me.last_seen = v;
  await sb.from('profiles').update({ last_seen: v }).eq('id', S.me.id);
}

// ================= realtime =================
function subscribe() {
  S.dbChannel = sb.channel('db-changes')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, p => onMsgInsert(p.new))
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages' }, p => onMsgUpdate(p.new))
    .on('postgres_changes', { event: '*', schema: 'public', table: 'friendships' }, () => onFriendEvent())
    .subscribe();

  S.presence = sb.channel('online', { config: { presence: { key: S.me.id } } });
  S.presence
    .on('presence', { event: 'leave' }, ({ key }) => patchProfile(key, { last_seen: new Date().toISOString() }))
    .on('presence', { event: 'sync' }, () => {
      S.online = new Set(Object.keys(S.presence.presenceState()));
      renderSide(); renderChatHeader();
      if (S.tab === 'friends') renderFriendCard();
    })
    .subscribe(async status => {
      if (status === 'SUBSCRIBED' && S.settings.show_online) await S.presence.track({ at: Date.now() });
    });
}
async function onMsgInsert(m) {
  if (!S.me || (m.sender !== S.me.id && m.recipient !== S.me.id)) return;
  const o = m.sender === S.me.id ? m.recipient : m.sender;
  if ((S.msgs[o] || []).some(x => x.id === m.id)) return;
  await decryptMsg(m);
  if (!S.me) return;
  const list = (S.msgs[o] = S.msgs[o] || []);
  if (list.some(x => x.id === m.id)) return;
  list.push(m);
  if (m.recipient === S.me.id) {
    const looking = S.tab === 'chats' && S.active === o && document.hasFocus();
    if (looking) { await markRead(o); }
    else {
      if (!S.profs[o]) await loadFriends();
      showNotif(name(S.profs[o]), S.settings.preview ? prevText(m).slice(0, 120) : t('new_message'), () => { S.tab = 'chats'; openChat(o); });
    }
  }
  updateTitle(); renderRail(); renderSide();
  if (S.tab === 'chats' && S.active === o) renderMessages();
}
function onMsgUpdate(m) {
  if (!S.me) return;
  const o = m.sender === S.me.id ? m.recipient : m.sender;
  const x = (S.msgs[o] || []).find(y => y.id === m.id);
  if (x) { x.read_at = m.read_at; if (S.tab === 'chats' && S.active === o) renderMessages(false); }
}
async function onFriendEvent() {
  if (!S.me) return;
  const had = S.incoming.length;
  await loadFriends();
  if (S.incoming.length > had) {
    const last = S.incoming[S.incoming.length - 1];
    showNotif(t('notif_req'), t('notif_req_body', name(last)), () => { S.tab = 'friends'; renderApp(); });
  }
  renderRail(); renderSide(); renderMain();
}

// ================= каркас =================
function renderApp() {
  root.innerHTML = `<div class="app ${S.tab === 'profile' || S.tab === 'help' ? 'noside' : ''}"><nav class="rail" id="rail"></nav><aside class="side" id="side"></aside><main class="main" id="main"></main></div>`;
  S.sideTab = null;
  renderRail(); renderSide(); renderMain();
}
function renderRail() {
  const rail = $('#rail'); if (!rail || !S.me) return;
  const u = totalUnread(), r = S.incoming.length;
  const b = n => (n ? `<span class="badge-dot">${n > 99 ? '99+' : n}</span>` : '');
  const nav = (id, icon, label, badge) => `<button class="rnav ${S.tab === id ? 'on' : ''}" data-nav="${id}">${ic(icon)}<span>${esc(label)}</span>${badge || ''}</button>`;
  const vis = S.settings.show_online;
  rail.innerHTML = `
    <button class="ravatar" data-nav="profile" title="${esc(t('profile'))}">${avatar(S.me, 56)}</button>
    <div class="rnavs">${nav('chats', 'chat', t('chats'), b(u))}${nav('friends', 'users', t('friends'), b(r))}${nav('settings', 'gear', t('settings'))}${nav('help', 'help', t('help'))}</div>
    <div class="spacer"></div>
    <button class="statuspill" data-act="toggle-status" title="${esc(t('p_online'))}"><i class="sd ${vis ? 'on' : ''}"></i>${esc(vis ? t('st_online') : t('st_invisible'))}<span class="chev">⌄</span></button>`;
}

// ================= боковая панель =================
function renderSide() {
  const side = $('#side'); if (!side || !S.me) return;
  const app = $('.app'); if (app) app.classList.toggle('noside', S.tab === 'profile' || S.tab === 'help');
  if (S.sideTab !== S.tab) {
    S.sideTab = S.tab; S.csearch = '';
    if (S.tab === 'chats') side.innerHTML = `<div class="side-h"><span>${esc(t('chats'))}</span><button class="iconbtn" data-act="new-chat" title="${esc(t('new_chat'))}">${ic('compose', 20)}</button></div><div class="search">${ic('search', 18)}<input id="csearch" placeholder="${esc(t('search_chats'))}" autocomplete="off"></div><div class="scroll" id="clist"></div>`;
    if (S.tab === 'friends') side.innerHTML = `<div class="side-h"><span>${esc(t('friends'))}</span></div><div class="search">${ic('search', 18)}<input id="fsearch" placeholder="${esc(t('search_ph'))}" autocomplete="off"></div><div class="scroll"><div id="fres"></div><div id="flist"></div></div>`;
    if (S.tab === 'settings') side.innerHTML = `<div class="side-h">${esc(t('settings'))}</div><div class="scroll" id="slist"></div>`;
    if (S.tab === 'profile' || S.tab === 'help') side.innerHTML = '';
  }
  if (S.tab === 'chats') fillChats();
  if (S.tab === 'friends') fillFriends();
  if (S.tab === 'settings') fillSettingsList();
}
function fillChats() {
  const box = $('#clist'); if (!box) return;
  const last = f => { const m = S.msgs[f.id]; return m && m.length ? m[m.length - 1].created_at : ''; };
  const q = (S.csearch || '').trim().toLowerCase();
  const list = S.friends.filter(f => !q || name(f).toLowerCase().includes(q) || f.username.includes(q))
    .sort((a, b) => last(b).localeCompare(last(a)) || name(a).localeCompare(name(b)));
  if (!list.length) { box.innerHTML = `<div class="empty small">${S.friends.length ? esc(t('nobody')) : t('no_friends')}</div>`; return; }
  box.innerHTML = list.map(f => {
    const ms = S.msgs[f.id] || [], l = ms[ms.length - 1], u = unread(f.id);
    return `<div class="item ${S.active === f.id ? 'active' : ''}" data-chat="${f.id}">
      ${avatar(f, 42, S.online.has(f.id))}
      <div class="meta">
        <div class="row"><b>${esc(name(f))}</b><span class="time">${l ? fmtTime(l.created_at) : ''}</span></div>
        <div class="row"><span class="prev">${l ? esc((l.sender === S.me.id ? t('you_prefix') : '') + prevText(l)) : esc(t('no_messages'))}</span>${u ? `<span class="badge">${u}</span>` : ''}</div>
      </div></div>`;
  }).join('');
}
function fillFriends() {
  const box = $('#flist'); if (!box) return;
  let h = '';
  if (S.incoming.length) {
    h += `<div class="side-sec">${esc(t('incoming'))}</div>` + S.incoming.map(p => `
      <div class="item">${avatar(p, 38)}<div class="meta"><b>${esc(name(p))}</b><div class="prev">@${esc(p.username)}</div></div>
      <div class="acts"><button class="btn sm" data-act="accept" data-id="${p.fid}">${esc(t('accept'))}</button><button class="btn sm ghost" data-act="remove" data-id="${p.fid}">✕</button></div></div>`).join('');
  }
  if (S.outgoing.length) {
    h += `<div class="side-sec">${esc(t('outgoing'))}</div>` + S.outgoing.map(p => `
      <div class="item">${avatar(p, 38)}<div class="meta"><b>${esc(name(p))}</b><div class="prev">@${esc(p.username)}</div></div>
      <div class="acts"><button class="btn sm ghost" data-act="remove" data-id="${p.fid}">${esc(t('cancel'))}</button></div></div>`).join('');
  }
  h += `<div class="side-sec">${esc(t('my_friends', S.friends.length))}</div>`;
  h += S.friends.length
    ? [...S.friends].sort((a, b) => name(a).localeCompare(name(b))).map(p => `
      <div class="item ${S.view === p.id ? 'active' : ''}" data-friend="${p.id}">${avatar(p, 38, S.online.has(p.id))}<div class="meta"><b>${esc(name(p))}</b><div class="prev">@${esc(p.username)}</div></div></div>`).join('')
    : `<div class="empty small">${esc(t('list_empty'))}</div>`;
  box.innerHTML = h;
}
function settingsTabs() {
  return [['appearance', '🎨', t('s_appearance')], ['notifications', '🔔', t('s_notifications')], ['privacy', '🔒', t('s_privacy')], ['chats', '💬', t('s_chats')], ['account', '🔑', t('s_account')]];
}
function fillSettingsList() {
  const box = $('#slist'); if (!box) return;
  box.innerHTML = settingsTabs().map(([id, ic, tt]) => `<div class="item ${S.stab === id ? 'active' : ''}" data-stab="${id}"><span style="font-size:1.2rem;width:28px;text-align:center">${ic}</span><b>${esc(tt)}</b></div>`).join('');
}

// поиск людей
let searchTimer;
function onSearchInput(e) {
  clearTimeout(searchTimer);
  const q = e.target.value.trim().toLowerCase().replace(/^@/, '').replace(/[^a-z0-9_]/g, '');
  const res = $('#fres');
  if (!res) return;
  if (!q) { res.innerHTML = ''; return; }
  searchTimer = setTimeout(async () => {
    const { data, error } = await sb.from('profiles').select(PCOLS)
      .ilike('username', q.replace(/_/g, '\\_') + '%').neq('id', S.me.id).limit(10);
    if (error) { res.innerHTML = `<div class="err">${esc(error.message)}</div>`; return; }
    (data || []).forEach(p => { S.profs[p.id] = p; });
    const state = id => {
      if (S.friends.some(f => f.id === id)) return t('st_friend');
      if (S.outgoing.some(f => f.id === id)) return t('st_sent');
      if (S.incoming.some(f => f.id === id)) return t('st_wait');
      return '';
    };
    res.innerHTML = `<div class="side-sec">${esc(t('search_results'))}</div>` + (data.length ? data.map(p => `
      <div class="item">${avatar(p, 38)}<div class="meta"><b>${esc(name(p))}</b><div class="prev">@${esc(p.username)}</div></div>
      <div class="acts">${state(p.id) ? `<span class="prev">${esc(state(p.id))}</span>` : `<button class="btn sm" data-act="add" data-id="${p.id}">${esc(t('add'))}</button>`}</div></div>`).join('') : `<div class="empty small">${esc(t('nobody'))}</div>`);
  }, 250);
}

// ================= действия с друзьями =================
async function addFriend(id) {
  const { error } = await sb.from('friendships').insert({ requester: S.me.id, addressee: id });
  if (error) {
    if (error.code === '42501') toast(t('req_blocked'));
    else if (error.code === '23505') toast(t('req_exists'));
    else toast(t('error', error.message));
    return;
  }
  toast(t('req_sent'));
  await loadFriends(); renderRail(); fillFriends();
  const inp = $('#fsearch'); if (inp) onSearchInput({ target: inp });
}
async function acceptFriend(fid) {
  const { error } = await sb.from('friendships').update({ status: 'accepted' }).eq('id', fid);
  if (error) return toast(t('error', error.message));
  await loadFriends(); renderRail(); renderSide(); renderMain();
}
async function removeFriendship(fid) {
  const { error } = await sb.from('friendships').delete().eq('id', fid);
  if (error) return toast(t('error', error.message));
  await loadFriends(); renderRail(); renderSide(); renderMain();
}

// ================= основная область =================
function renderMain() {
  const main = $('#main'); if (!main || !S.me) return;
  if (S.tab === 'chats') {
    if (S.active && S.profs[S.active]) renderChat(); else main.innerHTML = `<div class="empty">${esc(t('pick_chat'))}</div>`;
  } else if (S.tab === 'friends') renderFriendCard();
  else if (S.tab === 'profile') renderProfilePage();
  else if (S.tab === 'help') renderHelp();
  else renderSettingsPage();
}

// ---- чат ----
function openChat(fid) {
  S.tab = 'chats'; S.active = fid; S.sideTab = null;
  renderRail(); renderSide(); renderMain();
  loadProfile(fid).then(() => { if (S.active === fid) renderChatHeader(); }); // вдруг у друга появился ключ
  markRead(fid);
}
function renderChat() {
  const main = $('#main');
  main.innerHTML = `<div class="chead" id="chead"></div><div id="msgs"></div>
    <div class="composer">
      <button class="cbtn" data-act="attach" title="${esc(t('attach'))}">${ic('clip', 20)}</button>
      <button class="cbtn" data-act="attach-img" title="${esc(t('attach_img'))}">${ic('image', 20)}</button>
      <div class="cinput"><textarea id="minp" rows="1" placeholder="${esc(t('msg_ph'))}" maxlength="4000"></textarea>
        <button class="emobtn" data-act="emoji" title="${esc(t('emoji'))}">${ic('smile', 22)}</button></div>
      <button class="sendbtn" id="msend" title="${esc(t('send'))}">${ic('send', 20)}</button>
      <div class="emopop" id="emopop" hidden>${EMOJIS.map(x => `<button data-emo="${x}">${x}</button>`).join('')}</div>
      <input type="file" id="fileany" hidden><input type="file" id="fileimg" accept="image/*,video/*" hidden>
    </div>`;
  renderChatHeader(); renderMessages();
  const inp = $('#minp');
  inp.focus();
  inp.addEventListener('input', () => { inp.style.height = 'auto'; inp.style.height = Math.min(inp.scrollHeight, 140) + 'px'; });
  inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const send = S.settings.enter_send ? !e.shiftKey : e.ctrlKey;
    if (send) { e.preventDefault(); sendMessage(); }
  });
  $('#msend').addEventListener('click', sendMessage);
  ['#fileany', '#fileimg'].forEach(id => $(id).addEventListener('change', e => { const f = e.target.files[0]; e.target.value = ''; if (f) sendFile(f); }));
  inp.addEventListener('paste', e => {
    const f = e.clipboardData && [...e.clipboardData.files][0];
    if (f) { e.preventDefault(); sendFile(f); }
  });
}
function insertEmoji(x) {
  const inp = $('#minp'); if (!inp) return;
  const a = inp.selectionStart ?? inp.value.length, b = inp.selectionEnd ?? a;
  inp.value = inp.value.slice(0, a) + x + inp.value.slice(b);
  inp.focus(); inp.selectionStart = inp.selectionEnd = a + x.length;
}
function zoom(url) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = `<img src="${esc(url)}" alt="">`;
  box.addEventListener('click', () => box.remove());
  document.body.appendChild(box);
}
async function downloadFile({ url, name: fname, mid }) {
  try {
    if (mid) { const m = findMsg(mid); url = await encBlobUrl(m); fname = m.dec.file.n; }
    let href = url, temp = false;
    if (!url.startsWith('blob:')) { href = URL.createObjectURL(await (await fetch(url)).blob()); temp = true; }
    const a = document.createElement('a');
    a.href = href; a.download = fname || 'file';
    document.body.appendChild(a); a.click(); a.remove();
    if (temp) setTimeout(() => URL.revokeObjectURL(href), 4000);
  } catch (e) { toast(t('error', e.message)); }
}
function attHTML(m) {
  const f = m.dec && m.dec.file;
  if (!f) return '';
  const n = esc(f.n || 'file'), ty = f.y || '';
  const dlBtn = attrs => `<button class="dl" data-act="download" ${attrs} title="${esc(t('download'))}">${ic('download', 18)}</button>`;
  if (f.k) { // зашифрованное вложение: фото и видео подставит hydrate() после расшифровки
    if (/^(image|video)\//.test(ty)) return `<div class="att media" data-encmsg="${esc(m.id)}"><div class="ph"></div></div>`;
    return `<div class="att file"><span class="fic">${ic('file', 22)}</span><span class="fmeta"><b>${n}</b><span>${esc(fmtSize(f.s))}</span></span>${dlBtn(`data-mid="${esc(m.id)}"`)}</div>`;
  }
  const u = esc(f.u), dl = dlBtn(`data-url="${u}" data-name="${n}"`); // старые вложения без шифрования
  if (ty.startsWith('image/')) return `<div class="att media"><img src="${u}" alt="${n}" data-zoom="${u}">${dl}</div>`;
  if (ty.startsWith('video/')) return `<div class="att media"><video src="${u}" controls preload="metadata"></video>${dl}</div>`;
  return `<div class="att file"><span class="fic">${ic('file', 22)}</span><span class="fmeta"><b>${n}</b><span>${esc(fmtSize(f.s))}</span></span>${dl}</div>`;
}
let stickBottom = false;
function keepBottom() { const box = $('#msgs'); if (box && stickBottom) box.scrollTop = box.scrollHeight; }
function hydrate() {
  document.querySelectorAll('[data-encmsg]').forEach(async el => {
    const m = findMsg(el.dataset.encmsg); if (!m) return;
    const f = m.dec.file, isImg = (f.y || '').startsWith('image/');
    try {
      const url = await encBlobUrl(m);
      if (!el.isConnected) return;
      const u = esc(url), n = esc(f.n || 'file');
      el.removeAttribute('data-encmsg');
      el.innerHTML = (isImg ? `<img src="${u}" alt="${n}" data-zoom="${u}">` : `<video src="${u}" controls preload="metadata"></video>`)
        + `<button class="dl" data-act="download" data-url="${u}" data-name="${n}" title="${esc(t('download'))}">${ic('download', 18)}</button>`;
      const img = el.querySelector('img');
      if (img && !img.complete) img.addEventListener('load', keepBottom, { once: true });
      else keepBottom();
    } catch { blobCache.delete(m.id); if (el.isConnected) el.innerHTML = '<div class="ph bad">⚠</div>'; }
  });
}
function renderChatHeader() {
  const h = $('#chead'); if (!h || !S.active) return;
  const p = S.profs[S.active]; if (!p) return;
  const st = statusInfo(p);
  const badge = S.priv && p.public_key
    ? `<button class="e2e" data-act="seccode" data-id="${p.id}" title="${esc(t('sec_title'))}">${ic('lock', 15)} ${esc(t('e2e_on'))}</button>`
    : `<span class="e2e off">${ic('lock', 15)} ${esc(t(S.priv ? 'e2e_wait' : 'e2e_locked'))}</span>`;
  h.innerHTML = `${avatar(p, 40, st.on)}<div><div class="nm">${esc(name(p))}${p.verified ? VERIFIED() : ''}</div><div class="st ${st.on ? 'on' : ''}">${esc(st.text)}</div></div>${badge}`;
}
function renderMessages(scroll = true) {
  const box = $('#msgs'); if (!box || !S.active) return;
  const ms = S.msgs[S.active] || [];
  const keep = box.scrollTop;
  let lastDay = '';
  box.innerHTML = ms.map(m => {
    const d = new Date(m.created_at).toDateString();
    let sep = '';
    if (d !== lastDay) { sep = `<div class="day">${esc(dayLabel(m.created_at))}</div>`; lastDay = d; }
    const mine = m.sender === S.me.id, p = S.profs[S.active];
    const dd = m.dec || { body: m.body, file: null };
    const media = dd.file && /^(image|video)\//.test(dd.file.y || '');
    const av = mine ? '' : (p ? avatar(p, 34) : '<span class="avgap"></span>');
    const txt = dd.bad ? `<span class="txt locked">🔒 ${esc(t('cant_decrypt'))}</span>` : (dd.body ? `<span class="txt">${esc(dd.body)}</span>` : '');
    return sep + `<div class="msg ${mine ? 'me' : 'them'}">${av}<div class="bubble ${media ? 'media' : ''}">${mine ? '' : `<div class="sname">${esc(name(p))}</div>`}${attHTML(m)}${txt}<span class="meta">${fmtTime(m.created_at)}${mine ? (m.read_at ? ' ✓✓' : ' ✓') : ''}</span></div></div>`;
  }).join('') || `<div class="empty small">${esc(t('write_first'))}</div>`;
  stickBottom = scroll;
  box.scrollTop = scroll ? box.scrollHeight : keep;
  box.querySelectorAll('img').forEach(i => { if (!i.complete) i.addEventListener('load', keepBottom, { once: true }); });
  hydrate();
}
async function sendMessage() {
  const inp = $('#minp'); if (!inp || !S.active) return;
  const body = inp.value.trim(); if (!body) return;
  inp.value = ''; inp.style.height = 'auto';
  if (!(await sendEnc(S.active, body))) inp.value = body;
}
async function sendFile(file) {
  if (!S.active || !file) return;
  const MAX = 25, to = S.active;
  if (file.size > MAX * 1024 * 1024) return toast(t('err_big', MAX));
  if (!(await sharedKeyFor(to))) return toast(t(S.priv ? 'no_enc_peer' : 'enc_locked'));
  const inp = $('#minp'), caption = inp ? inp.value.trim() : '';
  toast(t('uploading'));
  let enc;
  try { enc = await E2E.encFile(await file.arrayBuffer()); } catch (e) { return toast(t('error', e.message)); }
  // в хранилище лежит только шифртекст под случайным именем; имя, тип и ключ файла едут внутри зашифрованного сообщения
  const path = `${S.me.id}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.bin`;
  const up = await sb.storage.from('chat-files').upload(path, new Blob([enc.ct]), { contentType: 'application/octet-stream' });
  if (up.error) return toast(t('err_upload', up.error.message));
  const url = sb.storage.from('chat-files').getPublicUrl(path).data.publicUrl;
  const ok = await sendEnc(to, caption, { u: url, n: (file.name || 'file').slice(0, 200), y: (file.type || '').slice(0, 100), s: file.size, k: enc.k, i: enc.i });
  const cur = $('#minp');
  if (ok && cur && S.active === to && caption) { cur.value = ''; cur.style.height = 'auto'; }
}

// ---- шапка профиля (обложка + аватар) ----
function profileHead(p) {
  const st = statusInfo(p);
  return `<div class="pbanner">${p.banner_url ? `<img class="bimg" src="${esc(p.banner_url)}" alt="">` : ''}<div class="pshade"></div>
    <div class="pinfo">${avatar(p, 96, false, true)}
      <div class="ptext"><div class="pname"><span>${esc(name(p))}</span>${p.verified ? VERIFIED() : ''}</div>
        <div class="pstat"><i class="sd ${st.on ? 'on' : ''}"></i>${esc(st.text)}</div>
        <div class="puser">@${esc(p.username)}</div></div></div></div>`;
}

// ---- карточка друга ----
function renderFriendCard() {
  const main = $('#main'); if (!main) return;
  const p = S.view && S.friends.find(f => f.id === S.view);
  if (!p) { main.innerHTML = `<div class="empty">${t('pick_friend')}</div>`; return; }
  main.innerHTML = `<div class="page wide">${profileHead(p)}
    <div class="pbio">${esc(p.bio || t('no_bio'))}</div>
    <div class="center"><button class="btn" data-act="message" data-id="${p.id}">${esc(t('write'))}</button>
    <button class="btn ghost" data-act="seccode" data-id="${p.id}">${ic('lock', 16)} ${esc(t('sec_btn'))}</button>
    <button class="btn danger" data-act="unfriend" data-id="${p.fid}">${esc(t('unfriend'))}</button></div></div>`;
}

// ---- свой профиль ----
function captureDraft() {
  const n = $('#p_name'), b = $('#p_bio');
  if (n && b) S.draft = { name: n.value, bio: b.value };
}
function renderProfilePage() {
  const main = $('#main'), me = S.me;
  const dn = S.draft ? S.draft.name : me.display_name, bio = S.draft ? S.draft.bio : me.bio;
  const accs = accountList();
  const edit = S.editing ? `<div class="editbox">
      <div class="mrow"><span class="lbl">${esc(t('photo'))}</span>${avatar(me, 56)}
        <button class="btn sm" data-act="avatar-pick">${esc(t('upload'))}</button>${me.avatar_url ? `<button class="btn sm ghost" data-act="avatar-remove">${esc(t('remove'))}</button>` : ''}</div>
      <div class="mrow"><span class="lbl">${esc(t('banner'))}</span>
        <button class="btn sm" data-act="banner-pick">${esc(t('upload'))}</button>${me.banner_url ? `<button class="btn sm ghost" data-act="banner-remove">${esc(t('remove'))}</button>` : ''}</div>
      <div class="hint">${esc(t('media_hint'))}</div>
      <input type="file" id="avfile" accept="image/*" hidden><input type="file" id="bnfile" accept="image/*" hidden>
      <div class="field"><label>${esc(t('f_name'))}</label><input id="p_name" maxlength="40" value="${esc(dn)}"></div>
      <div class="field"><label>${esc(t('f_nick'))}</label><input value="@${esc(me.username)}" readonly></div>
      <div class="field"><label>${esc(t('f_bio'))}</label><textarea id="p_bio" maxlength="200">${esc(bio)}</textarea></div>
      <button class="btn" data-act="save-profile">${esc(t('save'))}</button></div>` : '';
  main.innerHTML = `<div class="page wide">${profileHead(me)}
    ${me.bio && !S.editing ? `<div class="pbio">${esc(me.bio)}</div>` : ''}
    <div class="center"><button class="btn outline" data-act="toggle-edit">✎ ${esc(t('edit_profile'))}</button></div>
    ${edit}
    <div class="pcard2"><div class="ph"><span>${esc(t('switch_profile'))}</span><span>👤</span></div>
      ${accs.map(a => `<div class="accrow ${S.me.id === a.id ? 'cur' : ''}" data-acc="${a.id}">${avatar(a, 44)}<div><b>${esc(name(a))}</b><div class="prev">@${esc(a.username)}</div></div>${S.me.id === a.id ? '<span class="chk2">✓</span>' : ''}</div>`).join('')}
      ${remember() ? `<button class="btn big full" data-act="add-profile">+ ${esc(t('add_profile'))}</button>` : ''}</div></div>`;
  const af = $('#avfile'); if (af) af.addEventListener('change', e => { if (e.target.files[0]) uploadMedia('avatar', e.target.files[0]); });
  const bf = $('#bnfile'); if (bf) bf.addEventListener('change', e => { if (e.target.files[0]) uploadMedia('banner', e.target.files[0]); });
}
async function updateMyProfile(patch) {
  const { data, error } = await sb.from('profiles').update(patch).eq('id', S.me.id).select().single();
  if (error) { toast(t('error', error.message)); return false; }
  S.me = { ...S.me, ...data };
  syncAccountMeta(); renderRail(); renderMain();
  return true;
}
async function saveProfile() {
  const display_name = $('#p_name').value.trim(), bio = $('#p_bio').value.trim();
  S.draft = null;
  if (await updateMyProfile({ display_name, bio })) toast(t('saved'));
}
function loadImage(file) {
  return new Promise((res, rej) => { const img = new Image(); img.onload = () => res(img); img.onerror = rej; img.src = URL.createObjectURL(file); });
}
const EXTS = ['jpg', 'gif', 'webp', 'png'];
async function uploadMedia(kind, file) {
  captureDraft();
  if (!file.type.startsWith('image/')) return toast(t('err_img'));
  const maxMb = kind === 'avatar' ? 4 : 8;
  let blob, ext, ctype;
  if (/^image\/(gif|webp)$/.test(file.type)) { // анимацию не трогаем: оригинал сохраняет анимированность
    if (file.size > maxMb * 1024 * 1024) return toast(t('err_big', maxMb));
    blob = file; ext = file.type === 'image/gif' ? 'gif' : 'webp'; ctype = file.type;
  } else {
    let img; try { img = await loadImage(file); } catch { return toast(t('err_img')); }
    const [w, h] = kind === 'avatar' ? [256, 256] : [1200, 420];
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const ratio = w / h, sr = img.width / img.height;
    let sw, sh;
    if (sr > ratio) { sh = img.height; sw = sh * ratio; } else { sw = img.width; sh = sw / ratio; }
    c.getContext('2d').drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2, sw, sh, 0, 0, w, h);
    URL.revokeObjectURL(img.src);
    blob = await new Promise(r => c.toBlob(r, 'image/jpeg', 0.88)); ext = 'jpg'; ctype = 'image/jpeg';
  }
  const bucket = sb.storage.from('avatars'), base = `${S.me.id}/${kind}`;
  await bucket.remove(EXTS.map(e => `${base}.${e}`));
  const up = await bucket.upload(`${base}.${ext}`, blob, { upsert: true, contentType: ctype });
  if (up.error) return toast(t('err_upload', up.error.message));
  const url = bucket.getPublicUrl(`${base}.${ext}`).data.publicUrl + '?v=' + Date.now();
  await updateMyProfile({ [kind === 'avatar' ? 'avatar_url' : 'banner_url']: url });
}
async function removeMedia(kind) {
  captureDraft();
  await sb.storage.from('avatars').remove(EXTS.map(e => `${S.me.id}/${kind}.${e}`));
  await updateMyProfile({ [kind === 'avatar' ? 'avatar_url' : 'banner_url']: null });
}

// ---- помощь ----
function renderHelp() {
  $('#main').innerHTML = `<div class="page wide helplogo">${LOGO}<h2>${esc(t('help_title'))}</h2>${[1, 2, 3, 4, 5, 6].map(i => `<div class="srow"><div><div class="t">${esc(t('help_' + i + '_t'))}</div><div class="d">${esc(t('help_' + i + '_d'))}</div></div></div>`).join('')}</div>`;
}

// ---- настройки ----
const toggleRow = (key, tt, d) => `<div class="srow"><div><div class="t">${esc(tt)}</div><div class="d">${esc(d)}</div></div><button class="switch ${S.settings[key] ? 'on' : ''}" data-toggle="${key}" aria-label="${esc(tt)}"></button></div>`;
const segRow = (key, tt, d, opts) => `<div class="srow"><div><div class="t">${esc(tt)}</div><div class="d">${esc(d)}</div></div><div class="seg">${opts.map(([v, l]) => `<button class="${S.settings[key] === v ? 'on' : ''}" data-set="${key}" data-val="${v}">${esc(l)}</button>`).join('')}</div></div>`;

function renderSettingsPage() {
  const main = $('#main'), s = S.settings;
  let h = '';
  if (S.stab === 'appearance') {
    h = `<h2>${esc(t('s_appearance'))}</h2>
    ${segRow('lang', t('lang'), t('lang_d'), [['ru', 'Русский'], ['en', 'English']])}
    ${segRow('theme', t('theme'), t('theme_d'), [['dark', t('theme_dark')], ['light', t('theme_light')], ['system', t('theme_system')]])}
    <div class="srow"><div><div class="t">${esc(t('accent'))}</div><div class="d">${esc(t('accent_d'))}</div></div><div class="swatches">${ACCENTS.map(c => `<button class="${s.accent === c ? 'on' : ''}" style="background:${c}" data-set="accent" data-val="${c}" aria-label="${c}"></button>`).join('')}</div></div>
    ${segRow('font', t('font'), t('font_d'), [['small', t('font_small')], ['normal', t('font_normal')], ['large', t('font_large')]])}
    ${toggleRow('compact', t('compact'), t('compact_d'))}`;
  } else if (S.stab === 'notifications') {
    h = `<h2>${esc(t('s_notifications'))}</h2>
    ${toggleRow('notifications', t('n_win'), t('n_win_d'))}
    ${toggleRow('sound', t('n_sound'), t('n_sound_d'))}
    ${toggleRow('preview', t('n_preview'), t('n_preview_d'))}
    <div class="srow"><div><div class="t">${esc(t('n_test'))}</div><div class="d">${esc(t('n_test_d'))}</div></div><button class="btn sm ghost" data-act="test-notif">${esc(t('check'))}</button></div>`;
  } else if (S.stab === 'privacy') {
    h = `<h2>${esc(t('s_privacy'))}</h2>
    ${toggleRow('allow_requests', t('p_req'), t('p_req_d'))}
    ${toggleRow('show_online', t('p_online'), t('p_online_d'))}
    ${toggleRow('read_receipts', t('p_read'), t('p_read_d'))}`;
  } else if (S.stab === 'chats') {
    h = `<h2>${esc(t('s_chats'))}</h2>
    ${toggleRow('enter_send', t('c_enter'), t('c_enter_d'))}
    ${toggleRow('time24', t('c_24'), t('c_24_d'))}`;
  } else {
    h = `<h2>${esc(t('s_account'))}</h2>
    <div class="srow"><div><div class="t">${esc(t('a_login'))}</div><div class="d">@${esc(S.me.username)}</div></div></div>
    <h3 style="margin:22px 0 10px">${esc(t('a_chpass'))}</h3>
    <div class="field"><label>${esc(t('a_new'))}</label><input id="n_pass" type="password" autocomplete="new-password"></div>
    <div class="field"><label>${esc(t('a_new2'))}</label><input id="n_pass2" type="password" autocomplete="new-password"></div>
    <div class="err" id="n_err"></div><button class="btn" data-act="save-pass">${esc(t('a_chpass'))}</button>
    <h3 style="margin:26px 0 6px">${esc(t('enc_title'))}</h3>
    <div class="srow"><div><div class="t">${esc(S.priv ? t('enc_on') : t('enc_off'))}</div><div class="d">${esc(S.priv ? t('enc_on_d') : t('enc_off_d'))}</div></div>${S.priv ? '' : `<button class="btn sm" data-act="unlock">${esc(t('unlock_btn'))}</button>`}</div>
    ${S.priv ? `<div class="srow"><div><div class="t">${esc(t('bk_title'))}</div><div class="d">${esc(S.hasBackup ? t('bk_on') : t('bk_off'))}</div></div>${S.hasBackup ? '' : `<button class="btn sm" data-act="make-backup">${esc(t('bk_make'))}</button>`}</div>` : ''}
    <div class="srow" style="margin-top:28px"><div><div class="t">${esc(t('a_logout'))}</div><div class="d">${esc(t('a_logout_d'))}</div></div><button class="btn danger sm" data-act="logout">${esc(t('a_logout_btn'))}</button></div>`;
  }
  main.innerHTML = `<div class="page">${h}</div>`;
}
async function savePass() {
  const err = $('#n_err'); err.className = 'err'; err.textContent = '';
  const a = $('#n_pass').value, b = $('#n_pass2').value;
  if (a.length < 6) { err.textContent = t('a_min6'); return; }
  if (a !== b) { err.textContent = t('err_pass_match'); return; }
  const { error } = await sb.auth.updateUser({ password: a });
  if (error) { err.textContent = error.message; return; }
  if (S.privJwk) await uploadBackup(a); // резерв ключа привязан к паролю, поэтому перешифровываем под новый
  err.className = 'err ok'; err.textContent = t('a_changed');
  $('#n_pass').value = ''; $('#n_pass2').value = '';
}

// ================= события =================
root.addEventListener('click', async e => {
  const pop = $('#emopop');
  if (pop && !pop.hidden && !e.target.closest('#emopop,[data-act="emoji"]')) pop.hidden = true;
  const el = e.target.closest('[data-nav],[data-chat],[data-friend],[data-stab],[data-toggle],[data-set],[data-act],[data-acc],[data-lang],[data-mode],[data-emo],[data-zoom]');
  if (!el) return;
  const d = el.dataset;
  if (d.emo !== undefined) { insertEmoji(d.emo); return; }
  if (d.zoom) { zoom(d.zoom); return; }
  if (d.lang) { setSetting('lang', d.lang); }
  else if (d.mode) { authMode = d.mode; renderAuth(); }
  else if (d.acc) switchAccount(d.acc);
  else if (d.nav) { S.tab = d.nav; S.sideTab = null; renderRail(); renderSide(); renderMain(); }
  else if (d.chat) openChat(d.chat);
  else if (d.friend) { S.view = d.friend; fillFriends(); renderFriendCard(); }
  else if (d.stab) { S.stab = d.stab; fillSettingsList(); renderMain(); }
  else if (d.toggle) setSetting(d.toggle, !S.settings[d.toggle]);
  else if (d.set) setSetting(d.set, d.val);
  else if (d.act) {
    switch (d.act) {
      case 'add': addFriend(d.id); break;
      case 'accept': acceptFriend(Number(d.id)); break;
      case 'remove': removeFriendship(Number(d.id)); break;
      case 'unfriend': if (confirm(t('confirm_unfriend'))) removeFriendship(Number(d.id)); break;
      case 'message': openChat(d.id); break;
      case 'toggle-edit': S.editing = !S.editing; S.draft = null; renderMain(); break;
      case 'avatar-pick': $('#avfile').click(); break;
      case 'avatar-remove': removeMedia('avatar'); break;
      case 'banner-pick': $('#bnfile').click(); break;
      case 'banner-remove': removeMedia('banner'); break;
      case 'save-profile': saveProfile(); break;
      case 'add-profile': addProfile(); break;
      case 'save-pass': savePass(); break;
      case 'test-notif':
        if (await ensureNotifPermission(true)) showNotif('Speekly', t('notif_test_body'), null);
        else if (S.settings.sound) beep();
        break;
      case 'attach': $('#fileany').click(); break;
      case 'attach-img': $('#fileimg').click(); break;
      case 'emoji': { const p = $('#emopop'); if (p) p.hidden = !p.hidden; break; }
      case 'download': downloadFile({ url: d.url, name: d.name, mid: d.mid }); break;
      case 'seccode': showSecCode(d.id); break;
      case 'unlock': unlockKeys(); break;
      case 'make-backup': makeBackup(); break;
      case 'new-chat': S.tab = 'friends'; S.sideTab = null; renderRail(); renderSide(); renderMain(); { const f = $('#fsearch'); if (f) f.focus(); } break;
      case 'toggle-status': setSetting('show_online', !S.settings.show_online); break;
      case 'logout': logout(); break;
    }
  }
});
root.addEventListener('input', e => {
  if (e.target.id === 'fsearch') onSearchInput(e);
  if (e.target.id === 'csearch') { S.csearch = e.target.value; fillChats(); }
});
window.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const lb = $('.lightbox'); if (lb) lb.remove();
  const p = $('#emopop'); if (p) p.hidden = true;
});
window.addEventListener('focus', () => { if (S.me && S.tab === 'chats' && S.active) markRead(S.active); });

// ================= старт =================
loadLocalSettings();
applySettings();
sb.auth.onAuthStateChange((ev, session) => {
  if (session && remember()) upsertAccount({ id: session.user.id, refresh_token: session.refresh_token });
  if (ev === 'SIGNED_OUT') {
    if (S.switching) return;
    stop(); renderAuth();
  } else if (session && !S.me && !S.starting) {
    if (!sessionAllowed()) { setTimeout(() => sb.auth.signOut(), 0); return; } // «Запомнить меня» выключено — после перезапуска входим заново
    S.starting = true;
    setTimeout(async () => { try { await start(session); } finally { S.starting = false; } }, 0);
  }
});
sb.auth.getSession().then(({ data }) => { if (!data.session && !S.me) renderAuth(); });
})();
