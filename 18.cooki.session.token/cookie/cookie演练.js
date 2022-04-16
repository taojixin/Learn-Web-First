const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa();
const testRouter = new Router();

// /test请求中设置cookie
testRouter.get('/test', (ctx, next) => {
  ctx.cookies.set("name", "lilei", {
    // maxAge对应毫秒
    maxAge: 50 * 1000
  })
  ctx.body = "test"
})
// /demo请求中获取cookie
testRouter.get('/demo', (ctx, next) => {
  // 读取cookie
  const value = ctx.cookies.get('name');
  console.log(value);
})

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8002, () => {
  console.log("服务器启动成功");
})