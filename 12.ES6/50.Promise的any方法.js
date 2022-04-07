// const promise10 = new Promise((resolve, rejest) => {
//   setTimeout(() => {
//     resolve("7")
//   }, 3000)
// })
// const promise11 = new Promise((resolve, rejest) => {
//   setTimeout(() => {
//     resolve("8")
//   }, 1000)
// })
// const promise12 = new Promise((resolve, rejest) => {
//   setTimeout(() => {
//     rejest('err')
//   }, 500)
// })
// Promise.any([promise10, promise11, promise12]).then(resolve => {
//   console.log(resolve); // 
// }).catch(err => {
//   console.log(err);
// })
// 首先出现的是err，但是是rejest，所以继续等待第一个resolve，出现了第一个resolve就执行then中代码，如果全是rejest，则会等到所有的rejest只会再执行rejest，然后报一个错