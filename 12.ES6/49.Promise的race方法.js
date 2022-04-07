const promise7 = new Promise((resolve, rejest) => {
  setTimeout(() => {
    resolve("7")
  }, 3000)
})
const promise8 = new Promise((resolve, rejest) => {
  setTimeout(() => {
    resolve("8")
  }, 1000)
})
const promise9 = new Promise((resolve, rejest) => {
  setTimeout(() => {
    // resolve("9")
    rejest('err')
  }, 500)
})
Promise.race([promise7, promise8, promise9]).then(resolve => {
  console.log(resolve); // 返回接收到的第一个resolve，如果是rejest则执行catch中的代码
}).catch(err => {
  console.log(err);
})