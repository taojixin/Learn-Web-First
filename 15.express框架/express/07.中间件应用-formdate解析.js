const express = require('express')
// 1.
const multer = require('multer');

const app = express();

// 2.
const upload = multer();

// 3.
app.use(upload.any())


app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('登录成功')
})

app.listen(8000, () => {
  console.log("解析服务器启动成功");
})