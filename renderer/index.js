/* 实现H5的API拖拽功能
  释放目标时触发的事件:
  ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
  ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
  ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件
  ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
*/
// const fs = require('fs');

// window.onload = () => {
//   var contentDom = document.querySelector('#content');

//   // 阻止默认行为
//   contentDom.ondragenter = contentDom.ondragover = contentDom.ondragleave = function () {
//     return false;
//   }

//   contentDom.ondrop = (e) => {
//     var pathUrl = e.dataTransfer.files[0].path;
//     fs.readFile(pathUrl, 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err);
//         return false;
//       }
//       contentDom.innerHTML = data;
//     })
//   }
// }

/**
 * 实现渲染进程使用remote方法调用主进程方法
 */
const { BrowserWindow } = require('@electron/remote');
const path = require('path');

window.onload = () => {
  var btnDom = document.querySelector('#btn');
  btnDom.onclick = () => {
    const secondWin = new BrowserWindow({
      width: 800, // 窗⼝宽度
      height: 600, // 窗⼝⾼度
      webPreferences: {
        nodeIntegration: true, // 允许渲染进程访问Nodejs API
        contextIsolation: false // 允许渲染进程访问Nodejs API
      }
    });
    secondWin.loadFile(path.join(__dirname, 'second.html'));
  }
}