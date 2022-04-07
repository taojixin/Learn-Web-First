const promise1 = new Promise((resolve, rejest) => {
  resolve("1")
})
const promise2 = new Promise((resolve, rejest) => {
  resolve("2")
})
const promise3 = new Promise((resolve, rejest) => {
  // resolve("3")
  rejest('err')
})
Promise.all([promise1, promise2, promise3, '这里也可以是其他类型参数']).then(resolve => {
  console.log("当all参数中所有的promise的resolve时，执行这里的函数，resolve：", resolve); // 当all参数中所有的promise的resolve时，执行这里的函数，resolve： [ '1', '2', '3', '这里也可以是其他类型参数' ]
}).catch(err => {
  console.log("当all的参数中所有的promise中有一个rejest时，就执行这里的代码就，error：", err); // 当all的参数中所有的promise中有一个rejest时，就执行这里的代码就，error： err
})