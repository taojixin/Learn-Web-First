const promised = new Promise((resolve, rejest) => {
  resolve("resovle");
})
promised.then(resovle => {
  console.log(resovle);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log("最终都会执行");
})