const fs = require('fs')
const express = require('express')
const morgan = require('morgan')

const app = express();

const writeStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
})

app.use(morgan("combined", {stream: writeStream}))
app.get('/home', (req, res, next) => {
  res.end("hello")
})
app.listen(8000, () => {
  console.log("解析服务器启动成功");
})