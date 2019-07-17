const {BrowserWindow, Menu, app, shell, dialog, dialog2} = require('electron')


//App Info
const label = 'SMO Moon Randomizer'
const build = '2019.04.18'
const version = app.getVersion()
const title = "SMO Moon Randomizer v2.1.0-dev"

//Dialog Settings
const dialogOptions = {
    type: 'info',
    buttons: ['Close'],
    title: 'Changelog',
    message: 'Changes in Version 2.1.0',
    detail: '- Fixed issue where pasteing seeds would hang the randomizer to only using that seed. (If you are still having issues, try hitting the Reset Randomizer button)\n- Added World Peace Moon List for future update.\n- Dropped support for the web-based randomizer. Going forward the web-based version will be a read-only version (Planned for completion with v2.1.1 Currently the web version will be using v2.0.0/2.0.1)\n- Changed seeding method to a shorter and cleaner version.\n- Changed Method for Version Checking (Now there will be unquestionable version checking going forward.)\n\nPlease Note: Seeds generated in 2.1.0 will not be compatible with past versions due to the changes in seeding methods.',
  };

//Application Menu
let template = [{
  label: 'View',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        // on reload, start fresh and close any old
        // open secondary windows
        if (focusedWindow.id === 1) {
          BrowserWindow.getAllWindows().forEach(win => {
            if (win.id > 1) win.close()
          })
        }
        focusedWindow.reload()
      }
    }
  /*}, {
    label: 'Toggle DevTools',
    role: 'toggledevtools',*/
  }, {
    label: 'Toggle Full Screen',
    accelerator: (() => {
      if (process.platform === 'darwin') {
        return 'Ctrl+Command+F'
      } else {
        return 'F11'
      }
    })(),
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }, {
    type: 'separator'
  }]
}, {
  label: 'Window',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: 'Close',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }, {
    type: 'separator'
  }]
}, {
  label: 'About',
  role: 'about',
  submenu: [{
    label: label,
    enabled: false,
    },{
    label: 'Version ' + version,
    enabled: false,
    },{
    label: 'Build: ' + build,
    enabled: false,
    },{
    label: 'Author: ' + 'Tom "RampantEpsilon" Ware',
    enabled: false,
    },{
    label: 'Changelog',
    enabled: true,
    click(){
      dialog.showMessageBox(null, dialogOptions, (response, checkboxChecked) => {
      });
    },
    }]
}]

function addUpdateMenuItems (items, position) {
  if (process.mas) return

  const version = app.getVersion()
  let updateItems = [/*{
    label: `Version ${version}`,
    enabled: false
  }, {
    label: 'Checking for Update',
    enabled: false,
    key: 'checkingForUpdate'
  }, {
    label: 'Check for Update',
    visible: false,
    key: 'checkForUpdate',
    click: () => {
      require('electron').autoUpdater.checkForUpdates()
    }
  }, {
    label: 'Restart and Install Update',
    enabled: true,
    visible: false,
    key: 'restartToUpdate',
    click: () => {
      require('electron').autoUpdater.quitAndInstall()
    }
  }*/]

  items.splice.apply(items, [position, 0].concat(updateItems))
}

function findReopenMenuItem () {
  const menu = Menu.getApplicationMenu()
  if (!menu) return

  let reopenMenuItem
  menu.items.forEach(item => {
    if (item.submenu) {
      item.submenu.items.forEach(item => {
        if (item.key === 'reopenMenuItem') {
          reopenMenuItem = item
        }
      })
    }
  })
  return reopenMenuItem
}

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [{
      label: `About ${name}`,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: `Hide ${name}`,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: 'Show All',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: () => {
        app.quit()
      }
    }]
  })

  // Window menu.
  template[3].submenu.push({
    type: 'separator'
  }, {
    label: 'Bring All to Front',
    role: 'front'
  })

  addUpdateMenuItems(template[0].submenu, 1)
}

if (process.platform === 'win32') {
  const helpMenu = template[template.length - 1].submenu
  addUpdateMenuItems(helpMenu, 3)
}

app.on('ready', () => {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(null)
  //Menu.setApplicationMenu(menu)
})

app.on('browser-window-created', () => {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = false
})

app.on('window-all-closed', () => {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = true
})


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 840,
    height: 740,
    icon: __dirname + '/logo.jpg',
    title: title,
    webPreferences: {
      nativeWindowOpen: true
    }
  })
  mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    if (frameName === 'modal') {
      // open window as modal
      event.preventDefault()
      Object.assign(options, {
        modal: true,
        parent: mainWindow,
        width: 840,
        height: 740
      })
      event.newGuest = new BrowserWindow(options)
    }
    else if (frameName === 'twitter') {
      event.preventDefault()
      Object.assign(options, {
        modal: false,
        parent: mainWindow,
        width: 200,
        height: 720
      })
    }
  })
  // Create the browser window.
  //win = new BrowserWindow({ width: 1280, height: 720, icon: __dirname + '/tgsn.png' })

  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  //Add menu to top window only
  const menu = Menu.buildFromTemplate(template)
  mainWindow.setMenu(menu)

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    //win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



//Dialog Box
/*const {ipcMain, dialog} = require('electron')

ipcMain.on('open-information-dialog', (event) => {
  const options = {
    type: 'info',
    title: 'Information',
    message: 'messageText',
    buttons: ['Yes', 'No']
  }
  dialog.showMessageBox(options, (index) => {
    event.sender.send('information-dialog-selection', index)
  })
})
*/
