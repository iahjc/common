# 前端工程化

## 前端模块化的背景

1. 前端模块化湿一种标准，不是实现
2. 理解模块化湿理解前端工程后的前提
3. 前端模块化是前端项目规模化的必然结果

## 什么是前端模块化

1. 将复杂程序根据规范分拆成若干个模块，一个模块包括输入和输出
2. 模块的内部实现是私有的，对外暴漏借口与其它模块通信
3. 一个HTML页面可以引用的script包括：脚本和模块

## 脚本和模块的区别

## 模块化的进化过程

### 第一阶段
1. 全局function模式，将不同功能封装成不同的函数
2. 缺陷容易引发全局命名空间冲突

### 第二阶段
1. 全局namespace模式，通过对象封装模块
2. 缺陷：外部能够修改模块内部数据 解决办法：创建闭包 函数作用域 + 闭包 函数天生访问不到内部的变量

### 第三阶段

1. IIFE模式，通过自执行函数创建闭包
    Immediately-invoked function expression
2. 缺陷：无法解决模块间相互依赖的问题

### 第四阶段
1. IIFE模式增强，支持传入自定义依赖
2. 缺陷
    多依赖传入时，代码阅读困难
    无法支持大规模的模块开发
    无特定语法支持，代码简陋


## CommonJS规范介绍
1. Node.js中默认模块化规范，每个文件就是一个模块，有自己的作用域
2. Node中CommonJS模块加载采用同步加载方式
3. 通过require加载模块，通过exports或module.exports输出模块

### CommonJS规范特点
1. 所有代码都运行在模块作用域，不会污染全局变量
2. 模块可以多次加载，第一次加载时会运行模块，模块输出结果会被缓存，再次加载时，会从缓存结果中直接读取模块输出结果。
3. 模块加载的顺序，按照其在代码中出现的顺序
4. 模块输出的值时值的拷贝，类似于IIFE方案中的内部变量


## CommonJS模块打包
1. 按装browserify：npm install browserify -g
2. 模块打包命令：browserify module_test/cjs/entry.js -o dist/bundle.js
3. 注意，当存在多个模块时，每个模块都需要单独打包

## browserify打包原理
1. 本质还是通过自执行函数实现模块化
2. 将每个模块编号，存入一个对象，每个模块标记依赖模块
3. 实现了require方法，核心是通过call方法调用模块，并传入require,module，exports方法或对象，通过module存储模块信息，通过exports存储模块输出信息

## AMD规范

### AMD规范介绍
1. AMD规范采用非同步加载模块，允许指定回调函数
2. Node模块通常都位于本地，加载速度快，所以适用于同步加载
3. 浏览器环境下，模块需要请求获取，所以适用于异步加载
4. require.js是AMD的一个具体实现库

## CMD规范介绍
1. CMD整合了CommonJS和AMD的优点，模块加载时异步的
2. CMD专门用于浏览器端，sea.js是CMD规范的一个实现
3. AMD和CMD最大的问题是没有通过语法升级解决模块化

## ESModule规范介绍
1. ESModule设计理念是希望在编译时就确定模块依赖关系及输入输出
2. CommonJS和AMD必须在运行时才能确定依赖和输入，输出
3. ESModule通过import加载模块，通过export输出模块

## CommonJS和ESModule规范对比
1. CommonJS模块输出的是值的拷贝，ES6模块输出的是值的引用
2. CommonJS模块是运行时加载，ES6模块是编译时输出接口
3. CommonJS是单个值导出，ES6 Module可以导出多个
4. CommonJS模块是同步加载，ES6 Module支持异步加载
5. CommonJS的this是当前模块，ES6 Module的this是undefined
6. CommonJS和ES6 Module的语法不同

## 脚本和模块对比
1. 模块具备更高的开发效率（可读性强，复用高效）
2. 脚本具有更高的页面性能（模块文件多，加载速度慢）
3. 模块在浏览器中运行会存在兼容性问题，要特别注意

## 浏览器模块化的局限性
1. 缺乏模块管理能力，模块分散在各个项目中
2. 性能加载慢，无法大型项目中直接使用
3. 这两个问题是npm和webpack核心解决的问题

## npm诞生背景
### 初步思路
1. 集中管理所有模块，所有模块都上传到仓库（registry）
2. 模块内创建package.json标注模块的基本信息
3. 通过npm publish发布模块，上传到仓库（registry）
4. 通过npm install安装模块，模块安装在node_modules目录

## npm总结
1. npm init创建模块，npm install安装模块，npm publish发布模块
2. npm link本地开发，npm config调整配置，npm run调用scripts
3. npm规范：package.json管理模块信息，node_modules保存依赖。

## npm的局限
1. npm只能解决模块的高效管理和获取问题
2. npm无法解决性价加载问题
3. 模块化发明后，制约其广泛应用的因素就是性能问题


## webpack诞生背景
1. webpack 2012年3月10号诞生
2. 移植了GWT的功能
3. 2014年instagram团队分享性能优化时，提出使用webpack的 code splitting 特性
4. webpack的出现模糊了任务和构建的边界，使之融为一体

## webpack的原理
1. 最初的webpack核心解决的问题就是代码合并与拆分
2. webpack的核心理念是将资源都视为模块，统一进行打包和处理
3. webpack提供了loader和plugins完成功能扩展