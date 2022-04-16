const Koa = require('koa')
const Router = require('koa-router')
const Session = require('koa-session')
const app = new Koa();
const testRouter = new Router();

// 创建session的配置
const session = Session({
  key: 'sessionid',
  maxAge: 10 * 1000,
  signed: true
}, app);
app.keys = ['aaaa']
app.use(session)


// 登录
testRouter.get('/test', (ctx, next) => {
  // 数据库中查到了id和name
  const id = 110;
  const name = "coderwhy"
  // session携带id和name信息
  ctx.session.user = {id,name};

  ctx.body = "test"
})
testRouter.get('/demo', (ctx, next) => {
  console.log(ctx.session.user);
  ctx.body = "demo"
})

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());
app.listen(8002, () => {
  console.log("服务器启动成功");
})