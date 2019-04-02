## 项目简介

基于 vue.js 的前端开发环境，用于前后端分离后的单页应用开发，可以在开发时使用 ES Next、scss 等最新语言特性。项目包含：

- 基础库: `vue.js`、`vue-router`、`vuex`、`whatwg-fetch`
- 编译/打包工具：`webpack`、`babel`、`node-sass`
- 单元测试工具：`jest`
- 本地服务器：`webpack-dev-server`


## 目录结构

    ├── README.md                       项目介绍
    ├── index.html                      入口页面
    ├── build                           构建脚本目录
    │   ├── build.js                        生产环境构建脚本
    │   ├── check-versions.js               vue-cli中检查版本的js文件
    │   ├── dev-server.js                   运行本地开发服务器
    │   ├── utils.js                        构建相关工具方法
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── mock                            mock数据目录
    │   └── ...
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             源码目录
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── components                      公共组件目录
    │   │   └── ...
    │   ├── assets                          资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── routes                          前端路由
    │   │   └── index.js
    │   ├── store                           应用级数据（state）
    │   │   └── index.js
    │   └── views                           页面目录
    │       ├── hello.vue
    │       └── 404.vue
    ├── static                          纯静态资源，不会被wabpack构建。
    └── test                            测试文件目录（unit&e2e）
        └── unit                            单元测试
            ├── setup.js                        入口脚本
            ├── jest.conf.js                   jest配置文件
            └── specs                           单测case目录
                └── Hello.spec.js
## 环境安装

本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。
1. 自行下载并安装 node.js： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. 然后安装 cnpm 命令：

        npm install -g cnpm --registry=https://registry.npm.taobao.org

## 快速开始

    git clone https://gitee.com/ctx-ym/kyc-regsite.git
    cd vue-spa-template
    cnpm install
    npm run dev

## 命令列表

    #开启本地开发服务器，通过proxytable设置连接后端服务器，浏览器访问 http://localhost:8080
    npm run dev

    #开启本地开发服务器，使用mock文件下js模拟后端服务器，浏览器访问 http://localhost:8080
    npm run mock

    #使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录，
    npm run build

    #运行单元测试
    npm run unit

## 前后端分离

项目基于 spa 方式实现前后端分离，开发时服务器通过 nginx 区分前端页面和后端接口请求，分发到不同服务。前端物理上只有一个入口页面, 路由由前端控制（基于vue-router），根据不同的 url 加载相应数据和组件进行渲染。


## 接口 mock

前后端分离后，开发前需要和后端同学定义好接口信息（请求地址，参数，返回信息等），前端通过 mock 的方式，即可开始编码，无需等待后端接口 ready。
项目的本地开发服务器是基于 webpack-dev-server 搭建的，通过 webpack-dev-server 的中间件机制，我们已经在 dev-server 中添加了接口 mock 功能。
开发时，接口的 mock 数据统一放在 mock 目录下，每个文件内如下：


const proxy = {
    'GET /api/product/list': [{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2}, {
        "id": 2,
        "title": "H&M T-Shirt White",
        "price": 10.99,
        "inventory": 10
    }]
};
module.exports = proxy;


## 模块化

开发时可以使用 ES2015 module 语法。

## 组件化

整个应用通过 vue 组件的方式搭建起来，通过 vue-router 控制相应组件的展现，组件树结构如下：

    app.vue                         根组件（整个应用只有一个）
        ├──view1.vue                    页面级组件，放在 views 目录里面，有子组件时，可以建立子目录
        │   ├──component1.vue               功能组件，公用的放在 components 目录，否则放在 views 子目录
        │   ├──component2.vue
        │   └──component3.vue
        ├──view2.vue
        │   ├──component1.vue
        │   └──component4.vue
        └──view3.vue
            ├──component5.vue
            ……

## 单元测试

可以为每个组件编写单元测试，放在 `test/unit/specs` 目录下面, 单元测试用例的目录结构建议和测试的文件保持一致（相对于src），每个测试用例文件名以 `.spec.js`结尾。
执行 `npm run unit` 时会遍历所有的 `spec.js` 文件，产出测试报告在 `test/unit/coverage` 目录。




## 命名规范



变量、函数、常量、构造函数、类的成员等等的命名规范

驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。

按照第一个字母是否大写，分为：

-  Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo
-  Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo

a. 变量

命名方法：小驼峰式命名法。

命名规范：前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)

命名建议：尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。

示例：

    // 好的命名方式
    var maxCount = 10;
    var tableTitle = 'LoginTable';

    // 不好的命名方式
    var setCount = 10;
    var getTitle = 'LoginTable';

b. 函数

命名方法：小驼峰式命名法。

命名规范：前缀应当为动词。

命名建议：可使用常见动词约定

- can 判断是否可执行某个动作(权限)
- has	判断是否含有某个值
- is	判断是否为某个值
- get	获取某个值
- set	设置某个值
- load	加载某些数据

示例：

    // 是否可阅读
    function canRead() {
        return true;
    }

    // 获取名称
    function getName() {
        return this.name;
    }

c. 常量

命名方法：名称全部大写。

命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词。

命名建议：无。

示例：

    var MAX_COUNT = 10;
    var URL = 'http://www.baidu.com';


d. javascript 文件命名

命名方法：名称全部小写。

命名规范：使用小写字母和连接线来组合命名，连接线用以分割单词，不同环境文件使用"."分割。

命名建议：无。

示例：

    cart.js
    vue-loader.js

    webpack.dev.js
    webpack.prod.js

e. Vue Component及View

命名方法：Pascal Case命名法。

命名规范：名词组合命名。

命名建议：尽量在名字中体现具体意义，前缀使用名词而包含具体意义如Product、Shopping， 如果后缀使用类型如List、Table等。

示例：

    ProductList.vue
    ShoppingTable.vue


