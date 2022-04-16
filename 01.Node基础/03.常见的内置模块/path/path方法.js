const path = require('path')

// // 1.获取路径的消息
// const filepath = '/User/why/abc.txt'

// console.log(path.dirname(filepath));// /User/why
// console.log(path.basename(filepath));// abc.txt
// console.log(path.extname(filepath));// .txt

// 路径拼接
// const basepath = '/User/why'
// const filename = 'abc.txt'

// const file1path = path.join(basepath, filename);
// console.log(file1path);//  \User\why\abc.txt

// const file2path = path.resolve(basepath, filename);
// console.log(file2path);//  D:\User\why\abc.txt

// join与resolev的区别，resolve会判断拼接路径字符串中，是否有以/或./或../开头的路径，有的话则会在路径开头打印根路径或当前路径或上一级路径
// const basepath = './User/why'
// const filename = 'abc.txt'
// const file1path = path.join(basepath, filename);
// console.log(file1path);//  User\why\abc.txt
// const file2path = path.resolve(basepath, filename);
// console.log(file2path);// D:\Microsoft VS Code web Node\01.Node基础\03.常见的内置模块\path\User\why\abc.txt

const basepath = '../User/why'
const filename = 'abc.txt'
const file1path = path.join(basepath, filename);
console.log(file1path);//  ..\User\why\abc.txt
const file2path = path.resolve(basepath, filename);
console.log(file2path);//  D:\Microsoft VS Code web Node\01.Node基础\03.常见的内置模块\User\why\abc.txt