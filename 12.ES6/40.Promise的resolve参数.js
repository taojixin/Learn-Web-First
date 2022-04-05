// 1.传入普通参数
const promise1 = new Promise((resolve, rejest) => {
  console.log("这里的代码立即执行");
  resolve("传入字符串");
})
promise1.then((res) => {
  console.log(res);
})

// 2.传入Promise
const promise2 = new Promise((resolve, rejest) => {
  console.log("aaaaaaaaaaaa");
  // 状态不是由这里决定的，而是由resolve中的Promise对象决定
  resolve(new Promise((resolve, rejest) => {
    rejest() // 这里决定状态
  }))
})
promise2.then((res) => {
  console.log(res);   // 执行的不是这里的代码
}, (err) => {
  console.log("err",err); // 执行的是这里的代码
})

// 3.传入实现了then的对象
const promise3 = new Promise((resolve, rejest) => {
  console.log("asdf");
  const obj = {
    // 实现then方法，这个方法中也是resolve和rejest参数
    then: (resolve, rejest) => {
      rejest("这里决定状态")
    }
  }
  resolve(obj) // 状态不是由这里决定，而是由传入的obj对象的then方法中的resolve和rejest决定
})
promise3.then((res) => {
  console.log("res", res);
}, (err) => {
  console.log("err", err); // err 这里决定状态  (执行这里的代码)
})