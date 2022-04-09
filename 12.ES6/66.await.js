// 1.awiat跟上表达式
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(12)
      reject(11)
    }, 2000)
  })
}

// async function foo() {
//   const res1 = await requestData() // 可以把这条代码到下一个await之前的代码看出then中处理成功的代码
//   // 当await返回为失败状态时，运行报错，因为没有写失败时的处理代码
//   console.log("后面代码1", res1);
//   console.log("后面代码2");
//   console.log("后面代码3");

//   const res2 = await requestData()
//   console.log("res2后面的代码", res2);
// }
// foo()

// 2.reject值
async function foo() {
  const res1 = await requestData()
  console.log("res1", res1);
}
foo().catch(err => {
  console.log("err:", err); // err: 11
})