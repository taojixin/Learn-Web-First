// promise.then(res => {
//   console.log("res", res);
// }, err => {
//   console.log("err", err);
// })
// // 等价于
// promise.then(res => {
//   console.log("res", res);
// }).catch(err => {
//   console.log("err", err);
// })

// // then方法多次调用 : 当then被多次调用时，每一个then中的回调函数都会被执行
// // 所以一下代码会执行 3 次
// const promisea = new Promise((resolve, rejest) => {
//   resolve('aaaaaa')
// })
// promisea.then(res => {
//   console.log("res1:", res);
// })
// promisea.then(res => {
//   console.log("res2:", res);
// })
// promisea.then(res => {
//   console.log("res3:", res);
// })

// then的返回值  then的返回值都是一个参数
// 1.返回一个普通值
// 当返回一个普通值时,这个普通值会被最为新new的Promise的resolve的参数,所以then返回的是一个Promise
const promisea = new Promise((resolve, rejest) => {
  resolve("aaa")
})
promisea.then(res => { // 这里的第一个then方法是promisea的then方法
  return "bbb" // 相当于: new Promise((resolve,rejest) => {resolve('aaa)}) 即这个普通值会被作为新的Promise的resolve值
}).then(res => { // 这里的第二个then是第二个Promise(即 new Promise((resolve,rejest) => {resolve('aaa)}) )的then方法,而不是promisea的then方法
  console.log(res); // bbb
  // 当然这里还可以有返回值
})

// 2.返回值是一个Promise对象时
const promiseb = new Promise((resolve, rejest) => {
  resolve('aaa')
})
promiseb.then(res => { // 这里的then方法是promiseb的then方法
  return new Promise((resolve, rejest) => {
    setTimeout(() => {
      resolve('bbb')
    }, 3000)
  })
}).then(res => { // 这里的then也是new的新的Promise的then方法,而不是promiseb的
  console.log(res); // 三秒后输出  bbb
})

// 3.当返回值是一个实现了then方法的对象时
const promisec = new Promise((resolve, rejest) => {
  resolve('aaa')
})
promiseb.then(res => { // 这里的then方法是promiseb的then方法
  const obj = {
    then: function(resolve, rejest) {
      resolve('bbb')
    }
  }
  return obj  // 新的promise的状态有obj对象里的resolve或reject决定
}).then(res => {
  console.log(res); // bbb
})