const Koa = require('koa')
const app = new Koa();
// 注册中间件，没有提供POST，GET,path匹配方式以及连续注册的方式等
app.use((ctx, next) => {
  if(ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      console.log("中间件被执行");
      ctx.response.body = "login success"
    }
  } else {
    ctx.response.body = "hello world";
  }
})

app.listen(8000, () => {
  console.log("koa服务器启动成功");
})