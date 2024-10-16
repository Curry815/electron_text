const remote = require('@electron/remote');
const Menu = remote.Menu;

// 创建菜单模板
var menuContextTemplate = [
  {
    label: '复制',
    role: 'copy',
    click: () => {
      console.log('复制');
    }
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
      console.log('其他功能');
    }
  },
  {
    label: '文件',
    submenu: [
      {
        label: '新建',
        accelerator: 'ctrl+n', // 快捷键
        click: () => {
          console.log('Ctrl+N');
        }
      },
      {
        label: '打开',
        accelerator: 'ctrl+o', // 快捷键
        click: () => {
          console.log('Ctrl+O');
        }
      },
      {
        type: 'separator', // 分割符
      },
      {
        label: '保存',
      }
    ],
  },
];

var menuContextBuilder = Menu.buildFromTemplate(menuContextTemplate);

window.onload = () => {
  window.addEventListener('contextmenu', (e) => {
    // console.log('鼠标右键被点击了');
    e.preventDefault();
    menuContextBuilder.popup({
      window: remote.getCurrentWindow() // 绑定当前窗口
    });
  }, false)
}