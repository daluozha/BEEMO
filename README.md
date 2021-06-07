# BEEMO

一个基于 React 的练习 demo

## React 的一些特点

- 声名式开发(对应：命令式开发)
- 可以与其他框架并存(只控制了指定挂载的 div 标签的渲染)
- 组件化
- 单向数据流
- 视图层框架(大型数据通信需要借助别的框架)
- 函数式编程(方便自动化测试)


## React 数据视图更新原理

1. state 数据
2. JSX 模板
3. 数据 + 模板 生成虚拟 DOM (虚拟 DOM 就是一个 JS 对象，用它来描述真实的 DOM)，损耗了少许性能，获得['div', {id: 'abc'}, ['span', {}, 'hello world']]
4. 用虚拟 DOM 的结构生成真实的 DOM，来显示`<div id='abc'><span>hello world</span></div>`
5. state 发生变化
6. 数据 + 模板生成新的虚拟DOM（相比直接更换真实DOM，极大的提升了性能）['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟 DOM 和新的虚拟 DOM 的区别，找到区别是 span 中的内容
8. 直接操作 DOM，改变 span 中的内容
