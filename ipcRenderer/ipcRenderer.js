const { ipcRenderer } = require('electron');


window.onload = () => {
  var sendMsgDom = document.querySelector('#sendMsg');
  sendMsgDom.onclick = () => {
    // 渲染进程给主进程发送消息
    ipcRenderer.send('sendMsg', 'hello world');
  };

  // 渲染进程给主进程发送消息，并接收主进程的回复
  var sendMsgReplayDom = document.querySelector('#sendMsgReplay');
  sendMsgReplayDom.onclick = () => {
    ipcRenderer.send('sendMsgReplay', 'hello world - sendMsgReplay');
  };

  // 监听主进程的广播
  ipcRenderer.on('replayRenderer', (e, data) => {
    console.log(data);
  });

  // 渲染进程给主进程发送同步消息
  var sendMsgSyncDom = document.querySelector('#sendMsgSync');
  sendMsgSyncDom.onclick = () => {
    var replay = ipcRenderer.sendSync('sendMsgReplaySync', 'hello world - sendMsgReplaySync');
    console.log(replay);
  };

  // 监听主进程主动发送过来的消息
  ipcRenderer.on('rendererMsg', (e, data) => {
    console.log(data);
  });

  // 右键菜单
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    // 弹出右键菜单 menuBuilder.popup({ window: remote.getCurrentWindow() });
    ipcRenderer.send('showContextMenu');
  }, false);
}