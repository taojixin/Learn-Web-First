const promisec = new Promise((resolve, rejest) => {
  // resolve("promisec")
  rejest('promisec')
})

promisec.then(resolve => {
  console.log("promisec：", resolve);
}).catch(err => {
  console.log("err:", err);
  return 'catch'  // 这里和then的返回值一样，会生成新的Promise，如果新的Promise中调用resolve则会执行下一个then方法，如果调用reject则会执行catch方法
}).then(resolve => {
  console.log("new Promise:", resolve); // new Promise: catch
}).catch(err => {
  console.log("err:", err);
})
