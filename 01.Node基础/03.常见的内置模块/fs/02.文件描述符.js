const fs = require('fs');

// 获取文件描述符
fs.open('./abc.txt', (err ,fd) => {
  if(err) {
    console.log(err);
    return ;
  }
  console.log(fd);
})

// 通过文件描述符获取文件信息
fs.fstat(3, (err, info) => {
  console.log(info);
})