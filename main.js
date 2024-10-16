/*
 main.js运⾏在应⽤的主进程上，⽆法访问Web相关API，主要负责：控制⽣命周期、显示界⾯、
控制渲染进程等其他操作。
*/
const { app, BrowserWindow } = require('electron');
const path = require('path');
// 1.引入初始化remote模块
const remote = require('@electron/remote/main');
remote.initialize();

// ⽤于创建窗⼝
function createWindow() {
  const mainWin = new BrowserWindow({
    width: 800, // 窗⼝宽度
    height: 600, // 窗⼝⾼度
    webPreferences: {
      // sandbox: false, // 禁⽤沙箱模式，默认为true，如果想要预加载脚本，需要设置为false
      // preload: path.join(__dirname, 'renderer/preload.js'), // 预加载脚本
      nodeIntegration: true, // 允许渲染进程访问Nodejs API
      contextIsolation: false // 允许渲染进程访问Nodejs API
    }
  });

  // 加载本地目录的index.html文件
  mainWin.loadFile(path.join(__dirname, 'index.html'));
  // 加载⼀个远程⻚⾯
  // mainWin.loadURL('http://www.baidu.com');

  // 打开开发者工具
  mainWin.webContents.openDevTools(); 

  // 2.启用remote模块
  remote.enable(mainWin.webContents);

  // 自定义顶部菜单
  require('./ipcMain/ipcMain');
  require('./ipcMain/menu');
  require('./ipcMain/contextMain');
}

// 当app准备好后，执⾏createWindow创建窗⼝
app.on('ready',()=>{
  createWindow();

  // 当应⽤被激活时
  app.on('activate', () => {
    //如果当前应⽤没有窗⼝，则创建⼀个新的窗⼝
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
});

// 监听所有窗口关闭的事件
app.on('window-all-closed', () => {
  // 如果所处平台不是mac(darwin)，则退出应⽤。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});