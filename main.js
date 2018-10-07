const { app, BrowserWindow } = require('electron')

let win
function createWindow () {
    win = new BrowserWindow({ width: 800, height: 600 })

    const path = __dirname.toString() + '\\' + 'index.html'; // por algum motivo para o windows ele pega o index.html default do electron, não o do projeto
    win.loadFile(path)

    // win.webContents.openDevTools() // Abre f12 do chrome

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})