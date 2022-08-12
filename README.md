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