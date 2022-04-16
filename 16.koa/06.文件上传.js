const Koa = require('koa')
const Router = require('koa-router');
const multer = require('koa-multer')

const app = new Koa();
const uploadRouter = new Router({prefix: '/upload'})
const upload = multer({
  dest: './uploads/'
})

uploadRouter.post('/avatar', (ctx, next) => {
  console.log(ctx.req.file);
  ctx.respond.body = "success"
})
app.use(uploadRouter.routes())

app.use((ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = "hello world"
})


app.listen(8000, () => {
  console.log("koa服务器启动成功");
})