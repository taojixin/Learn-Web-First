const express = require('express')
const app = new express();

app.use('/login/:id/:name', (req, res, next) => {
  console.log(req.params); // { id: 'abc', name: 'why' }
  res.end('请求成功')
})

app.use('/login', (req, res, next) => {
  console.log(req.query); // { username: 'why', password: '123' }
  res.end('请求成功')
})

app.listen(8000, () => {
  console.log("express初体验服务器启动~");
})