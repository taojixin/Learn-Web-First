const fs = require('fs');

// 文件写入
const content = "的房价来说"
fs.writeFile('./abcd.txt', content,{flag: "a"}, err => {
  console.log(err);
});

// 文件读取
fs.readFile("./abc.txt", (err, data) => {
  console.log(data); //<Buffer e7 9a 84 e6 88 bf e4 bb b7 e6 9d a5 e8 af b4>
})
fs.readFile("./abc.txt", {encoding: 'utf-8'}, (err, data) => {
  console.log(data); //的房价来说
})