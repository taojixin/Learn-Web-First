const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer');
const Router = require('koa-router');

const app = new Koa();
const upload = multer();

app.use(bodyParser())
app.use(upload.any())


// 解析json
app.use((ctx, next) => {
  console.log(ctx.request.body); // { title: '华为', prise: '23' }
  ctx.response.body = "hello world"
})

app.listen(8000, () => {
  console.log("koa服务器启动成功");
})