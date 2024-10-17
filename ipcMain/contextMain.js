const { Menu, ipcMain, BrowserWindow } = require('electron');

// 创建菜单模板
var contextTemplate = [
  {
    label: '复制',
    role: 'copy',
  },
  {
    label: '粘贴',
    role: 'paste',
  },
  {
    type: 'separator',
  },
  {
    label: '其他功能',
    click: () => {
      console.log('click');
      
    }
  },
];

var menuBuilder = Menu.buildFromTemplate(contextTemplate);

ipcMain.on('showContextMenu', () => {
  // 渲染进程中获取当前窗口的方法，remote.getCurrentWindow()
  // 主进程中获取当前窗口的方法，BrowserWindow.getFocusedWindow()
  menuBuilder.popup({window: BrowserWindow.getFocusedWindow()});
})