const { ipcMain } = require('electron');

// 接受渲染进程的通知
ipcMain.on('sendMsg', (e, data) => {  
  console.log(data);
})

// 主进程接收到异步消息以后通知渲染进程
ipcMain.on('sendMsgReplay', (e, data) => {  
  console.log(data);
  e.sender.send('replayRenderer', '主进程收到异步消息了');
})

// 主进程接收到同步消息
ipcMain.on('sendMsgReplaySync', (e, data) => {  
  console.log(data);
  e.returnValue = '我是主进程，主进程收到同步消息了';
})

