# electron_text
一个简单的Electron桌面软件开发的demo

## 项目结构
```
├── README.md
├── main.js 主进程
├── preload.js 预加载桥梁且运行在渲染进程之前
├── package.json
└── renderer 渲染进程  
    ├── index.js
    └── index.html
```

## 项目说明
- main.js：主进程文件，用于创建窗口、加载页面等
- package.json：项目配置文件，包含项目名称、版本、依赖等
