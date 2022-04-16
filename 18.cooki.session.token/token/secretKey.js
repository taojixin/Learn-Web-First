const Koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new Koa();
const testRouter = new Router();

const SERCET_KEY = 'asdfg' // 这个不能丢，需要通过这个解密

// 登录
testRouter.post('/test', (ctx, next) => {
  // 假设登录成功后，这里办法令牌
  const user = {id: 10, name:'wjy'}
  const token = jwt.sign(user, SERCET_KEY, {
    expiresIn: 1000,   // token有效时间，单位秒
  })

  ctx.body = token;
})
// 验证
testRouter.get('/demo', (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace('Bearer ', '');

  try {
    const result = jwt.verify(token, SERCET_KEY); // 验证失败后会抛出异常，所以try catch
    ctx.body = result;
  }catch {
    ctx.body = "token无效"
  }

  
})

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());
app.listen(8002, () => {
  console.log("服务器启动成功");
})