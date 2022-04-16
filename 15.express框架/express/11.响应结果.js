const express = require('express')

const app = new express();

app.get('/products/:id', (req, res, next) => {

  console.log(req.params);
  res.end('商品详情数据')
})

app.get('/login', (req, res, next) => {

  console.log(req.query);
  res.end('商品详情数据')
})

app.listen(8000, () => {
  console.log("express初体验服务器启动~");
})