const electron = require('electron')

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({width: 1200, height: 800, 
        webPreferences: {   
        nodeIntegration: true,
        contextIsolation: false
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.loadFile('index.html')
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(mainWindow === null) {
            createWindow()
        }
    })
})