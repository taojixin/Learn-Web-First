const express = require('express')

const app = express();

// 编写普通的中间件
// use注册一个中间件（回调函数）
// 默认响应第一个中间件
// 若需要响应其他中间件，需要调用next()
app.use((req, res, next) => {
  console.log("注册了第1个普通的中间件");
  res.end("hello world");
  next();
})

app.use((req, res, next) => {
  console.log("注册了第2个普通的中间件");
  // res.end("hello world");  //前面已经调用过end了，已经结束了周期，再调用会报错
  // 所以一般end出现在最后一个普通中间件
  next()
})

app.use((req, res, next) => {
  console.log("注册了第3个普通的中间件");
})



app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
})