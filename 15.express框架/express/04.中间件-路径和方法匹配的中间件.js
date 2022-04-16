const express = require('express')

const app = express();

// 路径和方法都匹配的中间件
app.get('/home', (req, res, next) => {
  console.log("home path and method middlelevel01");
})

app.post('/home', (req, res, next) => {
  console.log("home path and method middlelevel02");
})


app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
})