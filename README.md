# Vue 3 + TypeScript + Vite + Element Plus

下文整体介绍了项目的目录结构，技术栈， 以及搭建一个前端项目应该考虑的一些事情

## 目录结构

```
├── public
│   ├── favicon.ico
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── router
│   ├── stores
│   ├── types
│   ├── views
│   ├── App.vue
│   └── main.js
├── index.html
├── README.md
├── tsconfig.json
├── vite.config.ts
└── package.json
```

- public  目录用于存放静态文件，图片等。

- src 用于存放源代码

- assets  目录用于存放静态资源，例如图片、字体、JS、CSS等。

- components 目录用于存放组件。

- hooks 独立的逻辑

- router 存放路由文件

- stores 全局的状态管理

- types 全局的类型管理文件，组件内部自用的类型自己在组件内部文件夹内封装

- App.vue 应用程序的根文件

- main.js  App实例的创建文件

- index.html 项目的入口文件

- tsconfig.json typescript配置文件

- vite.config.ts vite配置文件

- README.md 说明文件

  

  [Vue中public/assets目录区别](https://blog.csdn.net/m0_69497411/article/details/138285400)

## UI 设计: Element Plus

## 状态管理：pinia

## 路由管理： vue-router

## 请求管理：axios

## 开发风格约定：

### 	Typescript

### 	ESlint

###   别名@

### 	自动导包 unplugin-auto-import

​	[Vue3+Vite项目按需自动导入配置以及一些常见问题](https://www.jb51.net/article/274694.htm)

## 整体布局

## 后端请求接口



















