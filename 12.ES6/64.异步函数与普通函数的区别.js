// 异步函数与普通函数的区别--返回值
async function foo() {
  console.log("foo function start-");
  console.log("中间件");
  console.log("foo function end-");
  
  // 1.返回一个值，这个值作为新的promise的resolve的参数

  // 返回thenable
  // return {
  //   then: function(resolve, rejest) {
  //     resolve('sfafsd')
  //   }
  // }

  // 返回Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hhhhhhhhh')
    }, 2000)
  })
}

// 异步函数的返回值一定是一个Promise
const promise = foo()
promise.then(res => {
  console.log("promise then function exec:", res);
})

// 异步函数与普通函数的区别--异常处理
async function foo() {
  console.log("foo function start");
  console.log("中间代码");
  // 异步函数中的异常，会被作为异步函数返回的Promise的reject值
  throw new Error('error message')
  console.log("foo function end");
}
foo().catch(err => {
  console.log("err", err);
})
console.log("后续代码");