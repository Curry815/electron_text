const fs = require('fs');

// 渲染进程中第一种使用nodejs方法
fs.readFile('package.json', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }        
  console.log('@@preload', data.toString()); // 打印文件内容
});