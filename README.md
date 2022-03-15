# BEEMO

一个基于 React + Vite 的练习 demo

## React 的一些特点

- 声名式开发(对应：命令式开发)
- 可以与其他框架并存(只控制了指定挂载的 div 标签的渲染)
- 组件化
- 单向数据流
- 视图层框架(大型数据通信需要借助别的框架)
- 函数式编程(方便自动化测试)

## Vite
基本概念：一个新型的打包工具，Vite 由两部分组成
- 一个开发服务，服务于开发环境，ESM + HMR
- 一套构建指令，服务于生产环境，用 Rollup 打包
注：什么是打包？是指使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件，常用的前端打包构建工具：Webpack、Rollup、Parcel、gulp。

设计思想：Vite 将模块区分为依赖和源码两类，提升开发服务启动时间，以原生 ESM 方式提供源码，让浏览器接管打包工作
- 依赖：在开发时不会变动的纯 JavaScript，Vite 会使用 esbuild 预构建依赖
- 源码：通常为 JSX、CSS 或者 Vue SFC 等，时常会被编辑，需要转换，基于路由拆分


## React 数据视图更新原理

1. state 数据
2. JSX 模板
3. 数据 + 模板 生成虚拟 DOM (虚拟 DOM 就是一个 JS 对象，用它来描述真实的 DOM)，损耗了少许性能，获得['div', {id: 'abc'}, ['span', {}, 'hello world']]
4. 用虚拟 DOM 的结构生成真实的 DOM，来显示 `<div id='abc'><span>hello world</span></div>`
5. state 发生变化
6. 数据 + 模板生成新的虚拟DOM（相比直接更换真实DOM，极大的提升了性能）['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟 DOM 和新的虚拟 DOM 的区别，找到区别是 span 中的内容
8. 直接操作 DOM，改变 span 中的内容


## Redux 工作流程

![Redux Flow](https://raw.githubusercontent.com/daluozha/MyPostImage/master/Redux-Flow.png)

## Redux 设计和使用的三项原则

1. store 必须是唯一的
2. 只有 store 能改变自己的内容，Reducer 应该深拷贝一份 state 修改完毕之后再 return 这份 state
3. Reducer 必须是纯函数(纯函数指的是：给定固定的输入，就一定会有固定的输出，而且不会有任何的副作用)

## Redux 的核心 API

- createStore
- store.dispatch
- store.getState
- store.subscribe

## Redux 的中间件

- Redux-thunk
- Redux-saga