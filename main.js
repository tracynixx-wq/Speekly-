const { app, BrowserWindow, ipcMain, shell, Menu } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

if (!app.requestSingleInstanceLock()) app.quit();
app.setAppUserModelId('com.speekly.desktop');

let win;
let updateCheckTimer;

function configureAutoUpdates() {
  if (!app.isPackaged) return;

  // Updates are downloaded to the application's private updater cache,
  // never to the user's Downloads folder. Installation is deferred until exit.
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.allowDowngrade = false;

  autoUpdater.on('error', (error) => {
    console.error('[Speekly updater]', error?.message || error);
  });

  autoUpdater.on('update-available', (info) => {
    console.info('[Speekly updater] Update available:', info.version);
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.info('[Speekly updater] Update downloaded; it will install after Speekly closes:', info.version);
  });

  const check = () => autoUpdater.checkForUpdates().catch((error) => {
    console.error('[Speekly updater] Check failed:', error?.message || error);
  });

  // Do not delay startup. Check once after launch, then every four hours.
  setTimeout(check, 15000);
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
