const { app, BrowserWindow, protocol } = require("electron");
const url = require("url");
const path = require("path");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.

  if (true) {
    mainWindow = new BrowserWindow({
      webPreferences: { webSecurity: false },
      fullscreen: true,
      frame: false
    });
  } else {
    mainWindow = new BrowserWindow({
      webPreferences: { webSecurity: false },
      fullscreen: true,
      frame: false
    });
  }
  /*
  protocol.interceptFileProtocol(
    "file",
    function(req, callback) {
      var url = req.url.substr(7);
      callback({ path: path.normalize(__dirname + url) });
    },
    function(error) {
      if (error) console.error("Failed to register protocol");
    }
  );
  */
  if (true) {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "../build/index.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }

  // Open the DevTools.

  console.log("creatingWindow", app.getAppPath());

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
