// koa导出的是一个类
const Koa = require('koa')

const app = new Koa();

app.use((ctx, next) => {
  ctx.response.body = "hello world";
  console.log("中间件被执行");
})


app.listen(8000, () => {
  console.log("koa服务器启动成功");
})