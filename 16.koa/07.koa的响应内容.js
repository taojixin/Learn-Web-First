const Koa = require('koa')

const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.request.body);
  // 设置内容
  // ctx.response.body = "hello world"
  // ctx.response.body = {
  //   name: 'coder',
  //   age: 20,
  //   rul: 'dsf'
  // }
  // 设置状态码
  ctx.status = 200
  // ctx.response.body = ["dfdsf", "df", "df"]
  // 简写
  ctx.body = "dfjsf"
  
})


app.listen(8000, () => {
  console.log("koa服务器启动成功");
})