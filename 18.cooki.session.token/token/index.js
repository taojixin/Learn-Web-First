const Koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const app = new Koa();
const testRouter = new Router();

const PRIVATE_KEY = fs.readFileSync('./keys/private.key');  // 这里是buffer类型
const PUBLIC_KEY = fs.readFileSync('./keys/public.key');

const SERCET_KEY = 'asdfg' // 这个不能丢，需要通过这个解密

// 登录
testRouter.post('/test', (ctx, next) => {
  // 假设登录成功后，这里办法令牌
  const user = {id: 10, name:'wjy'}
  // 支持buffer
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 1000,   // token有效时间，单位秒
    algorithm: "RS256",   // 这里必须指出用什么算法，因为算法已经变了不再是HS256，这里是非对称加密RS256
  })

  ctx.body = token;
})
// 验证
testRouter.get('/demo', (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace('Bearer ', '');

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],      // 这里也需要说明用什么算法解密，这里可以用多种算法解密
    }); // 验证失败后会抛出异常，所以try catch
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