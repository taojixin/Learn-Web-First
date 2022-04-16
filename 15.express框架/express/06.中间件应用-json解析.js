const express = require('express')
const app = express();
// 处理body信息
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === 'application/json') {
//     req.on('data', (data) => {
//       console.log(data.toString());
//       const info = JSON.parse(data.toString())
//       req.body = info;
//     });
//     req.on('end', () => {
//       next();
//     })
//   }
// })

// 手写太麻烦了。有写好的
// body-parser
app.use(express.json())
// extended :
// true:对urlencoded解析时用的第三方库：qs
// false:对urlencoded解析时用的Node内置模块：querystring
app.use(express.urlencoded({extended:true}))


app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end("coder, welcome back");
})
app.post('/products', (req, res, next) => {
  console.log(req.body);
  res.end("uplog");
})

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
})