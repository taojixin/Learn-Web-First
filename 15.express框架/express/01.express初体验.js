const express = require('express')
const app = new express();
// get请求
app.get('/', (req, res) => {
  res.end("hello Express")
})
// post请求
app.post('/', (req, res, next) => {
  res.end("hello post express")
})
app.post('/login', (req, res, next) => {
  res.end("welcome back")
})
// 开始监听
app.listen(8000, () => {
  console.log("express初体验服务器启动~");
})