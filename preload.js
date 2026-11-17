const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  focus: () => ipcRenderer.send('focus-window')
});
