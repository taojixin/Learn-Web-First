const express = require('express')

const app = express();

app.use((req, res, next) => {
  console.log("home middleware 01");
  next();
})

app.get('/home', (req, res, next) => {
  console.log("home middleware 01");
  next();
}, (req, res, next) => {
  console.log("home middleware 02");
  next();
}, (req, res, next) => {
  console.log("home middleware 03");
  next();
}, (req, res, next) => {
  console.log("home middleware 04");
  res.end();
})


app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
})