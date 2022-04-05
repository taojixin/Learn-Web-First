// 1.写法一：
const promise1 = new Promise((resolve, reject) => {
  console.log("这里的代码立即执行");
  resolve(); // 当执行resolve方式时，会立即执行then中的回调函数
  // reject(); // 当执行reject方法时， 会执行catch中的回调函数 
  // resolve 与 reject只能执行一个
  // 返回的时Promise对象
}).then(() => {
  console.log("成功的回调");
}).catch(() => {
  console.log("失败的回调");
})


// 2.写法二：
const promise2 = new Promise((resolve, reject) => {
  console.log("这里的代码立即执行！");
  // resolve(); 
  reject();
})

promise2.then(() => {
  console.log("成功的回调");
}).catch(() => {
  console.log("失败的回调");
})

// 3.写法三：
const promise3 = new Promise((resolve, reject) => {
  console.log("这里的代码立即执行！");
  // resolve(); 
  reject();
})

promise3.then(() => {
  console.log("成功的回调");
}, () => {
  console.log("失败的回调");
})