## 线程
- js线程 ui线程 这两个线程是互斥的，目的就是为了保证不产生冲突
- ui线程会把更改放到队列中 当js线程空闲下来，ui线程在继续渲染

## webworker 多线程
- 他和js主线程不是平级的，主线程可以控制webworker，webworker不能操作dom 不能获取document，window

## 栈和队列
- 栈 先进后出 函数调用

## node特点
- 异步非阻塞i/o(libuv库)

## 同步和异步 &&阻塞非阻塞
- 同步：线性执行
- 阻塞非阻塞指的是调用者状态
- 同步和异步指的是被调用者是如何通知的

## 宏任务
- setTimeout setInterval(setTmmediate)

## 微任务
- Promise.then then方法不应该放到宏任务中，默认浏览器的的实现放到了微任务中，MutationObserve不兼容的,
- 同步代码先执行 执行是在栈中执行的，微任务会先执行，在执行宏任务