const promise4 = new Promise((resolve, rejest) => {
  resolve("1")
})
const promise5 = new Promise((resolve, rejest) => {
  resolve("2")
})
const promise6 = new Promise((resolve, rejest) => {
  // resolve("3")
  rejest('err')
})
Promise.allSettled([promise4, promise5, promise6]).then(resolve => {
  console.log(resolve); // 输出为：
                        // [
                        //   { status: 'fulfilled', value: '1' },
                        //   { status: 'fulfilled', value: '2' },
                        //   { status: 'rejected', reason: 'err' }
                        // ]
}).catch(err => {
  console.log(err); // 只会进入成功的回调，不会进入这里失败的回调
})