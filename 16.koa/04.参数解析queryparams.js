const Koa = require('koa')
const app = new Koa();
const Router = require('koa-router')

// 通过路由解析params
const userRouter = new Router({prefix: '/users'})
// userRouter.get('/:id', (ctx, next) => {
//   console.log(ctx.request.params.id); // 123
// })


// 解析query
app.use((ctx, next) => {
  console.log(ctx.request.query); //{ username: 'why', password: '123' }
  ctx.response.body = "hello word"
})
app.use(userRouter.routes())

app.listen(8000, () => {
  console.log("koa服务器启动成功");
})