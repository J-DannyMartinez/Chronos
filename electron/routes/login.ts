import { ipcMain } from 'electron';

/**
*
* @event    loginRequest 
* @desc     Checks with the login database to verify if the user-submitted login information
*           is valid
*
**/

ipcMain.on('loginRequest', async (message: Electron.IpcMainEvent, index: number) => {
  
})