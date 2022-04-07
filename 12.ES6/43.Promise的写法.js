const promiseb = new Promise((resolve, reject) => {
  // reject("promiseb")
  resolve('resolve')
})
promiseb.then(resolve => {
  console.log("resolve");
  return new Promise((resolve, reject) => {
    reject('新的promise')
  })
}).catch(err => {   // 这里的catch 首先 对应的是promiseb的reject，而不是then后新的promise，但当promiseb调用的是reject时，如果then中新的promise调用了reject，会执行这里的catch
  console.log(err);
})