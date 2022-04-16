const path = require('path')

const express = require('express')
// 1.
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

// 2.本质是创建multer对象
const upload = multer({
  // dest: './uploads/'
  // 自定义存储信息
  storage
});

// 3.
// app.use(upload.any())


app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('登录成功')
})

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file);
  res.end('文件上传成功')
})

app.listen(8000, () => {
  console.log("解析服务器启动成功");
})