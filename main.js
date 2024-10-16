/*
 main.js运⾏在应⽤的主进程上，⽆法访问Web相关API，主要负责：控制⽣命周期、显示界⾯、
控制渲染进程等其他操作。
*/
const { app, BrowserWindow } = require('electron');
const path = require('path');

// ⽤于创建窗⼝
function createWindow() {
  const mainWin = new BrowserWindow({
    width: 800, // 窗⼝宽度
    height: 600, // 窗⼝⾼度
    autoHideMenuBar: true, // ⾃动隐藏菜单栏
    alwaysOnTop: true, // 置顶
    x: 0, // 窗⼝位置x坐标
    y: 0 // 窗⼝位置y坐标
  })

  // 加载本地目录的index.html文件
  mainWin.loadFile(path.join(__dirname, 'index.html'))

  // 加载⼀个远程⻚⾯
  // mainWin.loadURL('http://www.baidu.com')
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