const promisea = new Promise((resolve, rejest) => {
  // 当调用rejest或抛出异常时，都会执行then中的错误捕获的方法
  throw new Error('错误')
  // rejest();
})
promisea.then(undefined, (error) => {
  console.log("err", error);
})
// catch相当于then的错误的捕获的语法糖
// 当有promisea有多个catch时，每一个都会被执行调用
promisea.catch(() => {
  console.log("相当于时then错误捕获的语法糖");
})
promisea.catch(() => {
  console.log("相当于时then错误捕获的语法糖");
})
promisea.catch(() => {
  console.log("相当于时then错误捕获的语法糖");
})
