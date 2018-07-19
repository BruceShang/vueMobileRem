# nisu

> nisu 移动端项目

## 命令

``` bash
# 安装依赖包
npm install

# 启动服务
npm run dev

# 打包文件
npm run build

# 为生产环境打包文件，并查看包分析器报告
npm run build --report

```
## 目录结构说明

```js
.
├── .babelrc            // Babel配置
├── .editorconfig       // 编辑器配置
├── .eslintignore       // ESLint忽略配置
├── .eslintrc.js        // eslint配置
├── .gitignore          // git忽略配置
├── .postcssrc.js       // postcss 插件配置
├── build               // webpack 构建目录
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json        // package
├── src
│   ├── api
│   │   └── index.js    // 接口存放
│   ├── assets          // 资源文件夹
│   │   ├── images      // 图片存放
│   │   └── stylus      // stylus样式
│   ├── components      // 组件文件夹
│   │   └── topbar      // topbar 组件
│   ├── directives      // vue.js 指令
│   │   └── index.js
│   ├── filters         // vue.js 过滤器
│   │   ├── filters.js
│   │   └── index.js
│   ├── index.js
│   ├── main.js         // 入口文件
│   ├── mixins          // vue.js 混合
│   ├── plugins         // vue.js 插件
│   │   ├── axios.js
│   │   ├── index.js
│   │   └── loading
│   ├── router          // vue.js 路由
│   │   ├── index.js
│   │   └── routes
│   ├── store           // vue.js vuex配置
│   │   ├── index.js
│   │   └── modules
│   ├── utils           // 工具类函数
│   │   ├── local-storage.js    // localStorage 封装文件
│   │   ├── responsive.js       // 响应配置
│   │   ├── scale.js
│   │   └── session-storage.js  // 封装sessionStorage
│── └── views // vue 页面

```

[guide](http://vuejs-templates.github.io/webpack/)

[docs for vue-loader](http://vuejs.github.io/vue-loader).
