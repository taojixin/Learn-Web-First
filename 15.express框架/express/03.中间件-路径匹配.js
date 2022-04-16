const express = require('express')
const app = express();

// 中间件：查找所有路径匹配的中间件，只执行第一个满足的中间件，除非第一个中调用了next

app.use((req, res, next) => {
  console.log("home middleware 03");
  res.end("01");
  // next();
})

// 路径匹配中间件  与请求关系无关，与路径有关
app.use('/home', (req, res, next) => {
  console.log("home middleware 01");
  res.end("01");
  next();
})
// 永远是第一个中间件
app.use('/home', (req, res, next) => {
  console.log("home middleware 02");
})

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
})