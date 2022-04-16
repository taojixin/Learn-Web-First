const fs = require('fs')

// 1.方式一： 同步读取文件
const state = fs.statSync('../foo.txt');
console.log(state);
console.log("后续代码");

// 2.方式二：异步读取
fs.stat('../foo.txt', (err, state) => {
  if(err) {
    console.log(err);
    return ;
  }
  console.log(state);
})
console.log("后续代码执行");

// 3.方式三：Promise方式
fs.promises.stat('../foo.txt').then(state => {
  console.log(state);
  console.log(state.isDirectory());
}).catch(err => {
  console.log(err);
})
console.log("后续代码");