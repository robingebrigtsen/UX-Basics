var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var win;


function createWindow(){ 
    
    win = new BrowserWindow({
        width: 1280,
        height: 850,
        minWidth: 1000,
        minHeight: 700,
    })

    
    win.loadURL('file://'+ __dirname +'/www/index.html');
    
    win.on('closed', quitApp);
}


function quitApp(){
    app.quit();
}

app.on('ready', createWindow);