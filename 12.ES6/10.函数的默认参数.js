// 1.函数默认参数
function foo(m = 'aaa', n = 'bb') {
  console.log(m,n);
}
foo() // aaa bb
foo('dfs','fds') // dfs fds

// 对象参数和默认参数以及解构
// 写法一：
function printInfo({name, age} = {name: 'tjc', age: 19}) {
  console.log(name,age);
}
printInfo() // tjc 19
printInfo({name: 'lobe', age: 90}) // lobe 90

// 写法二：
function printInfo({name = 'tjx', age = 19} = {}) {
  console.log(name,age);
}