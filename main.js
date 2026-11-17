const { app, BrowserWindow, ipcMain, shell, Menu, Notification } = require('electron');
const path = require('path');
const fs = require('fs');
const { autoUpdater } = require('electron-updater');

if (!app.requestSingleInstanceLock()) app.quit();
app.setAppUserModelId('com.speekly.desktop');

let win;
let updateCheckTimer;
let updateCheckStarted = false;
let lastUpdaterErrorNotice = 0;

function writeUpdaterLog(message) {
  try {
    const logPath = path.join(app.getPath('userData'), 'updater.log');
    fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${message}\n`, 'utf8');
  } catch (error) {
    console.error('[Speekly updater] Could not write updater log:', error);
  }
}

function notify(title, body) {
  try {
    if (Notification.isSupported()) new Notification({ title, body }).show();
  } catch (error) {
    writeUpdaterLog(`Notification failed: ${error?.message || error}`);
  }
}

function configureAutoUpdates() {
  if (!app.isPackaged || updateCheckStarted) return;
  updateCheckStarted = true;

  // Explicitly bind the updater to the public GitHub Releases feed.
  // This avoids depending on a missing or stale generated feed setting.
  autoUpdater.setFeedURL({
    provider: 'github',
    owner: 'tracynixx-wq',
    repo: 'Speekly-'
  });

  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.allowDowngrade = false;
  autoUpdater.allowPrerelease = false;

  autoUpdater.on('checking-for-update', () => {
    writeUpdaterLog('Checking GitHub Releases for updates.');
  });

  autoUpdater.on('update-not-available', (info) => {
    writeUpdaterLog(`No update available. Installed version: ${app.getVersion()}; latest checked version: ${info?.version || 'unknown'}.`);
  });

  autoUpdater.on('update-available', (info) => {
    writeUpdaterLog(`Update available: ${info.version}. Download started.`);
    notify('Speekly', `Доступно обновление ${info.version}. Загружаем в фоне.`);
  });

  autoUpdater.on('download-progress', (progress) => {
    writeUpdaterLog(`Download progress: ${Math.round(progress.percent || 0)}%.`);
  });

  autoUpdater.on('update-downloaded', (info) => {
    writeUpdaterLog(`Update ${info.version} downloaded. It will install after the app closes.`);
    notify('Speekly', `Обновление ${info.version} загружено и установится после закрытия Speekly.`);
  });

  autoUpdater.on('error', (error) => {
    const message = error?.stack || error?.message || String(error);
    writeUpdaterLog(`Updater error: ${message}`);
    const now = Date.now();
    if (now - lastUpdaterErrorNotice > 30 * 60 * 1000) {
      lastUpdaterErrorNotice = now;
      notify('Speekly — ошибка обновления', 'Не удалось проверить или загрузить обновление. Подробности сохранены в updater.log.');
    }
  });

  const check = () => {
    if (!app.isReady()) return;
    writeUpdaterLog(`Starting update check. Current version: ${app.getVersion()}.`);
    autoUpdater.checkForUpdates().catch((error) => {
      writeUpdaterLog(`Update check rejected: ${error?.stack || error?.message || error}`);
    });
  };

  // Check shortly after startup, then periodically while the app is running.
  setTimeout(check, 10000);
  updateCheckTimer = setInterval(check, 4 * 60 * 60 * 1000);
}

function createWindow() {
  win = new BrowserWindow({
    width: 1150,
    height: 740,
    minWidth: 820,
    minHeight: 540,
    backgroundColor: '#16151a',
    autoHideMenuBar: true,
    title: 'Speekly',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F12') win.webContents.toggleDevTools();
  });
}

app.on('second-instance', () => {
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.whenReady().then(() => {
  createWindow();
  configureAutoUpdates();
});

app.on('before-quit', () => {
  if (updateCheckTimer) clearInterval(updateCheckTimer);
});
app.on('window-all-closed', () => app.quit());

ipcMain.on('focus-window', () => {
  if (!win) return;
  if (win.isMinimized()) win.restore();
  win.show();
  win.focus();
});
