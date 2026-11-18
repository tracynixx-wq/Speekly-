(() => {
'use strict';

// ================= переводы / translations =================
const I18N = {
  ru: {
    app_sub: 'Мессенджер для своих', cfg_title: 'Настрой config.js',
    cfg_text: 'Впиши SUPABASE_URL и SUPABASE_ANON_KEY в src/config.js и убедись, что выполнен npm install.',
    tab_login: 'Вход', tab_register: 'Регистрация', lbl_nick: 'Ник',
    lbl_nick_new: 'Придумай ник (a-z, 0-9, _ ; 3–20 символов)', lbl_pass: 'Пароль',
    lbl_pass_new: 'Пароль (минимум 6 символов)', lbl_pass2: 'Повтори пароль',
    remember: 'Запомнить меня на этом компьютере', btn_login: 'Войти', btn_register: 'Создать аккаунт',
    err_fill: 'Введи ник и пароль (от 6 символов)', err_creds: 'Неверный ник или пароль',
    err_nick_fmt: 'Ник: 3–20 символов, только a-z, 0-9 и _', err_pass_match: 'Пароли не совпадают',
    err_taken: 'Этот ник уже занят',
    msg_confirm: 'Регистрация почти завершена: в настройках Supabase ещё включено подтверждение почты. Администратору нужно отключить Confirm email (или применить supabase/migration_7_auto_confirm.sql); ник и пароль — единственные данные пользователя.',
    saved_accounts: 'Сохранённые аккаунты', back: 'Назад',
    err_profile: 'Профиль не найден. Проверь, что выполнен schema.sql',
    chats: 'Чаты', friends: 'Друзья', settings: 'Настройки', profile: 'Профиль',
    no_friends: 'Пока нет чатов.<br>Найди человека по нику в строке поиска.', no_messages: 'Нет сообщений',
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
    n_win: 'Уведомления Windows', n_win_d: 'Показывать всплывающие уведомления о новых сообщениях',
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
    media_hint: 'Подойдёт и анимация: GIF или WebP (до 15 МБ для фото и 25 МБ для обложки)',
    err_img: 'Не удалось прочитать картинку', err_big: 'Файл слишком большой (максимум {0} МБ)',
    err_upload: 'Не удалось загрузить: {0}', switch_fail: 'Не удалось переключить аккаунт, войди заново',
    verified: 'Подтверждённый аккаунт', setting_err: 'Не удалось сохранить настройку: {0}',
    load_err_friends: 'Ошибка загрузки друзей: {0}', load_err_msgs: 'Ошибка загрузки сообщений: {0}',
    help: 'Помощь', st_online: 'В сети', st_invisible: 'Невидимка', search_chats: 'Поиск чатов и людей…',
    attach: 'Прикрепить файл', attach_img: 'Фото или видео', emoji: 'Смайлы', download: 'Скачать',
    uploading: 'Загрузка файла…', pv_photo: '📷 Фото', pv_file: 'Файл', new_chat: 'Новый чат',
    help_title: 'Как пользоваться Speekly',
    help_1_t: 'Как начать переписку', help_1_d: 'Вкладка «Чаты» → строка поиска → введи ник → «Написать». Заявки в друзья не нужны. Заблокировать человека можно в его профиле, список заблокированных — в Настройки → Конфиденциальность.',
    help_2_t: 'Фото и файлы', help_2_d: 'Скрепка отправляет любой файл, кнопка с картинкой — фото и видео (до 25 МБ). Картинку можно вставить из буфера обмена (Ctrl+V).',
    help_3_t: 'Профиль', help_3_d: 'Нажми на свою аватарку слева: обложка и фото (можно GIF), имя, о себе, смена аккаунта. Профиль собеседника открывается по клику на его имя или аватарку.',
    help_4_t: 'Невидимка', help_4_d: 'Нажми на кнопку статуса внизу слева и выбери «Невидимка»: друзья не увидят «в сети» и время захода.',
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
    logout_nobackup: 'У тебя нет резервной копии ключа. После выхода переписки нельзя будет прочитать. Всё равно выйти?',
    st_menu: 'Твой статус', st_online_d: 'Друзья видят, что ты в сети', st_invisible_d: 'Статус и время захода скрыты',
    person_block: 'Заблокировать', person_unblock: 'Разблокировать', person_block_confirm: 'Заблокировать этого пользователя? Вы не сможете переписываться друг с другом.', msg_blocked: 'Сообщение не отправлено: один из вас заблокировал другого', st_blocked: 'Заблокирован', blocked_title: 'Заблокированные', view_profile: 'Профиль', close: 'Закрыть', edit_title: 'Редактирование профиля', switching: 'Переключаем аккаунт…',
    slow_text: 'Долго подключаемся. Возможно, медленный интернет или сервер не отвечает.', retry: 'Повторить', relogin: 'Войти заново',
    more_msgs: 'Показать более ранние', people: 'Люди', s_about: 'О программе',
    wall: 'Фон чата', wall_d: 'Рисунок за сообщениями', wall_none: 'Нет', wall_dots: 'Точки', wall_aurora: 'Сияние',
    skin: 'Стиль оформления', skin_d: 'Стекло — новый дизайн с обоями, Классика — прежний вид', skin_glass: 'Стекло', skin_classic: 'Классика',
    gwall: 'Обои', gwall_d: 'Фон за стеклянными панелями', gw_ocean: 'Океан', gw_dusk: 'Закат', gw_mint: 'Мята', gw_gamer: 'Гейминг',
    st_dnd: 'Не беспокоить', st_dnd_d: 'Без звуков, плашек и звонков. Друзья видят, что вы в сети',
    side_min: 'Свёрнутая боковая панель', side_min_d: 'В списке чатов остаются только аватарки',
    search_short: 'Поиск', saved: 'Избранное', saved_d: 'Важные сообщения', system: 'Система', sys_d: 'Служебные уведомления',
    sys_update: 'Обновление системы', sys_ro: 'Это служебный чат, отвечать в нём нельзя',
    sys_body: 'Speekly 1.3.1: стеклянный дизайн, звонки (голос, видео, показ экрана), «Избранное», личные сообщения без заявок, поиск по нику, блокировка пользователей и обновления приложения.',
    side_collapse: 'Свернуть панель', side_expand: 'Развернуть панель', you_label: 'Вы',
    call_voice: 'Голосовой звонок', call_video: 'Видеозвонок', more: 'Ещё', open_profile: 'Открыть профиль',
    mic: 'Микрофон', cam: 'Камера', screen: 'Показать экран', hangup: 'Завершить', accept_call: 'Принять', decline_call: 'Отклонить',
    call_ringing: 'Вызываем…', call_connecting: 'Соединяем…', call_in: 'Входящий звонок', call_in_v: 'Входящий видеозвонок',
    call_declined: 'Звонок отклонён', call_busy: 'Собеседник уже в другом звонке', call_ended: 'Звонок завершён',
    call_failed: 'Не удалось соединиться', call_noanswer: 'Нет ответа', call_pick: 'Открой чат, чтобы позвонить',
    call_need_call: 'Сначала начни звонок', call_nomedia: 'Нет доступа к микрофону или камере', call_screen_err: 'Не удалось показать экран',
    call_already: 'Ты уже в звонке', call_you_cam: 'Ты', call_sharing: 'Вы показываете экран',
    lite: 'Лёгкий режим', lite_d: 'Отключает анимации и размытие — для слабых компьютеров',
    anim_av: 'Анимированные аватарки', anim_av_d: 'В списках показывается статичное превью, анимация — только в профиле',
    msg_av: 'Аватарки в сообщениях', msg_av_d: 'Показывать фото собеседника рядом с сообщениями',
    accent_c: 'Свой цвет', clear_cache: 'Очистить кэш', clear_cache_d: 'Удаляет временные файлы из памяти приложения', cache_cleared: 'Кэш очищен',
    about_d: 'Десктопный мессенджер со сквозным шифрованием.', version: 'Версия', saving: 'Сохраняем…', not_found: 'Профиль не найден'
  },
  en: {
    app_sub: 'A messenger for friends', cfg_title: 'Set up config.js',
    cfg_text: 'Put SUPABASE_URL and SUPABASE_ANON_KEY into src/config.js and make sure npm install has been run.',
    tab_login: 'Sign in', tab_register: 'Sign up', lbl_nick: 'Username',
    lbl_nick_new: 'Choose a username (a-z, 0-9, _ ; 3–20 characters)', lbl_pass: 'Password',
    lbl_pass_new: 'Password (at least 6 characters)', lbl_pass2: 'Repeat password',
    remember: 'Remember me on this computer', btn_login: 'Sign in', btn_register: 'Create account',
    err_fill: 'Enter a username and a password (6+ characters)', err_creds: 'Wrong username or password',
    err_nick_fmt: 'Username: 3–20 characters, only a-z, 0-9 and _', err_pass_match: "Passwords don't match",
    err_taken: 'This username is already taken',
    msg_confirm: 'Registration is waiting for the Supabase email confirmation setting. The administrator must turn off Confirm email (or apply supabase/migration_7_auto_confirm.sql); users only provide a username and password.',
    saved_accounts: 'Saved accounts', back: 'Back',
    err_profile: 'Profile not found. Make sure schema.sql has been run',
    chats: 'Chats', friends: 'Friends', settings: 'Settings', profile: 'Profile',
    no_friends: 'No chats yet.<br>Find a person by username in the search box.', no_messages: 'No messages',
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
    n_win: 'Windows notifications', n_win_d: 'Show pop-up notifications about new messages',
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
    media_hint: 'Animated GIF or WebP works too (up to 15 MB for the photo, 25 MB for the cover)',
    err_img: 'Could not read the image', err_big: 'File is too large (max {0} MB)',
    err_upload: 'Upload failed: {0}', switch_fail: 'Could not switch account, please sign in again',
    verified: 'Verified account', setting_err: 'Could not save the setting: {0}',
    load_err_friends: 'Failed to load friends: {0}', load_err_msgs: 'Failed to load messages: {0}',
    help: 'Help', st_online: 'Online', st_invisible: 'Invisible', search_chats: 'Search chats and people…',
    attach: 'Attach a file', attach_img: 'Photo or video', emoji: 'Emoji', download: 'Download',
    uploading: 'Uploading file…', pv_photo: '📷 Photo', pv_file: 'File', new_chat: 'New chat',
    help_title: 'How to use Speekly',
    help_1_t: 'Starting a chat', help_1_d: 'Chats tab → search box → type a username → Message. No friend requests needed. You can block a person from their profile; the blocked list is in Settings → Privacy.',
    help_2_t: 'Photos and files', help_2_d: 'The paperclip sends any file, the picture button sends photos and videos (up to 25 MB). You can paste an image from the clipboard (Ctrl+V).',
    help_3_t: 'Profile', help_3_d: 'Click your avatar on the left: cover and photo (GIFs work), name, about, account switching. A friend’s profile opens when you click their name or avatar.',
    help_4_t: 'Invisible mode', help_4_d: 'Click the status button at the bottom left and pick Invisible: friends will not see your online status or last seen.',
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
    logout_nobackup: 'You have no key backup. After signing out your chats can no longer be read. Sign out anyway?',
    st_menu: 'Your status', st_online_d: 'Friends see that you are online', st_invisible_d: 'Online status and last seen are hidden',
    person_block: 'Block', person_unblock: 'Unblock', person_block_confirm: 'Block this user? You will not be able to message each other.', msg_blocked: 'Message not sent: one of you has blocked the other', st_blocked: 'Blocked', blocked_title: 'Blocked users', view_profile: 'Profile', close: 'Close', edit_title: 'Edit profile', switching: 'Switching account…',
    slow_text: 'Connecting is taking long. The network may be slow or the server is not responding.', retry: 'Retry', relogin: 'Sign in again',
    more_msgs: 'Show earlier messages', people: 'People', s_about: 'About',
    wall: 'Chat background', wall_d: 'Pattern behind messages', wall_none: 'None', wall_dots: 'Dots', wall_aurora: 'Aurora',
    skin: 'Style', skin_d: 'Glass is the new look with wallpapers, Classic is the previous one', skin_glass: 'Glass', skin_classic: 'Classic',
    gwall: 'Wallpaper', gwall_d: 'Background behind the glass panels', gw_ocean: 'Ocean', gw_dusk: 'Dusk', gw_mint: 'Mint', gw_gamer: 'Gaming',
    st_dnd: 'Do not disturb', st_dnd_d: 'No sounds, pop-ups or calls. Friends still see you online',
    side_min: 'Collapsed side panel', side_min_d: 'The chat list shows only avatars',
    search_short: 'Search', saved: 'Saved messages', saved_d: 'Important messages', system: 'System', sys_d: 'Service notifications',
    sys_update: 'System update', sys_ro: 'This is a service chat, you cannot reply here',
    sys_body: 'Speekly 1.3.1: glass design, calls (voice, video, screen sharing), Saved messages, direct messages without requests, search by username, user blocking and app updates.',
    side_collapse: 'Collapse panel', side_expand: 'Expand panel', you_label: 'You',
    call_voice: 'Voice call', call_video: 'Video call', more: 'More', open_profile: 'Open profile',
    mic: 'Microphone', cam: 'Camera', screen: 'Share screen', hangup: 'End call', accept_call: 'Accept', decline_call: 'Decline',
    call_ringing: 'Calling…', call_connecting: 'Connecting…', call_in: 'Incoming call', call_in_v: 'Incoming video call',
    call_declined: 'Call declined', call_busy: 'The other person is in another call', call_ended: 'Call ended',
    call_failed: 'Could not connect', call_noanswer: 'No answer', call_pick: 'Open a chat to call',
    call_need_call: 'Start a call first', call_nomedia: 'No access to microphone or camera', call_screen_err: 'Could not share the screen',
    call_already: 'You are already in a call', call_you_cam: 'You', call_sharing: 'You are sharing your screen',
    lite: 'Lite mode', lite_d: 'Turns off animations and blur, for slower computers',
    anim_av: 'Animated avatars', anim_av_d: 'Lists show a still preview, animation plays only in profiles',
    msg_av: 'Avatars in messages', msg_av_d: 'Show your friend’s photo next to messages',
    accent_c: 'Custom color', clear_cache: 'Clear cache', clear_cache_d: 'Removes temporary files from app memory', cache_cleared: 'Cache cleared',
    about_d: 'A desktop messenger with end-to-end encryption.', version: 'Version', saving: 'Saving…', not_found: 'Profile not found'
  }
};

// ================= утилиты и состояние =================
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const name = p => (p && (p.display_name || p.username)) || '?';
// служебные чаты: «Избранное» (заметки себе, хранятся только на этом компьютере) и «Система» (уведомления приложения)
const SAVED = '__saved', SYSID = '__system';
const isPseudo = id => id === SAVED || id === SYSID;
const lsGet = k => { try { return localStorage.getItem(k); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } };
const remember = () => lsGet('msg_remember') !== 'false';
const sessionAllowed = () => { try { return remember() || sessionStorage.getItem('msg_alive') === '1'; } catch { return true; } };
const markAlive = () => { try { sessionStorage.setItem('msg_alive', '1'); } catch { /* ignore */ } };
const LOGIN_DOMAIN = '@speekly.app'; // вход по нику: ник превращается во внутренний логин
const ACCENTS = ['#4f8cff', '#8e5be8', '#e5484d', '#f76b15', '#30a46c', '#12a594', '#35d658'];
const PCOLS = 'id,username,display_name,bio,avatar_url,banner_url,last_seen,verified,public_key';
const detectLang = () => ((navigator.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en');
const DEFAULTS = {
  lang: detectLang(), theme: 'dark', accent: ACCENTS[0], font: 'normal', compact: false,
  notifications: true, sound: true, preview: true,
  allow_requests: true, show_online: true, read_receipts: true,
  enter_send: true, time24: true,
  wallpaper: 'none', lite: false, anim_avatars: true, show_msg_avatars: true,
  skin: 'glass', gwall: 'ocean', side_collapsed: false, dnd: false
};
const S = {
  me: null, settings: { ...DEFAULTS }, profs: {},
  friends: [], incoming: [], outgoing: [], blocked: [],
  msgs: {}, active: null, view: null,
  tab: 'chats', stab: 'appearance', editing: false, draft: null,
  online: new Set(), dbChannel: null, presence: null, timer: null,
  starting: false, switching: false, addingAccount: false, prevId: null, sideTab: null,
  drafts: {}, limit: {}
};
const t = (k, ...a) => {
  let s = (I18N[S.settings.lang] || I18N.ru)[k] ?? I18N.en[k] ?? k;
  a.forEach((v, i) => { s = s.replace('{' + i + '}', v); });
  return s;
};
const statusLabel = () => (!S.settings.show_online ? t('st_invisible') : S.settings.dnd ? t('st_dnd') : t('st_online'));
const loc = () => (S.settings.lang === 'ru' ? 'ru-RU' : 'en-US');
const VERIFIED = () => `<svg class="verified" viewBox="0 0 24 24" role="img" aria-label="${esc(t('verified'))}"><title>${esc(t('verified'))}</title><path fill="#3b82f6" d="M12 1l2.6 2 3.2-.3 1.1 3 2.8 1.6-.8 3.1 1.6 2.8-2.2 2.3-.2 3.2-3.1.9L12 23l-2.8-2.4-3.1-.9-.2-3.2L3.7 14.2l1.6-2.8-.8-3.1 2.8-1.6 1.1-3 3.2.3z"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M8 12.5l2.7 2.7L16 9.5"/></svg>`;

const LOGO = '<span class="logo">speekly<i></i></span>';
function ensurePseudo() {
  S.profs[SAVED] = { id: SAVED, pseudo: true, username: 'saved', display_name: t('saved'), bio: t('saved_d') };
  S.profs[SYSID] = { id: SYSID, pseudo: true, username: 'speekly', display_name: t('system'), bio: t('sys_d') };
}
const savedKey = () => 'saved_' + S.me.id;
function loadPseudoMsgs() {
  if (!S.me) return;
  ensurePseudo();
  let arr = [];
  try { arr = JSON.parse(lsGet(savedKey()) || '[]'); } catch { arr = []; }
  S.msgs[SAVED] = arr.map(m => ({ ...m, dec: { body: m.body, file: null, enc: false } }));
  S.msgs[SYSID] = [{ id: 'sys-1.2', sender: SYSID, recipient: S.me.id, body: t('sys_body'), created_at: '2026-11-17T12:00:00.000Z', read_at: null, dec: { body: t('sys_body'), file: null, enc: false } }];
}
function saveSavedMsgs() {
  lsSet(savedKey(), JSON.stringify((S.msgs[SAVED] || []).slice(-500).map(({ id, sender, recipient, body, created_at, read_at }) => ({ id, sender, recipient, body, created_at, read_at }))));
}
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
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 1.5-2.2-.5-1.2.2-2.3 1.5-2.3H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5z"/><circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10" cy="7" r="1" fill="currentColor"/><circle cx="15" cy="7" r="1" fill="currentColor"/>',
  bell: '<path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16z"/><path d="M10 21h4"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r=".7" fill="currentColor"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff: '<path d="M3 3l18 18"/><path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3.2 3.9M6.3 7.6A16.6 16.6 0 0 0 2 12s4 7 10 7c1.6 0 3-.4 4.2-1"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  hangup: '<path d="M3 15c5-4.5 13-4.5 18 0l-1.4 3-3.6-1.4v-2.6a9 9 0 0 0-8 0v2.6L4.4 18z"/>',
  video: '<rect x="3" y="6" width="12" height="12" rx="3"/><path d="M15 10.5l6-3.5v10l-6-3.5"/>',
  videooff: '<rect x="3" y="6" width="12" height="12" rx="3"/><path d="M15 10.5l6-3.5v10l-6-3.5"/><path d="M3 3l18 18"/>',
  more: '<circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  micoff: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/><path d="M3 3l18 18"/>',
  screen: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  bookmark: '<path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  sidebar: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>'
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
// без таймаута запрос на медленной сети висит вечно и приложение «зависает»
function timeoutFetch(url, opts = {}) {
  const ms = /\/storage\/v1\/object/.test(String(url)) ? 180000 : 20000;
  const ctl = new AbortController();
  const tm = setTimeout(() => ctl.abort(), ms);
  if (opts.signal) opts.signal.addEventListener('abort', () => ctl.abort());
  return fetch(url, { ...opts, signal: ctl.signal }).finally(() => clearTimeout(tm));
}
const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_PUBLISHABLE_KEY || cfg.SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
  global: { fetch: timeoutFetch }
});

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

function modal(html, closable = false, cls = '') {
  const o = document.createElement('div');
  o.className = 'modal' + (closable ? ' closable' : '');
  o.innerHTML = `<div class="mcard ${cls}">${html}</div>`;
  if (closable) o.addEventListener('mousedown', e => { if (e.target === o) o.remove(); });
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
  if (local && (!me.public_key || local.pub === me.public_key)) { // обычный случай: ключ уже на этом компьютере, ждать сеть не нужно
    await useKeys(local.priv, local.pub);
    if (!me.public_key) await publishKey(S.pw);
    sb.from('key_backups').select('user_id').eq('user_id', me.id).maybeSingle().then(({ data }) => {
      S.hasBackup = !!data;
      if (S.me && S.tab === 'settings') renderSettingsPage();
    }, () => {});
    return;
  }
  const { data: bk } = await sb.from('key_backups').select('data').eq('user_id', me.id).maybeSingle();
  S.hasBackup = !!bk;
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
  // сообщение сразу появляется в чате (с часиками), а не после ответа сервера
  const tmp = { id: 'tmp' + Date.now() + Math.random().toString(36).slice(2, 6), sender: S.me.id, recipient: to, body, created_at: new Date().toISOString(), read_at: null, pending: true, dec: { body: text, file: file || null, enc: true } };
  (S.msgs[to] = S.msgs[to] || []).push(tmp);
  const redraw = () => { if (S.tab === 'chats' && S.active === to) renderMessages(); renderSide(); };
  redraw();
  const { data, error } = await sb.from('messages').insert({ sender: S.me.id, recipient: to, body }).select().single();
  const list = (S.msgs[to] = S.msgs[to] || []), i = list.indexOf(tmp);
  if (error) { if (i >= 0) list.splice(i, 1); redraw(); toast(error.code === '42501' ? t('msg_blocked') : t('not_sent', error.message)); return false; }
  data.dec = tmp.dec;
  if (list.some(x => x.id === data.id)) { if (i >= 0) list.splice(i, 1); } // realtime успел раньше ответа
  else if (i >= 0) list[i] = data; else list.push(data);
  seenMsg.add(data.id);
  redraw();
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
  r.dataset.theme = dark || (s.skin !== 'classic' && s.gwall === 'gamer') ? 'dark' : 'light'; // «Гейминг» всегда тёмный
  r.style.setProperty('--accent', s.accent);
  r.dataset.font = s.font;
  r.dataset.compact = s.compact ? '1' : '0';
  r.dataset.wall = s.wallpaper || 'none';
  r.dataset.lite = s.lite ? '1' : '0';
  r.dataset.skin = s.skin === 'classic' ? 'classic' : 'glass';
  r.dataset.gwall = s.gwall || 'ocean';
  r.lang = s.lang;
}
// статус «в сети» применяется отдельно и с защитой от ошибок сети
async function applyPresence() {
  if (!S.presence || !S.me) return;
  try {
    if (S.settings.show_online) await S.presence.track({ at: Date.now() });
    else await S.presence.untrack();
  } catch { /* повторится при следующем подключении */ }
  touchSeen();
}
let settingsTimer;
function scheduleSettingsSave() {
  clearTimeout(settingsTimer);
  settingsTimer = setTimeout(async () => {
    if (!S.me) return;
    const { error } = await sb.from('profiles').update({ settings: S.settings }).eq('id', S.me.id);
    if (error) toast(t('setting_err', error.message));
  }, 600);
}
// меняет настройку мгновенно, ничего не ждёт по сети и не пересобирает лишнего
function setSetting(key, val) {
  S.settings[key] = val;
  if (key === 'gwall' && val === 'gamer' && S.settings.accent === ACCENTS[0]) S.settings.accent = '#35d658';
  applySettings();
  saveLocalSettings();
  if (key === 'show_online') applyPresence();
  if (key === 'notifications' && val) ensureNotifPermission(true);
  if (!S.me) { if (key === 'lang') renderAuth(); return; }
  scheduleSettingsSave();
  if (key === 'lang') { loadPseudoMsgs(); renderApp(); return; }
  if (key === 'skin' || key === 'side_collapsed') S.sideTab = null;
  if ((key === 'skin' || key === 'gwall') && S.tab === 'settings') renderSettingsPage();
  renderRail();
  if (S.tab === 'chats') { renderSide(); if (S.active) { renderChatHeader(); renderMessages(false); } }
}
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (S.settings.theme === 'system') applySettings(); });

// ================= UI-хелперы =================
// в списках вместо тяжёлого GIF показываем маленькую статичную копию (avatar_s.jpg)
const thumbOf = url => String(url).replace(/\/avatar\.(gif|webp)(\?|$)/, '/avatar_s.jpg$2');
function avatar(p, size = 40, online = false, ring = false) {
  const dot = online ? '<i class="dot"></i>' : '';
  const st = `width:${size}px;height:${size}px;font-size:${Math.round(size * 0.42)}px`;
  if (p.pseudo) return `<span class="av pseudo ${p.id === SAVED ? 'saved' : 'sys'}" style="${st}">${p.id === SAVED ? ic('bookmark', Math.round(size * 0.5)) : 'S'}</span>`;
  const cls = 'av' + (ring ? ' ring' : '');
  if (p.avatar_url) {
    const full = p.avatar_url, small = (size <= 64 && !ring) || S.settings.anim_avatars === false ? thumbOf(full) : full;
    return `<span class="${cls}" style="${st}"><img src="${esc(small)}" ${small !== full ? `data-full="${esc(full)}"` : ''} alt="" decoding="async" draggable="false">${dot}</span>`;
  }
  const h = [...String(p.id)].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return `<span class="${cls}" style="${st};background:hsl(${h} 55% 45%)">${esc((name(p)[0] || '?').toUpperCase())}${dot}</span>`;
}
// если превью нет (старые аватарки), подставляем оригинал; inline onerror запрещён CSP, поэтому слушаем в capture-фазе
window.addEventListener('error', e => {
  const i = e.target;
  if (i && i.tagName === 'IMG' && i.dataset && i.dataset.full && i.src !== i.dataset.full) i.src = i.dataset.full;
}, true);
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
  if (S.settings.dnd) return;
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
function busy(text) {
  root.insertAdjacentHTML('beforeend', `<div class="busy"><div class="spin"></div><div>${esc(text)}</div></div>`);
}
const unbusy = () => document.querySelectorAll('.busy').forEach(x => x.remove());
// Переключение НЕ делает signOut: он убивает сохранённые сессии на сервере, из-за чего интерфейс «отключался»
async function switchAccount(id) {
  if (S.me && S.me.id === id) return;
  const acc = getAccounts().find(a => a.id === id);
  if (!acc || S.starting) return;
  S.starting = true;
  busy(t('switching'));
  try {
    // сначала обновляем сессию нужного аккаунта: если не вышло, текущий аккаунт остаётся открытым
    const { data, error } = await sb.auth.refreshSession({ refresh_token: acc.refresh_token });
    if (error || !data || !data.session) throw error || new Error('no session');
    stop();
    S.addingAccount = false;
    await start(data.session);
  } catch {
    unbusy();
    removeAccount(id);
    toast(t('switch_fail'));
    if (S.me) { if (S.tab === 'profile') renderProfilePage(); }
    else { if (acc.username) lsSet('msg_last_login', acc.username); S.addingAccount = false; renderAuth(); }
  } finally { S.starting = false; unbusy(); }
}
function addProfile() {
  S.prevId = S.me ? S.me.id : null;
  stop();
  S.addingAccount = true; authMode = 'login';
  renderAuth();
}
async function logout() {
  if (S.privJwk && !S.hasBackup && !confirm(t('logout_nobackup'))) return; // без резерва выход = потеря ключа
  const id = S.me && S.me.id;
  if (id) { removeAccount(id); removeLocalKeys(id); }
  S.switching = true;
  try { await sb.auth.signOut({ scope: 'local' }); } catch { /* ignore */ }
  S.switching = false;
  stop(); authMode = 'login'; renderAuth();
}

// ================= прочитанное =================
const lrKey = () => 'lr_' + S.me.id;
function getLR() { try { return JSON.parse(lsGet(lrKey()) || '{}'); } catch { return {}; } }
function setLR(fid, iso) { const m = getLR(); m[fid] = iso; lsSet(lrKey(), JSON.stringify(m)); }
function unread(fid) {
  const lr = getLR()[fid];
  return (S.msgs[fid] || []).filter(m => m.sender === fid && (lr ? m.created_at > lr : !m.read_at)).length;
}
const totalUnread = () => S.friends.reduce((a, f) => a + unread(f.id), 0) + unread(SYSID);
function updateTitle() {
  if (!S.me) { document.title = 'Speekly'; return; }
  const n = totalUnread();
  document.title = n ? `(${n}) Speekly` : 'Speekly';
}
async function markRead(fid) {
  const ms = S.msgs[fid] || [];
  setLR(fid, new Date().toISOString());
  if (isPseudo(fid)) { updateTitle(); renderRail(); renderSide(); return; }
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
  if (login.includes('@')) { err.textContent = t('err_nick_fmt'); return; } // вход только по нику и паролю
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
      if (error) {
        S.pw = null;
        if (error.code === '23505' || /already registered|user already exists/i.test(error.message)) err.textContent = t('err_taken');
        else if (/database error saving new user/i.test(error.message)) err.textContent = S.settings.lang === 'ru'
          ? 'Supabase не смог создать профиль. Проверь SQL-функцию handle_new_user и триггер on_auth_user_created в базе.'
          : 'Supabase could not create the profile. Check the handle_new_user SQL function and on_auth_user_created trigger.';
        else err.textContent = error.message;
      }
      else if (!data.session) { S.pw = null; err.className = 'err ok'; err.textContent = t('msg_confirm'); }
    }
  } finally { btn.disabled = false; }
}

// ================= загрузка данных =================
async function start(session) {
  if (S.me) return;
  try {
    const { data: p, error } = await sb.from('profiles').select('*').eq('id', session.user.id).single();
    if (error && error.code !== 'PGRST116') throw error; // сетевая ошибка: не разлогиниваем, а предлагаем повторить
    if (!p) { renderAuth(); toast(t('err_profile')); try { await sb.auth.signOut({ scope: 'local' }); } catch { /* ignore */ } return; }
    S.me = p;
    S.settings = { ...DEFAULTS, ...(p.settings || {}) };
    S.addingAccount = false;
    saveLocalSettings(); applySettings(); syncAccountMeta();
    S.authEmail = session.user.email;
    // всё, что не зависит друг от друга, грузим параллельно
    const rawP = fetchMessages();
    await Promise.all([initKeys().catch(e => toast(t('error', e.message))), loadBlocked().then(loadFriends)]);
    S.pw = null;
    await ingestMessages(await rawP); // расшифровке нужны ключи и профили друзей, поэтому после них
    renderApp();
    subscribe();
    touchSeen();
    S.timer = setInterval(() => { touchSeen(); refreshProfiles(); }, 60000);
    updateTitle();
    if (S.settings.notifications) ensureNotifPermission(false);
  } catch (e) {
    stop();
    showSlow(t('error', (e && e.message) || e));
  }
}
function stop() {
  if (S.dbChannel) sb.removeChannel(S.dbChannel);
  if (S.presence) sb.removeChannel(S.presence);
  if (S.inbox) sb.removeChannel(S.inbox);
  S.inbox = null;
  try { cleanupCall(); } catch { /* ignore */ }
  outCh.forEach(o => { try { sb.removeChannel(o.ch); } catch { /* ignore */ } });
  outCh.clear();
  if (S.timer) clearInterval(S.timer);
  keyCache.clear();
  blobCache.forEach(p => p.then(u => URL.revokeObjectURL(u)).catch(() => {}));
  blobCache.clear();
  document.querySelectorAll('.modal,#stmenu').forEach(x => x.remove());
  Object.assign(S, { priv: null, privJwk: null, pubStr: null, hasBackup: false, pw: null, authEmail: null, me: null, profs: {}, friends: [], incoming: [], outgoing: [], blocked: [], msgs: {}, active: null, view: null, tab: 'chats', stab: 'appearance', online: new Set(), dbChannel: null, presence: null, timer: null, sideTab: null, drafts: {}, limit: {} });
  updateTitle();
}
async function loadFriends() {
  const { data: fr, error } = await sb.from('friendships').select('*');
  if (error) { toast(t('load_err_friends', error.message)); return; }
  const directPeers = S.friends.filter(p => p.direct && !isBlocked(p.id));
  const other = f => (f.requester === S.me.id ? f.addressee : f.requester);
  const ids = [...new Set(fr.map(other))];
  if (ids.length) {
    const { data } = await sb.from('profiles').select(PCOLS).in('id', ids);
    (data || []).forEach(p => { S.profs[p.id] = p; });
  }
  // старые принятые дружбы остаются чатами; новые переписки не требуют заявок
  S.friends = fr.filter(f => f.status === 'accepted' && S.profs[other(f)] && !isBlocked(other(f))).map(f => ({ ...S.profs[other(f)], fid: f.id }));
  directPeers.forEach(p => { if (!S.friends.some(x => x.id === p.id)) S.friends.push(p); });
  if (S.active && !isPseudo(S.active) && !S.friends.some(f => f.id === S.active)) S.active = null;
}
async function fetchMessages() {
  const { data, error } = await sb.from('messages').select('*').order('created_at', { ascending: false }).limit(500);
  if (error) { toast(t('load_err_msgs', error.message)); return []; }
  return data || [];
}
// расшифровываем пачками, отдавая управление интерфейсу, чтобы окно не замирало
async function ingestMessages(data) {
  for (let i = 0; i < data.length; i += 40) {
    await Promise.all(data.slice(i, i + 40).map(decryptMsg));
    await new Promise(r => setTimeout(r, 0));
  }
  S.msgs = {};
  [...data].reverse().forEach(m => {
    const o = m.sender === S.me.id ? m.recipient : m.sender;
    (S.msgs[o] = S.msgs[o] || []).push(m);
  });
  await addDirectPeers();
  loadPseudoMsgs();
}
async function loadMessages() { await ingestMessages(await fetchMessages()); }
function patchProfile(id, patch) {
  if (S.profs[id]) Object.assign(S.profs[id], patch);
  [S.friends, S.incoming, S.outgoing].forEach(list => list.forEach(p => { if (p.id === id) Object.assign(p, patch); }));
}
async function refreshProfiles() {
  if (!S.me) return;
  const ids = Object.keys(S.profs).filter(i => i !== S.me.id && !isPseudo(i));
  if (!ids.length) return;
  const { data } = await sb.from('profiles').select(PCOLS).in('id', ids);
  (data || []).forEach(p => patchProfile(p.id, p));
  renderSide(); renderChatHeader();
}
async function touchSeen() {
  if (!S.me) return;
  const v = S.settings.show_online ? new Date().toISOString() : null;
  S.me.last_seen = v;
  try { await sb.from('profiles').update({ last_seen: v }).eq('id', S.me.id); } catch { /* сеть недоступна: не страшно */ }
}

// ================= realtime =================
function subscribe() {
  S.dbChannel = sb.channel('db-changes')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, p => onMsgInsert(p.new))
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages' }, p => onMsgUpdate(p.new))
    .subscribe();

  S.presence = sb.channel('online', { config: { presence: { key: S.me.id } } });
  S.presence
    .on('presence', { event: 'leave' }, ({ key }) => patchProfile(key, { last_seen: new Date().toISOString() }))
    .on('presence', { event: 'sync' }, () => {
      S.online = new Set(Object.keys(S.presence.presenceState()));
      renderSide(); renderChatHeader();
    })
    .subscribe(status => { if (status === 'SUBSCRIBED') applyPresence(); });

  S.inbox = sb.channel('inbox:' + S.me.id, { config: { broadcast: { self: false } } })
    .on('broadcast', { event: 'sig' }, ({ payload }) => { onSig(payload).catch(() => {}); })
    .subscribe();
}
async function onMsgInsert(m) {
  if (!S.me || (m.sender !== S.me.id && m.recipient !== S.me.id)) return;
  const o = m.sender === S.me.id ? m.recipient : m.sender;
  if ((S.msgs[o] || []).some(x => x.id === m.id) || isBlocked(o)) return;
  await decryptMsg(m);
  if (!S.me) return;
  const list = (S.msgs[o] = S.msgs[o] || []);
  if (list.some(x => x.id === m.id)) return;
  list.push(m);
  await ensureDirect(o);
  if (!S.me) return;
  if (m.recipient === S.me.id) {
    const looking = S.tab === 'chats' && S.active === o && document.hasFocus();
    if (looking) { await markRead(o); }
    else {
      const goChat = () => { S.tab = 'chats'; openChat(o); };
      showNotif(name(S.profs[o]), S.settings.preview ? prevText(m).slice(0, 120) : t('new_message'), goChat);
      if (document.hasFocus() && !S.settings.dnd) showBanner(S.profs[o], S.settings.preview ? prevText(m).slice(0, 80) : t('new_message'), goChat);
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
// ================= всплывающее уведомление о сообщении =================
function showBanner(p, text, onclick) {
  if (!p) return;
  let box = $('#banners');
  if (!box) { box = document.createElement('div'); box.id = 'banners'; document.body.appendChild(box); }
  const el = document.createElement('div');
  el.className = 'banner';
  el.innerHTML = `${avatar(p, 38)}<div class="bt"><b>${esc(name(p))}</b><span>${esc(text)}</span></div>`;
  el.addEventListener('click', () => { el.remove(); if (onclick) onclick(); });
  box.appendChild(el);
  while (box.children.length > 3) box.firstChild.remove();
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 350); }, 4500);
}

// меню «Ещё» в шапке чата
function chatMore(btn) {
  const id = btn.dataset.id, ex = $('#stmenu');
  if (ex) ex.remove();
  const r = btn.getBoundingClientRect();
  const m = document.createElement('div');
  m.id = 'stmenu'; m.className = 'stmenu';
  Object.assign(m.style, { left: 'auto', bottom: 'auto', width: '240px', top: (r.bottom + 8) + 'px', right: Math.max(10, innerWidth - r.right) + 'px', transformOrigin: '100% 0' });
  const opt = (v, icon, tt) => `<button class="stopt" data-v="${v}"><span class="sico off">${ic(icon, 18)}</span><span><b>${esc(tt)}</b></span></button>`;
  m.innerHTML = opt('profile', 'user', t('open_profile')) + opt('code', 'lock', t('sec_title')) + opt('block', 'x', t('person_block'));
  m.addEventListener('click', e => {
    const b = e.target.closest('[data-v]'); if (!b) return;
    m.remove();
    if (b.dataset.v === 'profile') openProfile(id); else if (b.dataset.v === 'block') blockPerson(id); else showSecCode(id);
  });
  document.body.appendChild(m);
}

// ================= звонки (WebRTC) =================
// Звук и видео идут напрямую между вами (шифруется самим WebRTC). Служебные сигналы (кто звонит, параметры
// соединения) идут через Supabase Realtime и шифруются ключом вашей переписки, так что подделать их нельзя.
// Без собственного TURN-сервера звонок может не соединиться, если у обоих «строгий» NAT (редко).
const RTC_CFG = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }] };
const outCh = new Map();   // id собеседника -> { ch, ready }
const sigQ = new Map();    // id собеседника -> очередь отправки (сигналы уходят строго по порядку)
let CALL = null;           // текущий звонок
let startingCall = false;  // защита от двойного нажатия на «позвонить»
let ringTimer = null;

async function sigSendNow(to, obj) {
  const key = await sharedKeyFor(to);
  if (!key || !S.me) return false;
  const payload = { from: S.me.id, d: await E2E.encStr(key, JSON.stringify(obj)) };
  let o = outCh.get(to);
  if (!o) {
    const ch = sb.channel('inbox:' + to, { config: { broadcast: { self: false } } });
    const ready = new Promise(res => {
      const tm = setTimeout(res, 5000);
      ch.subscribe(st => { if (st === 'SUBSCRIBED' || st === 'CHANNEL_ERROR' || st === 'TIMED_OUT' || st === 'CLOSED') { clearTimeout(tm); res(); } });
    });
    o = { ch, ready }; outCh.set(to, o);
  }
  await o.ready;
  try { await o.ch.send({ type: 'broadcast', event: 'sig', payload }); return true; } catch { return false; }
}
function sigSend(to, obj) {
  const next = (sigQ.get(to) || Promise.resolve()).then(() => sigSendNow(to, obj)).catch(() => false);
  sigQ.set(to, next);
  return next;
}

function newCall(peer, mode, role) {
  return { peer, mode, role, state: 'connecting', pc: null, local: null, remote: new MediaStream(), muted: false, vsrc: null, vtrack: null,
    remoteVid: false, ice: [], outIce: [], holdIce: true, offer: null, t0: 0, tick: null, ringTO: null, aTr: null, vTr: null };
}
function callStatusText() {
  const c = CALL; if (!c) return '';
  if (c.state === 'ringing-out') return t('call_ringing');
  if (c.state === 'ringing-in') return t(c.mode === 'video' ? 'call_in_v' : 'call_in');
  if (c.state === 'live') { const sec = Math.floor((Date.now() - c.t0) / 1000); return String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0'); }
  return t('call_connecting');
}
function startRing(skipFirst) {
  stopRing();
  const tick = () => { if (S.settings.sound) beep(); };
  if (!skipFirst) tick();
  ringTimer = setInterval(tick, 2200);
}
function stopRing() { if (ringTimer) clearInterval(ringTimer); ringTimer = null; }

function makePc(c) {
  const pc = c.pc = new RTCPeerConnection(RTC_CFG);
  pc.onicecandidate = e => {
    if (!e.candidate) return;
    const o = { t: 'ice', c: e.candidate.toJSON() };
    if (c.holdIce) c.outIce.push(o); else sigSend(c.peer, o);
  };
  pc.ontrack = e => { c.remote.addTrack(e.track); const v = $('#rvid'); if (v && v.srcObject !== c.remote) v.srcObject = c.remote; };
  pc.onconnectionstatechange = () => {
    if (CALL !== c) return;
    if (pc.connectionState === 'connected' && c.state !== 'live') {
      c.state = 'live'; c.t0 = Date.now(); stopRing(); clearTimeout(c.ringTO);
      c.tick = setInterval(tickCall, 1000);
      updateCallUI(); renderUserBar();
    } else if (pc.connectionState === 'failed') {
      sigSend(c.peer, { t: 'end' }); endCall(t('call_failed'));
    }
  };
}
async function getMedia(c, wantVideo) {
  let stream = null;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: !!wantVideo }); }
  catch { if (wantVideo) { try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { /* нет доступа */ } } }
  if (!stream) throw Object.assign(new Error('media'), { name: 'NotAllowedError' });
  c.local = stream;
  return stream;
}

async function startCall(peer, mode) {
  if (!peer || isPseudo(peer)) return toast(t('call_pick'));
  if (CALL || startingCall) return toast(t('call_already'));
  startingCall = true;
  let ready = false;
  try { ready = !!(await sharedKeyFor(peer)); } finally { startingCall = false; }
  if (!ready) return toast(t(S.priv ? 'no_enc_peer' : 'enc_locked'));
  if (!navigator.mediaDevices || !window.RTCPeerConnection) return toast(t('call_nomedia'));
  const c = CALL = newCall(peer, mode, 'out');
  c.state = 'ringing-out';
  updateCallUI(); renderUserBar(); startRing();
  try {
    makePc(c);
    const stream = await getMedia(c, mode === 'video');
    c.aTr = c.pc.addTransceiver(stream.getAudioTracks()[0], { direction: 'sendrecv', streams: [stream] });
    c.vTr = c.pc.addTransceiver('video', { direction: 'sendrecv' }); // место под камеру/экран есть всегда, поэтому включать их можно без пересогласования
    const vt = stream.getVideoTracks()[0];
    if (vt) { await c.vTr.sender.replaceTrack(vt); c.vtrack = vt; c.vsrc = 'cam'; }
    const offer = await c.pc.createOffer();
    await c.pc.setLocalDescription(offer);
    if (CALL !== c) return;
    const ok = sigSend(peer, { t: 'offer', sdp: c.pc.localDescription.sdp, mode });
    if (vt) sigSend(peer, { t: 'vid', on: true });
    c.holdIce = false; c.outIce.splice(0).forEach(o => sigSend(peer, o));
    if (!(await ok)) throw new Error('signal');
    updateLocalView(); updateCallUI(); renderUserBar();
    c.ringTO = setTimeout(() => { if (CALL === c && c.state === 'ringing-out') { sigSend(peer, { t: 'end' }); endCall(t('call_noanswer')); } }, 45000);
  } catch (e) {
    if (CALL === c) { sigSend(peer, { t: 'end' }); endCall(t(e && e.name === 'NotAllowedError' ? 'call_nomedia' : 'call_failed')); }
  }
}
async function acceptCall() {
  const c = CALL; if (!c || c.state !== 'ringing-in') return;
  stopRing(); c.state = 'connecting'; updateCallUI(); renderUserBar();
  try {
    makePc(c);
    await getMedia(c, c.mode === 'video');
    await c.pc.setRemoteDescription({ type: 'offer', sdp: c.offer });
    for (const tr of c.pc.getTransceivers()) {
      tr.direction = 'sendrecv';
      if (tr.receiver.track.kind === 'audio') { c.aTr = tr; await tr.sender.replaceTrack(c.local.getAudioTracks()[0]); }
      else { c.vTr = tr; const vt = c.local.getVideoTracks()[0]; if (vt) { await tr.sender.replaceTrack(vt); c.vtrack = vt; c.vsrc = 'cam'; } }
    }
    await drainIce(c);
    const ans = await c.pc.createAnswer();
    await c.pc.setLocalDescription(ans);
    if (CALL !== c) return;
    sigSend(c.peer, { t: 'answer', sdp: c.pc.localDescription.sdp });
    if (c.vtrack) sigSend(c.peer, { t: 'vid', on: true });
    c.holdIce = false; c.outIce.splice(0).forEach(o => sigSend(c.peer, o));
    updateLocalView(); updateCallUI(); renderUserBar();
  } catch (e) {
    if (CALL === c) { sigSend(c.peer, { t: 'end' }); endCall(t(e && e.name === 'NotAllowedError' ? 'call_nomedia' : 'call_failed')); }
  }
}
async function drainIce(c) {
  const list = c.ice.splice(0);
  for (const x of list) { try { await c.pc.addIceCandidate(x); } catch { /* устаревший кандидат */ } }
}
async function onSig(payload) {
  if (!S.me || !payload || !payload.from || !payload.d) return;
  const from = payload.from;
  if (!S.friends.some(f => f.id === from)) return; // звонить могут только друзья
  const key = await sharedKeyFor(from); if (!key) return;
  let m; try { m = JSON.parse(await E2E.decStr(key, payload.d)); } catch { return; } // не расшифровалось: не от друга
  if (m.t === 'offer') {
    if (CALL || S.settings.dnd) { sigSend(from, { t: 'busy' }); return; }
    const c = CALL = newCall(from, m.mode === 'video' ? 'video' : 'audio', 'in');
    c.state = 'ringing-in'; c.offer = String(m.sdp || '');
    showNotif(name(S.profs[from]), t(c.mode === 'video' ? 'call_in_v' : 'call_in'), null);
    startRing(true);
    c.ringTO = setTimeout(() => { if (CALL === c && c.state === 'ringing-in') endCall(''); }, 50000);
    updateCallUI(); renderUserBar();
    return;
  }
  const c = CALL;
  if (!c || c.peer !== from) return;
  if (m.t === 'answer' && c.role === 'out' && c.pc && c.state === 'ringing-out') {
    c.state = 'connecting'; stopRing(); clearTimeout(c.ringTO);
    await c.pc.setRemoteDescription({ type: 'answer', sdp: String(m.sdp || '') });
    await drainIce(c);
    updateCallUI(); renderUserBar();
  } else if (m.t === 'ice') {
    if (c.pc && c.pc.remoteDescription) { try { await c.pc.addIceCandidate(m.c); } catch { /* ignore */ } } else c.ice.push(m.c);
  } else if (m.t === 'vid') { c.remoteVid = !!m.on; updateRemoteView(); }
  else if (m.t === 'decline') endCall(t('call_declined'));
  else if (m.t === 'busy') endCall(t('call_busy'));
  else if (m.t === 'end') endCall(c.state === 'ringing-in' ? '' : t('call_ended'));
}

// кнопки микрофона / камеры / экрана (в шапке звонка и в нижней плашке)
async function callCtl(kind) {
  const c = CALL;
  if (!c) {
    if (kind === 'screen') return toast(t('call_need_call'));
    const peer = S.tab === 'chats' && S.active && !isPseudo(S.active) ? S.active : null;
    if (!peer) return toast(t('call_pick'));
    return startCall(peer, kind === 'cam' ? 'video' : 'audio');
  }
  if (c.state === 'ringing-in') return;
  if (kind === 'mic') { c.muted = !c.muted; if (c.local) c.local.getAudioTracks().forEach(tr => { tr.enabled = !c.muted; }); }
  else if (kind === 'cam') await setVideoSource(c, c.vsrc === 'cam' ? null : 'cam');
  else if (kind === 'screen') await setVideoSource(c, c.vsrc === 'screen' ? null : 'screen');
  updateCallUI(); renderUserBar();
}
async function setVideoSource(c, src) {
  if (!c.vTr || !c.pc) return;
  let track = null;
  if (src === 'cam') {
    try { track = (await navigator.mediaDevices.getUserMedia({ video: true })).getVideoTracks()[0]; } catch { return toast(t('call_nomedia')); }
  } else if (src === 'screen') {
    try {
      track = (await navigator.mediaDevices.getDisplayMedia({ video: true })).getVideoTracks()[0];
      track.onended = () => { if (CALL === c && c.vtrack === track) setVideoSource(c, null).then(() => { updateCallUI(); renderUserBar(); }); };
    } catch { return toast(t('call_screen_err')); }
  }
  if (c.vtrack) { c.vtrack.onended = null; c.vtrack.stop(); }
  c.vtrack = track; c.vsrc = track ? src : null;
  await c.vTr.sender.replaceTrack(track);
  sigSend(c.peer, { t: 'vid', on: !!track });
  updateLocalView();
}

function tickCall() {
  const el = $('#cstat'); if (el) el.textContent = callStatusText();
  const sub = document.querySelector('#userbar .ub-t small'); if (sub) sub.textContent = callStatusText();
}
function updateRemoteView() {
  const ov = $('#callov'), c = CALL; if (!ov || !c) return;
  ov.classList.toggle('hasvid', !!c.remoteVid);
}
function updateLocalView() {
  const ov = $('#callov'), c = CALL; if (!ov || !c) return;
  const v = $('#lvid');
  if (v) v.srcObject = c.vtrack ? new MediaStream([c.vtrack]) : null;
  ov.classList.toggle('haslocal', !!c.vtrack);
}
function updateCallUI() {
  const c = CALL; let ov = $('#callov'), inc = $('#callin');
  if (!c) { if (ov) ov.remove(); if (inc) inc.remove(); return; }
  const p = S.profs[c.peer] || { id: c.peer, username: '?' };
  if (c.state === 'ringing-in') {
    if (ov) ov.remove();
    if (!inc) { inc = document.createElement('div'); inc.id = 'callin'; inc.className = 'callin'; document.body.appendChild(inc); }
    inc.innerHTML = `${avatar(p, 52)}<div class="ct"><b>${esc(name(p))}</b><span>${esc(t(c.mode === 'video' ? 'call_in_v' : 'call_in'))}</span></div>
      <button class="cround dec" data-call="decline" title="${esc(t('decline_call'))}">${ic('hangup', 22)}</button>
      <button class="cround acc" data-call="accept" title="${esc(t('accept_call'))}">${ic(c.mode === 'video' ? 'video' : 'phone', 22)}</button>`;
    return;
  }
  if (inc) inc.remove();
  if (!ov) {
    ov = document.createElement('div'); ov.id = 'callov'; ov.className = 'callov';
    ov.innerHTML = '<div class="callcard"><video id="rvid" class="rvid" autoplay playsinline></video><div class="cwho" id="cwho"></div><video id="lvid" class="lvid" autoplay playsinline muted></video><div class="cbar" id="cbar"></div></div>';
    document.body.appendChild(ov);
    $('#rvid').srcObject = c.remote;
  }
  $('#cwho').innerHTML = `${avatar(p, 112)}<b>${esc(name(p))}</b><span id="cstat">${esc(callStatusText())}</span>${c.vsrc === 'screen' ? `<em>${esc(t('call_sharing'))}</em>` : ''}`;
  const b = (cls, act, icon, tt) => `<button class="cround ${cls}" data-call="${act}" title="${esc(tt)}">${ic(icon, 22)}</button>`;
  $('#cbar').innerHTML = b(c.muted ? 'off' : '', 'mic', c.muted ? 'micoff' : 'mic', t('mic')) + b(c.vsrc === 'cam' ? 'on' : '', 'cam', c.vsrc === 'cam' ? 'video' : 'videooff', t('cam'))
    + b(c.vsrc === 'screen' ? 'on' : '', 'screen', 'screen', t('screen')) + b('dec', 'hangup', 'hangup', t('hangup'));
  updateRemoteView(); updateLocalView();
}
function cleanupCall() {
  const c = CALL;
  stopRing();
  if (c) {
    clearTimeout(c.ringTO); clearInterval(c.tick);
    try { if (c.pc) { c.pc.onicecandidate = c.pc.ontrack = c.pc.onconnectionstatechange = null; c.pc.close(); } } catch { /* ignore */ }
    try { if (c.local) c.local.getTracks().forEach(tr => tr.stop()); } catch { /* ignore */ }
    try { if (c.vtrack) { c.vtrack.onended = null; c.vtrack.stop(); } } catch { /* ignore */ }
  }
  CALL = null;
  document.querySelectorAll('#callov,#callin').forEach(x => x.remove());
}
function endCall(note) {
  cleanupCall();
  if (note) toast(note);
  renderUserBar();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-call]'); if (!b) return;
  const a = b.dataset.call, c = CALL;
  if (a === 'accept') acceptCall();
  else if (a === 'decline' || a === 'hangup') { if (c) { sigSend(c.peer, { t: a === 'decline' ? 'decline' : 'end' }); endCall(''); } }
  else callCtl(a);
});

// ================= каркас =================
function renderApp() {
  root.innerHTML = `<div class="app ${S.tab === 'profile' || S.tab === 'help' ? 'noside' : ''}"><nav class="rail" id="rail"></nav><aside class="side" id="side"></aside><main class="main" id="main"></main></div>`;
  S.sideTab = null;
  renderRail(); renderSide(); renderMain();
}
function renderRail() {
  const rail = $('#rail'); if (!rail || !S.me) return;
  const u = totalUnread();
  const b = n => (n ? `<span class="badge-dot">${n > 99 ? '99+' : n}</span>` : '');
  const nav = (id, icon, label, badge) => `<button class="rnav ${S.tab === id ? 'on' : ''}" data-nav="${id}">${ic(icon)}<span>${esc(label)}</span>${badge || ''}</button>`;
  const vis = S.settings.show_online;
  rail.innerHTML = `
    <button class="ravatar" data-nav="profile" title="${esc(t('profile'))}">${avatar(S.me, 56)}</button>
    <div class="rnavs">${nav('chats', 'chat', t('chats'), b(u))}${nav('settings', 'gear', t('settings'))}${nav('help', 'help', t('help'))}</div>
    <div class="spacer"></div>
    <button class="statuspill" data-act="toggle-status" title="${esc(t('st_menu'))}"><i class="sd ${vis ? (S.settings.dnd ? 'dnd' : 'on') : ''}"></i>${esc(statusLabel())}<span class="chev">${ic('chev', 14)}</span></button>`;
}
function toggleStatusMenu() {
  const ex = $('#stmenu');
  if (ex) { ex.remove(); return; }
  const on = S.settings.show_online, dnd = S.settings.dnd;
  const m = document.createElement('div');
  m.id = 'stmenu'; m.className = 'stmenu';
  const opt = (v, icon, tt, d, sel) => `<button class="stopt ${sel ? 'sel' : ''}" data-v="${v}"><span class="sico ${v}">${ic(icon, 18)}</span><span><b>${esc(tt)}</b><small>${esc(d)}</small></span>${sel ? `<span class="tick">${ic('check', 16)}</span>` : ''}</button>`;
  m.innerHTML = `<div class="sthead">${esc(t('st_menu'))}</div>` + opt('on', 'eye', t('st_online'), t('st_online_d'), on && !dnd) + opt('dnd', 'moon', t('st_dnd'), t('st_dnd_d'), on && dnd) + opt('off', 'eyeoff', t('st_invisible'), t('st_invisible_d'), !on);
  m.addEventListener('click', e => {
    const b = e.target.closest('[data-v]'); if (!b) return;
    m.remove();
    S.settings.dnd = b.dataset.v === 'dnd';
    setSetting('show_online', b.dataset.v !== 'off');
    renderUserBar();
  });
  document.body.appendChild(m);
}

// ================= боковая панель =================
let freshT;
function renderSide() {
  const side = $('#side'); if (!side || !S.me) return;
  const app = $('.app');
  if (app) {
    app.classList.toggle('noside', S.tab === 'profile' || S.tab === 'help');
    app.classList.toggle('min', !!S.settings.side_collapsed && S.tab === 'chats');
  }
  if (S.sideTab !== S.tab) {
    S.sideTab = S.tab; S.csearch = ''; S.ssearch = '';
    const ub = '<div class="userbar" id="userbar"></div>';
    const ph = S.settings.skin === 'classic' ? t('search_chats') : t('search_short');
    if (S.tab === 'chats') side.innerHTML = `<div class="side-h"><span>${esc(t('chats'))}</span></div><div class="side-top"><div class="search">${ic('search', 18)}<input id="csearch" placeholder="${esc(ph)}" autocomplete="off"></div><button class="iconbtn searchexp" data-act="toggle-side" title="${esc(t('side_expand'))}">${ic('search', 20)}</button><button class="iconbtn sidetog" data-act="toggle-side" title="${esc(t(S.settings.side_collapsed ? 'side_expand' : 'side_collapse'))}">${ic('sidebar', 20)}</button></div><div class="scroll"><div id="clist"></div><div id="cppl"></div></div>${ub}`;
    if (S.tab === 'settings') side.innerHTML = `<div class="side-h">${esc(t('settings'))}</div><div class="scroll" id="slist"></div>${ub}`;
    if (S.tab === 'profile' || S.tab === 'help') side.innerHTML = '';
    side.classList.add('fresh'); clearTimeout(freshT); freshT = setTimeout(() => side.classList.remove('fresh'), 1000); // лёгкое появление списка только при смене раздела
  }
  if (S.tab === 'chats') fillChats();
  if (S.tab === 'settings') fillSettingsList();
  renderUserBar();
}
// нижняя плашка боковой панели: профиль, статус и кнопки микрофона, камеры и экрана
function renderUserBar() {
  const el = $('#userbar'); if (!el || !S.me) return;
  const vis = S.settings.show_online, c = CALL;
  const sub = c ? callStatusText() : statusLabel();
  el.innerHTML = `<button class="ubav" data-nav="profile" title="${esc(t('profile'))}">${avatar(S.me, 40, vis)}</button>
    <button class="ub-t" data-act="toggle-status" title="${esc(t('st_menu'))}"><b>${esc(name(S.me))}</b><small>${esc(sub)}</small></button>
    <div class="ub-btns">
      <button class="ubtn ${c && c.muted ? 'off' : ''}" data-act="mic" title="${esc(t('mic'))}">${ic(c && c.muted ? 'micoff' : 'mic', 18)}</button>
      <button class="ubtn ${c && c.vsrc === 'cam' ? 'on' : ''}" data-act="cam" title="${esc(t('cam'))}">${ic('video', 18)}</button>
      <button class="ubtn ${c && c.vsrc === 'screen' ? 'on' : ''}" data-act="screen" title="${esc(t('screen'))}">${ic('screen', 18)}</button>
    </div>`;
}
function fillChats() {
  const box = $('#clist'); if (!box) return;
  const last = f => { const m = S.msgs[f.id]; return m && m.length ? m[m.length - 1].created_at : ''; };
  const q = (S.csearch || '').trim().toLowerCase();
  const all = [S.profs[SAVED], ...S.friends, S.profs[SYSID]].filter(Boolean);
  const list = all.filter(f => !q || name(f).toLowerCase().includes(q) || (f.username || '').includes(q))
    .sort((a, b) => last(b).localeCompare(last(a)) || name(a).localeCompare(name(b)));
  const prev = f => {
    const ms = S.msgs[f.id] || [], l = ms[ms.length - 1];
    if (f.id === SYSID) return t('sys_update');
    if (!l) return f.id === SAVED ? t('saved_d') : t('no_messages');
    return (l.sender === S.me.id ? t('you_prefix') : '') + prevText(l);
  };
  box.innerHTML = list.map((f, idx) => {
    const ms = S.msgs[f.id] || [], l = ms[ms.length - 1], u = unread(f.id);
    return `<div class="item ${S.active === f.id ? 'active' : ''}" style="--i:${Math.min(idx, 12)}" data-chat="${f.id}" title="${esc(name(f))}">
      ${avatar(f, 42, S.online.has(f.id))}
      <div class="meta">
        <div class="row"><b>${esc(name(f))}</b><span class="time">${l ? fmtTime(l.created_at) : ''}</span></div>
        <div class="row"><span class="prev">${esc(prev(f))}</span>${u ? `<span class="badge">${u}</span>` : ''}</div>
      </div>${u ? `<span class="udot">${u > 9 ? '9+' : u}</span>` : ''}</div>`;
  }).join('') + (!S.friends.length && !q ? `<div class="empty small">${t('no_friends')}</div>` : '');
}
const SET_TABS = [['appearance', 'palette', '#8e5be8', 's_appearance'], ['notifications', 'bell', '#f76b15', 's_notifications'], ['privacy', 'shield', '#30a46c', 's_privacy'], ['chats', 'chat', '#3b82f6', 's_chats'], ['account', 'key', '#e5484d', 's_account'], ['about', 'info', '#12a594', 's_about']];
function fillSettingsList() {
  const box = $('#slist'); if (!box) return;
  const q = (S.ssearch || '').trim().toLowerCase();
  const tabs = SET_TABS.filter(([, , , key]) => !q || t(key).toLowerCase().includes(q));
  box.innerHTML = `<div class="sprof">${avatar(S.me, 48, true)}<div class="sp-t"><b>${esc(name(S.me))}</b><button class="linkbtn" data-act="edit-profile">${esc(t('edit_profile'))}</button></div></div>
    <div class="search sset">${ic('search', 18)}<input id="ssearch" placeholder="${esc(t('search_short'))}" value="${esc(S.ssearch || '')}" autocomplete="off"></div>`
    + tabs.map(([id, icon, col, key]) => `<div class="item ${S.stab === id ? 'active' : ''}" data-stab="${id}"><span class="tile" style="background:${col}">${ic(icon, 18)}</span><b>${esc(t(key))}</b></div>`).join('')
    + `<div class="item logout" data-act="logout">${ic('logout', 18)}<b>${esc(t('a_logout_btn'))}</b></div>`;
}

// поиск людей: тот же поиск в «Чатах» ищет и среди чатов, и среди всех пользователей
let searchTimer;
function searchPeople() {
  clearTimeout(searchTimer);
  const box = $('#cppl'); if (!box) return;
  const q = (S.csearch || '').trim().toLowerCase().replace(/^@/, '').replace(/[^a-z0-9_]/g, '');
  if (q.length < 2) { box.innerHTML = ''; return; }
  searchTimer = setTimeout(async () => {
    if (!S.me) return;
    const { data, error } = await sb.from('profiles').select(PCOLS).ilike('username', q.replace(/_/g, '\\_') + '%').neq('id', S.me.id).limit(10);
    const cur = $('#cppl'); if (!cur) return;
    if (error) { cur.innerHTML = `<div class="err" style="padding:8px 16px">${esc(error.message)}</div>`; return; }
    const rows = (data || []).filter(p => !S.friends.some(f => f.id === p.id));
    rows.forEach(p => { S.profs[p.id] = p; });
    cur.innerHTML = rows.length ? `<div class="side-sec">${esc(t('people'))}</div>` + rows.map(p => `
      <div class="item" data-profile="${p.id}">${avatar(p, 38)}<div class="meta"><b>${esc(name(p))}</b><div class="prev">@${esc(p.username)}</div></div>
      <div class="acts">${isBlocked(p.id) ? `<span class="prev">${esc(t('st_blocked'))}</span>` : `<button class="btn sm" data-act="message" data-id="${p.id}">${esc(t('write'))}</button>`}</div></div>`).join('') : '';
  }, 300);
}

// ================= личные чаты и блокировки =================
const isBlocked = id => (S.blocked || []).includes(id);
// человек появляется в списке чатов, если с ним есть переписка; заявки в друзья не нужны
async function addDirectPeers() {
  const ids = Object.keys(S.msgs).filter(id => !isPseudo(id));
  const missing = ids.filter(id => !S.profs[id]);
  if (missing.length) {
    const { data } = await sb.from('profiles').select(PCOLS).in('id', missing);
    (data || []).forEach(p => { S.profs[p.id] = p; });
  }
  ids.forEach(id => {
    const p = S.profs[id];
    if (p && !isBlocked(id) && !S.friends.some(x => x.id === id)) S.friends.push({ ...p, direct: true });
  });
}
async function ensureDirect(id) {
  if (!S.me || isPseudo(id) || isBlocked(id)) return;
  if (!S.profs[id]) await loadProfile(id);
  if (S.me && S.profs[id] && !S.friends.some(x => x.id === id)) S.friends.push({ ...S.profs[id], direct: true });
}
async function startDirect(id) {
  if (!id || isPseudo(id)) return;
  if (isBlocked(id)) return toast(t('msg_blocked'));
  if (!S.profs[id]) await loadProfile(id);
  if (!S.profs[id]) return toast(t('not_found'));
  if (!S.friends.some(f => f.id === id)) S.friends.push({ ...S.profs[id], direct: true });
  openChat(id);
}
async function loadBlocked() {
  const { data, error } = await sb.from('user_blocks').select('blocked_id').eq('blocker_id', S.me.id);
  if (error) { console.warn('[Speekly blocks]', error.message); S.blocked = []; return; }
  S.blocked = (data || []).map(x => x.blocked_id);
  const miss = S.blocked.filter(id => !S.profs[id]);
  if (miss.length) {
    const { data: ps } = await sb.from('profiles').select(PCOLS).in('id', miss);
    (ps || []).forEach(p => { S.profs[p.id] = p; });
  }
}
async function blockPerson(id) {
  if (!confirm(t('person_block_confirm'))) return false;
  const { error } = await sb.from('user_blocks').insert({ blocker_id: S.me.id, blocked_id: id });
  if (error && error.code !== '23505') { toast(t('error', error.message)); return false; }
  const rel = S.friends.find(x => x.id === id);
  if (rel && rel.fid) await sb.from('friendships').delete().eq('id', rel.fid);
  S.blocked = [...new Set([...(S.blocked || []), id])];
  S.friends = S.friends.filter(x => x.id !== id);
  if (S.active === id) S.active = null;
  if (CALL && CALL.peer === id) { sigSend(id, { t: 'end' }); endCall(''); }
  updateTitle(); renderRail(); renderSide(); renderMain();
  return true;
}
async function unblockPerson(id) {
  const { error } = await sb.from('user_blocks').delete().eq('blocker_id', S.me.id).eq('blocked_id', id);
  if (error) { toast(t('error', error.message)); return false; }
  S.blocked = (S.blocked || []).filter(x => x !== id);
  await addDirectPeers(); // если переписка была, чат возвращается в список
  updateTitle(); renderRail(); renderSide(); renderMain();
  return true;
}

// ================= основная область =================
function renderMain() {
  const main = $('#main'); if (!main || !S.me) return;
  if (S.tab === 'chats') {
    if (S.active && S.profs[S.active]) renderChat(); else main.innerHTML = `<div class="empty">${esc(t('pick_chat'))}</div>`;
  } else if (S.tab === 'profile') renderProfilePage();
  else if (S.tab === 'help') renderHelp();
  else renderSettingsPage();
}

// ---- чат ----
function openChat(fid) {
  S.tab = 'chats'; S.active = fid; S.sideTab = null;
  renderRail(); renderSide(); renderMain(); enter();
  if (!isPseudo(fid)) loadProfile(fid).then(() => { if (S.active === fid) renderChatHeader(); }); // вдруг у друга появился ключ
  markRead(fid);
}
function renderChat() {
  const main = $('#main');
  const ro = S.active === SYSID, pseudo = isPseudo(S.active);
  const composer = ro ? `<div class="composer ro">${esc(t('sys_ro'))}</div>` : `<div class="composer">
      ${pseudo ? '' : `<button class="cbtn" data-act="attach" title="${esc(t('attach'))}">${ic('clip', 20)}</button>
      <button class="cbtn" data-act="attach-img" title="${esc(t('attach_img'))}">${ic('image', 20)}</button>`}
      <div class="cinput"><textarea id="minp" rows="1" placeholder="${esc(t('msg_ph'))}" maxlength="4000"></textarea>
        <button class="emobtn" data-act="emoji" title="${esc(t('emoji'))}">${ic('smile', 22)}</button></div>
      <button class="sendbtn" id="msend" title="${esc(t('send'))}">${ic('send', 20)}</button>
      <div class="emopop" id="emopop" hidden>${EMOJIS.map(x => `<button data-emo="${x}">${x}</button>`).join('')}</div>
      ${pseudo ? '' : '<input type="file" id="fileany" hidden><input type="file" id="fileimg" accept="image/*,video/*" hidden>'}
    </div>`;
  main.innerHTML = `<div class="chead" id="chead"></div><div id="msgs"></div>${composer}`;
  renderChatHeader(); renderMessages();
  const inp = $('#minp'), chatId = S.active;
  if (!inp) return;
  inp.value = S.drafts[chatId] || '';
  inp.focus();
  const fit = () => { inp.style.height = 'auto'; inp.style.height = Math.min(inp.scrollHeight, 140) + 'px'; };
  fit();
  inp.addEventListener('input', () => { S.drafts[chatId] = inp.value; fit(); });
  inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const send = S.settings.enter_send ? !e.shiftKey : e.ctrlKey;
    if (send) { e.preventDefault(); sendMessage(); }
  });
  $('#msend').addEventListener('click', sendMessage);
  ['#fileany', '#fileimg'].forEach(id => { const el = $(id); if (el) el.addEventListener('change', e => { const f = e.target.files[0]; e.target.value = ''; if (f) sendFile(f); }); });
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
  if (p.pseudo) {
    h.innerHTML = `<div class="hlink nolink">${avatar(p, 40)}<div><div class="nm">${esc(name(p))}</div><div class="st">${esc(t(p.id === SAVED ? 'saved_d' : 'sys_d'))}</div></div></div>`;
    return;
  }
  const st = statusInfo(p);
  const badge = S.priv && p.public_key
    ? `<button class="e2e" data-act="seccode" data-id="${p.id}" title="${esc(t('sec_title'))}">${ic('lock', 15)}<span class="e2t"> ${esc(t('e2e_on'))}</span></button>`
    : `<span class="e2e off" title="${esc(t(S.priv ? 'e2e_wait' : 'e2e_locked'))}">${ic('lock', 15)}<span class="e2t"> ${esc(t(S.priv ? 'e2e_wait' : 'e2e_locked'))}</span></span>`;
  const acts = `<div class="hactions"><button class="hbtn" data-act="call-audio" data-id="${p.id}" title="${esc(t('call_voice'))}">${ic('phone', 19)}</button><button class="hbtn" data-act="call-video" data-id="${p.id}" title="${esc(t('call_video'))}">${ic('video', 19)}</button><button class="hbtn" data-act="chat-more" data-id="${p.id}" title="${esc(t('more'))}">${ic('more', 19)}</button></div>`;
  h.innerHTML = `<div class="hlink" data-profile="${p.id}" title="${esc(t('view_profile'))}">${avatar(p, 40, st.on)}<div><div class="nm">${esc(name(p))}${p.verified ? VERIFIED() : ''}</div><div class="st ${st.on ? 'on' : ''}">${esc(st.text)}</div></div></div>${badge}${acts}`;
}
const seenMsg = new Set(), seenChat = new Set();
// плавный переход при смене раздела/чата (не при каждом перерисовывании)
function enter() {
  const m = $('#main'); if (!m) return;
  m.classList.remove('enter'); void m.offsetWidth; m.classList.add('enter');
  setTimeout(() => m.classList.remove('enter'), 600);
}
function renderMessages(scroll = true) {
  const box = $('#msgs'); if (!box || !S.active) return;
  const firstDraw = !seenChat.has(S.active); seenChat.add(S.active);
  const all = S.msgs[S.active] || [], lim = S.limit[S.active] || 100;
  const ms = all.length > lim ? all.slice(-lim) : all; // рисуем только последние сообщения: так чат не тормозит
  const keep = box.scrollTop, p = S.profs[S.active], showAv = S.settings.show_msg_avatars !== false;
  let lastDay = '';
  box.innerHTML = (all.length > ms.length ? `<div class="center"><button class="btn sm ghost" data-act="more-msgs">${esc(t('more_msgs'))}</button></div>` : '') + ms.map((m, i) => {
    const d = new Date(m.created_at).toDateString();
    let sep = '';
    if (d !== lastDay) { sep = `<div class="day">${esc(dayLabel(m.created_at))}</div>`; lastDay = d; }
    const mine = m.sender === S.me.id;
    const first = !sep && i > 0 && ms[i - 1].sender === m.sender ? false : true;
    const lastInGroup = !ms[i + 1] || ms[i + 1].sender !== m.sender || new Date(ms[i + 1].created_at).toDateString() !== d;
    const dd = m.dec || { body: m.body, file: null };
    const media = dd.file && /^(image|video)\//.test(dd.file.y || '');
    const av = mine || !showAv ? '' : (lastInGroup && p ? `<span class="avl" data-profile="${p.pseudo ? '' : p.id}">${avatar(p, 34)}</span>` : '<span class="avgap"></span>');
    const txt = dd.bad ? `<span class="txt locked">${ic('lock', 13)} ${esc(t('cant_decrypt'))}</span>` : (dd.body ? `<span class="txt">${esc(dd.body)}</span>` : '');
    const tick = mine && S.active !== SAVED ? (m.pending ? ' ◷' : m.read_at ? ' ✓✓' : ' ✓') : '';
    const isNew = !firstDraw && !seenMsg.has(m.id); seenMsg.add(m.id);
    return sep + `<div class="msg ${mine ? 'me' : 'them'} ${m.pending ? 'pending' : ''} ${isNew ? 'pop' : ''}">${av}<div class="bubble ${media ? 'media' : ''}">${!first ? '' : mine ? `<div class="sname me">${esc(t('you_label'))}</div>` : `<div class="sname" data-profile="${p && !p.pseudo ? p.id : ''}">${esc(name(p))}</div>`}${attHTML(m)}${txt}<span class="meta">${fmtTime(m.created_at)}${tick}</span></div></div>`;
  }).join('') || `<div class="empty small">${esc(t('write_first'))}</div>`;
  stickBottom = scroll;
  if (scroll && !firstDraw && box.scrollHeight - keep - box.clientHeight < 400) { box.scrollTop = keep; box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' }); } // новое сообщение плавно прокручивает вниз
  else box.scrollTop = scroll ? box.scrollHeight : keep;
  box.querySelectorAll('img').forEach(i => { if (!i.complete) i.addEventListener('load', keepBottom, { once: true }); });
  hydrate();
}
async function sendMessage() {
  const inp = $('#minp'); if (!inp || !S.active) return;
  const body = inp.value.trim(); if (!body) return;
  const to = S.active;
  inp.value = ''; inp.style.height = 'auto'; S.drafts[to] = '';
  const sb2 = $('#msend'); if (sb2) { sb2.classList.remove('sent'); void sb2.offsetWidth; sb2.classList.add('sent'); setTimeout(() => sb2.classList.remove('sent'), 600); }
  if (to === SAVED) { // «Избранное»: заметка хранится только на этом компьютере
    (S.msgs[SAVED] = S.msgs[SAVED] || []).push({ id: 'sv' + Date.now() + Math.random().toString(36).slice(2, 6), sender: S.me.id, recipient: SAVED, body, created_at: new Date().toISOString(), read_at: null, dec: { body, file: null, enc: false } });
    saveSavedMsgs(); renderMessages(); renderSide();
    return;
  }
  if (isPseudo(to)) return;
  if (!(await sendEnc(to, body))) {
    const cur = $('#minp');
    if (cur && S.active === to && !cur.value) { cur.value = body; S.drafts[to] = body; } else S.drafts[to] = body;
  }
}
async function sendFile(file) {
  if (!S.active || !file || isPseudo(S.active)) return;
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
  if (ok && caption) { S.drafts[to] = ''; if (cur && S.active === to) { cur.value = ''; cur.style.height = 'auto'; } }
}

// ---- профиль любого пользователя (окно) ----
async function openProfile(id) {
  if (!id) return;
  if (S.me && id === S.me.id) { S.tab = 'profile'; S.sideTab = null; renderRail(); renderSide(); renderMain(); return; }
  if (!S.profs[id]) await loadProfile(id);
  const p = S.profs[id];
  if (!p) return toast(t('not_found'));
  const blocked = isBlocked(id);
  const o = modal(`<div class="pmodal">${profileHead(p)}<div class="pbio">${esc(p.bio || t('no_bio'))}</div>
    <div class="center">${blocked ? '' : `<button class="btn" data-m="write">${esc(t('write'))}</button><button class="btn ghost" data-m="code">${ic('lock', 16)} ${esc(t('sec_btn'))}</button>`}<button class="btn ${blocked ? 'ghost' : 'danger'}" data-m="${blocked ? 'unblock' : 'block'}">${esc(t(blocked ? 'person_unblock' : 'person_block'))}</button><button class="btn ghost" data-m="close">${esc(t('close'))}</button></div></div>`, true, 'wide');
  const w = o.querySelector('[data-m=write]'); if (w) w.onclick = () => { o.remove(); startDirect(id); };
  const bl = o.querySelector('[data-m=block]'); if (bl) bl.onclick = async () => { if (await blockPerson(id)) o.remove(); };
  const ub = o.querySelector('[data-m=unblock]'); if (ub) ub.onclick = async () => { if (await unblockPerson(id)) o.remove(); };
  const c = o.querySelector('[data-m=code]'); if (c) c.onclick = () => { o.remove(); showSecCode(id); };
  o.querySelector('[data-m=close]').onclick = () => o.remove();
}

// ---- шапка профиля (обложка + аватар) ----
function profileHead(p) {
  const st = statusInfo(p);
  const bn = p.banner_url && S.settings.anim_avatars === false ? p.banner_url : p.banner_url;
  return `<div class="pbanner">${bn ? `<img class="bimg" src="${esc(bn)}" alt="" decoding="async">` : ''}<div class="pshade"></div>
    <div class="pinfo">${avatar(p, 96, false, true)}
      <div class="ptext"><div class="pname"><span>${esc(name(p))}</span>${p.verified ? VERIFIED() : ''}</div>
        <div class="pstat"><i class="sd ${st.on ? 'on' : ''}"></i>${esc(st.text)}</div>
        <div class="puser">@${esc(p.username)}</div></div></div></div>`;
}

// ---- свой профиль ----
function renderProfilePage() {
  const main = $('#main'), me = S.me;
  const accs = accountList();
  main.innerHTML = `<div class="page wide">${profileHead(me)}
    ${me.bio ? `<div class="pbio">${esc(me.bio)}</div>` : ''}
    <div class="center"><button class="btn outline" data-act="edit-profile">${ic('compose', 16)} ${esc(t('edit_profile'))}</button></div>
    <div class="pcard2"><div class="ph"><span>${esc(t('switch_profile'))}</span>${ic('user', 20)}</div>
      ${accs.map(a => `<div class="accrow ${me.id === a.id ? 'cur' : ''}" data-acc="${a.id}">${avatar(a, 44)}<div><b>${esc(name(a))}</b><div class="prev">@${esc(a.username)}</div></div>${me.id === a.id ? `<span class="chk2">${ic('check', 18)}</span>` : ''}</div>`).join('')}
      ${remember() ? `<button class="btn big full" data-act="add-profile">${ic('plus', 16)} ${esc(t('add_profile'))}</button>` : ''}</div></div>`;
}

// ---- редактирование профиля: окно, которое закрывается после сохранения ----
function openEditProfile() {
  if ($('.modal.editm')) return;
  const me = S.me;
  const o = modal(`<h3>${esc(t('edit_title'))}</h3>
    <div id="ep_prev"></div>
    <div class="mrow"><span class="lbl">${esc(t('photo'))}</span>
      <button class="btn sm" data-m="av">${ic('camera', 15)} ${esc(t('upload'))}</button><button class="btn sm ghost" data-m="avx">${esc(t('remove'))}</button></div>
    <div class="mrow"><span class="lbl">${esc(t('banner'))}</span>
      <button class="btn sm" data-m="bn">${ic('camera', 15)} ${esc(t('upload'))}</button><button class="btn sm ghost" data-m="bnx">${esc(t('remove'))}</button></div>
    <div class="hint">${esc(t('media_hint'))}</div><div class="hint ok" id="ep_msg"></div>
    <input type="file" id="ep_avf" accept="image/*" hidden><input type="file" id="ep_bnf" accept="image/*" hidden>
    <div class="field"><label>${esc(t('f_name'))}</label><input id="p_name" maxlength="40" value="${esc(me.display_name || '')}"></div>
    <div class="field"><label>${esc(t('f_nick'))}</label><input value="@${esc(me.username)}" readonly></div>
    <div class="field"><label>${esc(t('f_bio'))}</label><textarea id="p_bio" maxlength="200">${esc(me.bio || '')}</textarea></div>
    <div class="mbtns"><button class="btn ghost" data-m="cancel">${esc(t('cancel'))}</button><button class="btn" data-m="save">${esc(t('save'))}</button></div>`, true, 'editm');
  const q = k => o.querySelector(`[data-m=${k}]`);
  const prev = () => {
    o.querySelector('#ep_prev').innerHTML = profileHead(S.me);
    q('avx').hidden = !S.me.avatar_url; q('bnx').hidden = !S.me.banner_url;
  };
  prev();
  const guard = async fn => { const bs = o.querySelectorAll('button'); bs.forEach(b => { b.disabled = true; }); try { await fn(); } finally { bs.forEach(b => { b.disabled = false; }); prev(); } };
  q('av').onclick = () => o.querySelector('#ep_avf').click();
  q('bn').onclick = () => o.querySelector('#ep_bnf').click();
  o.querySelector('#ep_avf').onchange = e => { const f = e.target.files[0]; e.target.value = ''; if (f) guard(() => uploadMedia('avatar', f)); };
  o.querySelector('#ep_bnf').onchange = e => { const f = e.target.files[0]; e.target.value = ''; if (f) guard(() => uploadMedia('banner', f)); };
  q('avx').onclick = () => guard(() => removeMedia('avatar'));
  q('bnx').onclick = () => guard(() => removeMedia('banner'));
  q('cancel').onclick = () => o.remove();
  q('save').onclick = () => guard(async () => {
    const ok = await updateMyProfile({ display_name: $('#p_name').value.trim().slice(0, 40), bio: $('#p_bio').value.trim().slice(0, 200) });
    if (ok) { o.remove(); toast(t('saved')); }
  });
}
async function updateMyProfile(patch) {
  try {
    const { data, error } = await sb.from('profiles').update(patch).eq('id', S.me.id).select().single();
    if (error) throw error;
    S.me = { ...S.me, ...data };
  } catch (e) { toast(t('error', (e && e.message) || e)); return false; }
  syncAccountMeta(); renderRail();
  if (S.tab === 'profile') renderProfilePage();
  return true;
}
function loadImage(file) {
  return new Promise((res, rej) => { const url = URL.createObjectURL(file); const img = new Image(); img.onload = () => res(img); img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('decode')); }; img.src = url; });
}
// обрезка по центру до w×h в JPEG (для GIF/WebP берётся первый кадр)
async function makeJpeg(file, w, h, q = 0.85) {
  const img = await loadImage(file);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ratio = w / h, sr = img.width / img.height;
  let sw, sh;
  if (sr > ratio) { sh = img.height; sw = sh * ratio; } else { sw = img.width; sh = sw / ratio; }
  c.getContext('2d').drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2, sw, sh, 0, 0, w, h);
  URL.revokeObjectURL(img.src);
  const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', q));
  if (!blob) throw new Error('encode');
  return blob;
}
const EXTS = ['jpg', 'gif', 'webp', 'png'];
async function uploadMedia(kind, file) {
  const msg = m => { const el = $('#ep_msg'); if (el) el.textContent = m || ''; };
  if (!file.type.startsWith('image/')) return toast(t('err_img'));
  const animated = /^image\/(gif|webp)$/.test(file.type), maxMb = kind === 'avatar' ? 15 : 25;
  let blob, ext, ctype, thumb = null;
  try {
    if (animated) { // оригинал не трогаем, чтобы анимация сохранилась
      if (file.size > maxMb * 1024 * 1024) return toast(t('err_big', maxMb));
      blob = file; ext = file.type === 'image/gif' ? 'gif' : 'webp'; ctype = file.type;
      if (kind === 'avatar') { try { thumb = await makeJpeg(file, 96, 96, 0.8); } catch { thumb = null; } }
    } else {
      blob = await makeJpeg(file, ...(kind === 'avatar' ? [256, 256] : [1200, 420]), 0.88); ext = 'jpg'; ctype = 'image/jpeg';
    }
  } catch { return toast(t('err_img')); }
  msg(t('uploading'));
  const bucket = sb.storage.from('avatars'), base = `${S.me.id}/${kind}`;
  try {
    await bucket.remove([...EXTS.map(e => `${base}.${e}`), `${base}_s.jpg`]);
    const up = await bucket.upload(`${base}.${ext}`, blob, { upsert: true, contentType: ctype, cacheControl: '3600' });
    if (up.error) throw up.error;
    if (thumb) await bucket.upload(`${base}_s.jpg`, thumb, { upsert: true, contentType: 'image/jpeg', cacheControl: '3600' });
    const url = bucket.getPublicUrl(`${base}.${ext}`).data.publicUrl + '?v=' + Date.now();
    await updateMyProfile({ [kind === 'avatar' ? 'avatar_url' : 'banner_url']: url });
  } catch (e) { toast(t('err_upload', (e && (e.message || e.error_description)) || String(e))); }
  finally { msg(''); }
}
async function removeMedia(kind) {
  try { await sb.storage.from('avatars').remove([...EXTS.map(e => `${S.me.id}/${kind}.${e}`), `${S.me.id}/${kind}_s.jpg`]); } catch { /* ignore */ }
  await updateMyProfile({ [kind === 'avatar' ? 'avatar_url' : 'banner_url']: null });
}

// ---- помощь ----
function renderHelp() {
  $('#main').innerHTML = `<div class="page wide helplogo">${LOGO}<h2>${esc(t('help_title'))}</h2>${[1, 2, 3, 4, 5, 6].map(i => `<div class="srow"><div><div class="t">${esc(t('help_' + i + '_t'))}</div><div class="d">${esc(t('help_' + i + '_d'))}</div></div></div>`).join('')}</div>`;
}

// ---- настройки ----
const toggleRow = (key, tt, d) => `<div class="srow"><div><div class="t">${esc(tt)}</div><div class="d">${esc(d)}</div></div><button class="switch ${S.settings[key] ? 'on' : ''}" data-toggle="${key}" aria-label="${esc(tt)}"></button></div>`;
const segRow = (key, tt, d, opts) => `<div class="srow"><div><div class="t">${esc(tt)}</div><div class="d">${esc(d)}</div></div><div class="seg">${opts.map(([v, l]) => `<button class="${S.settings[key] === v ? 'on' : ''}" data-set="${key}" data-val="${v}">${esc(l)}</button>`).join('')}</div></div>`;

const group = rows => `<div class="sgroup">${rows}</div>`;
function renderSettingsPage() {
  const main = $('#main'), s = S.settings;
  let h = '';
  if (S.stab === 'appearance') {
    const custom = !ACCENTS.includes(s.accent);
    h = `<h2>${esc(t('s_appearance'))}</h2>
    ${group(segRow('lang', t('lang'), t('lang_d'), [['ru', 'Русский'], ['en', 'English']]) + segRow('theme', t('theme'), t('theme_d'), [['dark', t('theme_dark')], ['light', t('theme_light')], ['system', t('theme_system')]]))}
    ${group(segRow('skin', t('skin'), t('skin_d'), [['glass', t('skin_glass')], ['classic', t('skin_classic')]])
      + (s.skin === 'classic' ? '' : segRow('gwall', t('gwall'), t('gwall_d'), [['ocean', t('gw_ocean')], ['dusk', t('gw_dusk')], ['mint', t('gw_mint')], ['gamer', t('gw_gamer')]]))
      + toggleRow('side_collapsed', t('side_min'), t('side_min_d')))}
    ${group(`<div class="srow"><div><div class="t">${esc(t('accent'))}</div><div class="d">${esc(t('accent_d'))}</div></div><div class="swatches">${ACCENTS.map(c => `<button class="${s.accent === c ? 'on' : ''}" style="background:${c}" data-set="accent" data-val="${c}" aria-label="${c}"></button>`).join('')}<label class="swcustom ${custom ? 'on' : ''}" title="${esc(t('accent_c'))}"><input type="color" id="accent_c" value="${esc(/^#[0-9a-f]{6}$/i.test(s.accent) ? s.accent : '#4f8cff')}"></label></div></div>`
      + segRow('font', t('font'), t('font_d'), [['small', t('font_small')], ['normal', t('font_normal')], ['large', t('font_large')]])
      + toggleRow('compact', t('compact'), t('compact_d')))}
    ${group((s.skin === 'classic' ? segRow('wallpaper', t('wall'), t('wall_d'), [['none', t('wall_none')], ['dots', t('wall_dots')], ['aurora', t('wall_aurora')]]) : '') + toggleRow('lite', t('lite'), t('lite_d')))}`;
  } else if (S.stab === 'notifications') {
    h = `<h2>${esc(t('s_notifications'))}</h2>
    ${group(toggleRow('notifications', t('n_win'), t('n_win_d')) + toggleRow('sound', t('n_sound'), t('n_sound_d')) + toggleRow('preview', t('n_preview'), t('n_preview_d')))}
    ${group(`<div class="srow"><div><div class="t">${esc(t('n_test'))}</div><div class="d">${esc(t('n_test_d'))}</div></div><button class="btn sm ghost" data-act="test-notif">${esc(t('check'))}</button></div>`)}`;
  } else if (S.stab === 'privacy') {
    h = `<h2>${esc(t('s_privacy'))}</h2>
    ${group(toggleRow('show_online', t('p_online'), t('p_online_d')) + toggleRow('read_receipts', t('p_read'), t('p_read_d')))}
    <h3 class="sh">${esc(t('blocked_title'))}</h3>
    ${group((S.blocked || []).length ? S.blocked.map(id => { const bp = S.profs[id] || { id, username: '?' }; return `<div class="srow"><div class="meta" style="display:flex;gap:10px;align-items:center">${avatar(bp, 34)}<div><div class="t">${esc(name(bp))}</div><div class="d">@${esc(bp.username)}</div></div></div><button class="btn sm ghost" data-act="unblock" data-id="${id}">${esc(t('person_unblock'))}</button></div>`; }).join('') : `<div class="srow"><div class="d">${esc(t('list_empty'))}</div></div>`)}`;
  } else if (S.stab === 'chats') {
    h = `<h2>${esc(t('s_chats'))}</h2>
    ${group(toggleRow('enter_send', t('c_enter'), t('c_enter_d')) + toggleRow('time24', t('c_24'), t('c_24_d')))}
    ${group(toggleRow('show_msg_avatars', t('msg_av'), t('msg_av_d')) + toggleRow('anim_avatars', t('anim_av'), t('anim_av_d')))}`;
  } else if (S.stab === 'about') {
    h = `<h2>${esc(t('s_about'))}</h2><div class="aboutbox">${LOGO}<p>${esc(t('about_d'))}</p><p class="d">${esc(t('version'))} ${esc(window.api && window.api.version || '1.3.1')}</p></div>`;
  } else {
    h = `<h2>${esc(t('s_account'))}</h2>
    ${group(`<div class="srow"><div><div class="t">${esc(t('a_login'))}</div><div class="d">@${esc(S.me.username)}</div></div></div>`)}
    <h3 class="sh">${esc(t('a_chpass'))}</h3>
    <div class="sgroup pad"><div class="field"><label>${esc(t('a_new'))}</label><input id="n_pass" type="password" autocomplete="new-password"></div>
    <div class="field"><label>${esc(t('a_new2'))}</label><input id="n_pass2" type="password" autocomplete="new-password"></div>
    <div class="err" id="n_err"></div><button class="btn" data-act="save-pass">${esc(t('a_chpass'))}</button></div>
    <h3 class="sh">${esc(t('enc_title'))}</h3>
    ${group(`<div class="srow"><div><div class="t">${esc(S.priv ? t('enc_on') : t('enc_off'))}</div><div class="d">${esc(S.priv ? t('enc_on_d') : t('enc_off_d'))}</div></div>${S.priv ? '' : `<button class="btn sm" data-act="unlock">${esc(t('unlock_btn'))}</button>`}</div>`
      + (S.priv ? `<div class="srow"><div><div class="t">${esc(t('bk_title'))}</div><div class="d">${esc(S.hasBackup ? t('bk_on') : t('bk_off'))}</div></div>${S.hasBackup ? '' : `<button class="btn sm" data-act="make-backup">${esc(t('bk_make'))}</button>`}</div>` : ''))}
    ${group(`<div class="srow"><div><div class="t">${esc(t('clear_cache'))}</div><div class="d">${esc(t('clear_cache_d'))}</div></div><button class="btn sm ghost" data-act="clear-cache">${esc(t('clear_cache'))}</button></div>`
      + `<div class="srow"><div><div class="t">${esc(t('a_logout'))}</div><div class="d">${esc(t('a_logout_d'))}</div></div><button class="btn danger sm" data-act="logout">${ic('logout', 15)} ${esc(t('a_logout_btn'))}</button></div>`)}`;
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
function clearCache() {
  blobCache.forEach(p => p.then(u => URL.revokeObjectURL(u)).catch(() => {}));
  blobCache.clear();
  toast(t('cache_cleared'));
}
root.addEventListener('click', async e => {
  const pop = $('#emopop');
  if (pop && !pop.hidden && !e.target.closest('#emopop,[data-act="emoji"]')) pop.hidden = true;
  const sm = $('#stmenu');
  if (sm && !e.target.closest('#stmenu,[data-act="toggle-status"]')) sm.remove();
  const el = e.target.closest('[data-nav],[data-chat],[data-stab],[data-toggle],[data-set],[data-act],[data-acc],[data-lang],[data-mode],[data-emo],[data-zoom],[data-profile]');
  if (!el) return;
  const d = el.dataset;
  if (d.emo !== undefined) { insertEmoji(d.emo); return; }
  if (d.zoom) { zoom(d.zoom); return; }
  if (d.profile !== undefined && !d.act) { openProfile(d.profile); return; }
  if (d.lang) { setSetting('lang', d.lang); }
  else if (d.mode) { authMode = d.mode; renderAuth(); }
  else if (d.acc) switchAccount(d.acc);
  else if (d.nav) { S.tab = d.nav; S.sideTab = null; renderRail(); renderSide(); renderMain(); enter(); }
  else if (d.chat) openChat(d.chat);
  else if (d.stab) { S.stab = d.stab; fillSettingsList(); renderMain(); enter(); }
  else if (d.toggle) { el.classList.toggle('on', !S.settings[d.toggle]); setSetting(d.toggle, !S.settings[d.toggle]); } // на месте, чтобы сработала анимация ползунка
  else if (d.set) {
    if (d.set !== 'lang') { const grp = el.parentElement; grp.querySelectorAll('.on').forEach(x => x.classList.remove('on')); el.classList.add('on'); const sc = grp.querySelector('.swcustom'); if (sc) sc.classList.remove('on'); }
    setSetting(d.set, d.val);
  }
  else if (d.act) {
    switch (d.act) {
      case 'message': startDirect(d.id); break;
      case 'block': blockPerson(d.id); break;
      case 'unblock': unblockPerson(d.id); break;
      case 'edit-profile': openEditProfile(); break;
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
      case 'more-msgs': { const box = $('#msgs'), h = box.scrollHeight; S.limit[S.active] = (S.limit[S.active] || 100) + 100; renderMessages(false); box.scrollTop = box.scrollHeight - h; break; }
      case 'new-chat': S.tab = 'chats'; S.sideTab = null; renderRail(); renderSide(); renderMain(); { const f = $('#csearch'); if (f) f.focus(); } break;
      case 'toggle-status': toggleStatusMenu(); break;
      case 'toggle-side': setSetting('side_collapsed', !S.settings.side_collapsed); break;
      case 'chat-more': chatMore(el); break;
      case 'call-audio': startCall(d.id, 'audio'); break;
      case 'call-video': startCall(d.id, 'video'); break;
      case 'mic': case 'cam': case 'screen': callCtl(d.act); break;
      case 'clear-cache': clearCache(); break;
      case 'logout': logout(); break;
      case 'retry': location.reload(); break;
      case 'relogin': try { await sb.auth.signOut({ scope: 'local' }); } catch { /* ignore */ } stop(); renderAuth(); break;
    }
  }
});
root.addEventListener('input', e => {
  if (e.target.id === 'ssearch') { S.ssearch = e.target.value; fillSettingsList(); const i = $('#ssearch'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
  if (e.target.id === 'csearch') { S.csearch = e.target.value; fillChats(); searchPeople(); }
  if (e.target.id === 'accent_c') document.documentElement.style.setProperty('--accent', e.target.value);
});
root.addEventListener('change', e => { if (e.target.id === 'accent_c') setSetting('accent', e.target.value); });
window.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const lb = $('.lightbox'); if (lb) { lb.remove(); return; }
  const m = $('.modal.closable'); if (m) { m.remove(); return; }
  const sm = $('#stmenu'); if (sm) sm.remove();
  const p = $('#emopop'); if (p) p.hidden = true;
});
window.addEventListener('focus', () => { if (S.me && S.tab === 'chats' && S.active) markRead(S.active); });
let errAt = 0;
const softError = msg => { if (Date.now() - errAt > 4000) { errAt = Date.now(); console.error(msg); } };
window.addEventListener('unhandledrejection', e => softError(e.reason));
window.addEventListener('error', e => { if (!(e.target && e.target.tagName)) softError(e.message); });

// ================= старт =================
function showSlow(msg) {
  root.innerHTML = `<div class="splash"><div class="authlogo">${LOGO}</div><p class="sub">${esc(msg || t('slow_text'))}</p><div class="center"><button class="btn" data-act="retry">${esc(t('retry'))}</button><button class="btn ghost" data-act="relogin">${esc(t('relogin'))}</button></div></div>`;
}
loadLocalSettings();
applySettings();
// если за 12 секунд ничего не открылось, вместо чёрного экрана предлагаем повторить или войти заново
setTimeout(() => { if (!S.me && root.querySelector('.splash .spin')) showSlow(); }, 12000);
sb.auth.onAuthStateChange((ev, session) => {
  if (session && remember()) upsertAccount({ id: session.user.id, refresh_token: session.refresh_token });
  if (ev === 'SIGNED_OUT') {
    if (S.switching) return;
    stop(); renderAuth();
    return;
  }
  if (!session || S.me || S.starting) return;
  if (S.addingAccount && ev !== 'SIGNED_IN') return; // пока вводим другой аккаунт, старая сессия не должна открыться сама
  if (!sessionAllowed()) { setTimeout(() => sb.auth.signOut({ scope: 'local' }), 0); return; } // «Запомнить меня» выключено
  S.starting = true;
  setTimeout(async () => { try { await start(session); } finally { S.starting = false; } }, 0);
});
sb.auth.getSession().then(({ data }) => { if (!data.session && !S.me && !S.addingAccount) renderAuth(); }).catch(() => { if (!S.me) showSlow(); });
})();
