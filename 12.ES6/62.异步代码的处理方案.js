// 需求: 
// 1> url: why -> res: why
// 2> url: res + "aaa" -> res: whyaaa
// 3> url: res + "bbb" => res: whyaaabbb

function requestData(url) {
  return new Promise((resovle, rejest) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      resovle(url)
    }, 2000)
  })
}

// 方案一：多次回调
// requestData("why").then(res => {
//   requestData(res + 'aaa').then(res => {
//     requestData(res + 'bbb').then(res => {
//       console.log(res); // 6秒后输出 whyaaabbb
//     })
//   })
// })

// // 方案二：Promise中的then解决
// requestData('why').then(res => {
//   return requestData(res + 'aaa')
// }).then(res => {
//   return requestData(res + 'bbb')
// }).then(res => {
//   console.log(res);
// })

// 方案三：Promise + generator 实现
function* getData() {
  const res1 = yield requestData('why')
  const res2 = yield requestData(res1 + 'aaa')
  const res3 = yield requestData(res2 + 'bbb')
  console.log(res3);
}
// 1.手动执行生成器函数
// const generatora = getData()
// generatora.next().value.then(res => { // 这个then的res为why
//   generatora.next(res).value.then(res => { // 这个then的res为whyaaa
//     generatora.next(res).value.then(res => { // 这个then的res为whybbb
//       generatora.next(res) // 这里直接输出
//     })
//   })
// })
// 2.自己封装一个自动执行的函数
// function execGenerator(genFn) {
//   const generator = genFn()
//   function exec(res) {
//     const result = generator.next(res)
//     if (result.done) {
//       return result.value
//     }
//     result.value.then(res => {
//       exec(res) // 递归
//     })
//   }
//   exec()
// }
// execGenerator(getData)
// 3.使用第三方包：co 自动执行（async与await出现以前常用这方法）
// TJ: co/n(nvm)/commander(coderwhy/vue cli)/express/koa(egg)
// const co = require('co')
// co(getData)

// 方案四：async/await
async function getData() {
  const res1 = await requestData('why')
  const res2 = await requestData(res1 + 'aaa')
  const res3 = await requestData(res2 + 'bbb')
  console.log(res3);
}
getData()





