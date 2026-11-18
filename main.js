const { app, BrowserWindow, ipcMain, shell, Menu, dialog, session, desktopCapturer } = require('electron');
const path = require('path');
const fs = require('fs');
const { autoUpdater } = require('electron-updater');

if (!app.requestSingleInstanceLock()) app.quit();
app.setAppUserModelId('com.speekly.desktop');

// Improve rendering on supported Windows graphics drivers.
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-zero-copy');

let win;
let updateCheckTimer;
let updateCheckStarted = false;
let updateCheckInProgress = false;
let updatePromptOpen = false;
let downloadedUpdateInfo = null;
const declinedVersions = new Set();

function writeUpdaterLog(message) {
  try {
    const logPath = path.join(app.getPath('userData'), 'updater.log');
    fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${message}\n`, 'utf8');
  } catch (error) {
    console.error('[Speekly updater] Could not write updater log:', error);
  }
}

async function showUpdateDialog(options) {
  const parent = win && !win.isDestroyed() ? win : undefined;
  if (parent) return dialog.showMessageBox(parent, options);
  return dialog.showMessageBox(options);
}

async function askToDownloadUpdate(info) {
  if (updatePromptOpen || declinedVersions.has(info.version)) return;
  updatePromptOpen = true;
  try {
    const result = await showUpdateDialog({
      type: 'info',
      title: 'Доступно обновление Speekly',
      message: `Доступна новая версия Speekly — ${info.version}.`,
      detail: 'Скачать обновление сейчас? Приложение продолжит работать во время загрузки. Вы можете отказаться и остаться на текущей версии.',
      buttons: ['Скачать обновление', 'Позже'],
      defaultId: 1,
      cancelId: 1,
      noLink: true
    });
    if (result.response === 0) {
      writeUpdaterLog(`User accepted download of version ${info.version}.`);
      autoUpdater.downloadUpdate().catch((error) => {
        writeUpdaterLog(`Download request failed: ${error?.stack || error?.message || error}`);
      });
    } else {
      declinedVersions.add(info.version);
      writeUpdaterLog(`User postponed version ${info.version}; current app remains active.`);
    }
  } finally {
    updatePromptOpen = false;
  }
}

async function askToInstallUpdate(info) {
  if (updatePromptOpen) return;
  updatePromptOpen = true;
  try {
    const result = await showUpdateDialog({
      type: 'info',
      title: 'Обновление Speekly загружено',
      message: `Версия ${info.version} готова к установке.`,
      detail: 'Установить обновление и перезапустить Speekly сейчас? Если выбрать «Позже», приложение продолжит работать на текущей версии.',
      buttons: ['Установить и перезапустить', 'Позже'],
      defaultId: 1,
      cancelId: 1,
      noLink: true
    });
    if (result.response === 0) {
      writeUpdaterLog(`User accepted installation of version ${info.version}.`);
      autoUpdater.quitAndInstall(false, true);
    } else {
      writeUpdaterLog(`User postponed installation of version ${info.version}.`);
    }
  } finally {
    updatePromptOpen = false;
  }
}

function configureAutoUpdates() {
  if (!app.isPackaged || updateCheckStarted) return;
  updateCheckStarted = true;

  autoUpdater.setFeedURL({
    provider: 'github',
    owner: 'tracynixx-wq',
    repo: 'Speekly-'
  });

  // Never download or install without the user's explicit choice.
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = false;
  autoUpdater.allowDowngrade = false;
  autoUpdater.allowPrerelease = false;

  autoUpdater.on('checking-for-update', () => {
    writeUpdaterLog('Checking GitHub Releases for updates.');
  });

  autoUpdater.on('update-not-available', (info) => {
    writeUpdaterLog(`No update available. Installed version: ${app.getVersion()}; latest checked version: ${info?.version || 'unknown'}.`);
  });

  autoUpdater.on('update-available', (info) => {
    writeUpdaterLog(`Update available: ${info.version}. Waiting for user's download decision.`);
    askToDownloadUpdate(info).catch((error) => {
      writeUpdaterLog(`Download prompt failed: ${error?.stack || error?.message || error}`);
    });
  });

  autoUpdater.on('download-progress', (progress) => {
    writeUpdaterLog(`Download progress: ${Math.round(progress.percent || 0)}%.`);
  });

  autoUpdater.on('update-downloaded', (info) => {
    downloadedUpdateInfo = info;
    writeUpdaterLog(`Update ${info.version} downloaded. Waiting for user's installation decision.`);
    askToInstallUpdate(info).catch((error) => {
      writeUpdaterLog(`Install prompt failed: ${error?.stack || error?.message || error}`);
    });
  });

  autoUpdater.on('error', (error) => {
    writeUpdaterLog(`Updater error: ${error?.stack || error?.message || error}`);
  });

  const check = () => {
    if (!app.isReady() || updateCheckInProgress) return;
    updateCheckInProgress = true;
    writeUpdaterLog(`Starting update check. Current version: ${app.getVersion()}.`);
    autoUpdater.checkForUpdates()
      .catch((error) => {
        writeUpdaterLog(`Update check rejected: ${error?.stack || error?.message || error}`);
      })
      .finally(() => {
        updateCheckInProgress = false;
      });
  };

  setTimeout(check, 10000);
  updateCheckTimer = setInterval(check, 4 * 60 * 60 * 1000);
}

function createWindow() {
  win = new BrowserWindow({
    width: 1150,
    height: 740,
    minWidth: 820,
    minHeight: 540,
    backgroundColor: '#0a2a9a',
    autoHideMenuBar: true,
    title: 'Speekly',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      backgroundThrottling: false
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
  // Provide the screen source requested by the in-app WebRTC screen-sharing flow.
  session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {
    desktopCapturer.getSources({ types: ['screen'] }).then((sources) => {
      if (sources && sources.length) callback({ video: sources[0] });
      else callback({});
    }).catch(() => callback({}));
  });
  createWindow();
  configureAutoUpdates();
});

app.on('before-quit', () => {
  if (updateCheckTimer) clearInterval(updateCheckTimer);
});
app.on('window-all-closed', () => app.quit());

ipcMain.on('app-version', (event) => { event.returnValue = app.getVersion(); });

ipcMain.on('focus-window', () => {
  if (!win) return;
  if (win.isMinimized()) win.restore();
  win.show();
  win.focus();
});
