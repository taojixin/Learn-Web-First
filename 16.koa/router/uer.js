const Router = require('koa-router')

const router = new Router({prefix: '/users'});

// koa本来没有put这个方式，但是路由有这个方式
router.get('/', (ctx, next) => {
  ctx.response.body = "User listex";
})

router.put('/', (ctx, next) => {
  ctx.response.body = "put request~";
})


module.exports = router;