Promise.reject('rejest')
// 相当于
const promisez = new Promise((resolve, rejest) => {
  rejest('rejest')
})

// reject的参数无论是什么都只是修改promise的rejest状态并把这个参数传递过去
const promisex = Promise.reject(new Promise((resolve, rejest) => {
  resolve('resovle')
}))
promisex.then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err); // promise对象
})