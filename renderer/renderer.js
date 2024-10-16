const fs = require('fs');

// // 渲染进程中第二种使用nodejs方法，这个文件会被引入到index.html
// fs.readFile('package.json', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }        
//   console.log('@@renderer', data.toString()); // 打印文件内容
// });

window.onload = () => {
  let openFileBtn = document.getElementById('openFile');
  let contentDom = document.getElementById('content');
  openFileBtn.onclick = () => {
    // 读取文件内容
    fs.readFile('package.json', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      contentDom.innerHTML = data.toString(); // 打印文件内容
    });
  }
}