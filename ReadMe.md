## 封小胖的 React 学习之路

### 依赖

* Node环境 (V6.3.0)

* react

* babel

* webpack

### 文件结构文明

- demo
  - index.html

- dist
  - js
    - bundle.js

- src
  - index.js

- .gitignore

- package.json

- webpack.config.js

### 操作方法

#### 开发

* 在 **windows cmd** 或 **Git Bush** 中输入 `npm install`

* 继续输入 `npm run start` (实际执行的是 `webpack-dev-server --hot --progress --colors` )

* 打开网页 **localhost:8080/demo/**

* 修改 **src/index.js** 中的 **ES6** 语法源码，会热部署到网页中，不需要刷新网页

#### 生产

* 需要生成 **dist/js** 下的文件时，在命令行中使用 `webpack`命令

### 修改记录

#### 2016.09.05

* 添加ReadMe.md说明

* 在 **src/index.js** 中编写了一个简单按钮，并能动态的修改按钮文字颜色
