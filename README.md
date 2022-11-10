## 简介

[开放应用平台] 是一个基于 Vue3、Vite2、Javascript、Element Plus、Pinia 和 UnoCSS 的中后台项目

## 安装使用

- 环境配置
  **本地环境需要安装 pnpm 7.x 、Node.js 14.18+ 和 Git**

- 克隆代码

```bash
git clone
```

- 安装依赖

```bash
pnpm i
```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## 浏览器支持

本地开发推荐使用`Chrome 90+` 浏览器

支持现代浏览器, 不支持 IE

```
├── .vscode                  //vscode插件和设置
│   ├── extensions.json      //vscode推荐的插件
│   └── settings.json        //vscode配置(在该项目中生效，可以复制到用户配置文件中)
├─ public                    //公共目录(文件夹里面的资源打包后会在根目录下)
├─ src
│  ├─ api
│  ├─ assets                 //静态资源
│  ├─ components             //全局组件
│  ├─ layouts                //布局组件
│  ├─ router                 //vue路由
│  ├─ store                  //pinia状态管理
│  ├─ styles                 //全局样式
│  │  ├─ index.scss
│  │  ├─ theme.scss
│  │  └─ transition.scss
│  ├─ utils                  //相关工具函数
│  ├─ views                  //页面
│  ├─ App.vue                //vue文件入口
│  └─ main.js                //项目入口文件
├── .editorconfig            //统一编辑器配置
├── .env.development         //开发环境文件
├── .env.production          //生产环境文件
├── .env.staging           	 //测试环境文件
├── .eslintignore            //忽略eslint检查的配置文件
├── .eslintrc.js             //eslint配置文件
├── .gitignore               //忽略git提交的配置文件
├── .prettierrc              //prettier代码格式插件配置
├─ README.md                 //项目介绍文档
├─ index.html
├─ jsconfig.json          	 //js配置
├─ package.json              //npm依赖描述文件
├─ unocss.config.js          //原子css框架unocss配置
└─ vite.config.js            //vite配置
```
