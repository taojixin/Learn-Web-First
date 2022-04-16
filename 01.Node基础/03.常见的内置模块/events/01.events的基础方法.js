const EventEmitter = require("events")

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on:
// addListener:
emitter.on('click', (args) => {
  console.log("监听1到click事件", args);
})
const listener2 = (args) => {
  console.log("监听2到click事件", args);
}

// 3.发射一个事件
setTimeout(() => {
  emitter.emit('click', 'coder','dsf','dsfl')
  emitter.off('click', listener2)
  emitter.emit('click', "ds", "dfs", "fsd")
},2000)