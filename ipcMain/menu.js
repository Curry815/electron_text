const { Menu } = require('electron');

// 创建菜单模板
var menuTemplate = [
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
  {
    label: '编辑',
    submenu: [
      {
        label: '复制',
        // accelerator: 'ctrl+c', // 快捷键，这里没效果原因可能是触发系统快捷键了
        role: 'copy', // 角色属性 编辑时使用角色属性，而不是快捷键
      },
      {
        label: '粘贴',
        role: 'paste',
      },
    ],
  },
];

var menuBuilder = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menuBuilder);