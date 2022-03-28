// 第一个参数依然是模板字符串中整个字符串，只是被切割成多块，放到了一个数组中
// 第二个参数是模块字符串中，第一个${}，一次类推
function foo(m, n, x) {
  console.log(m,n, x, '..........');
}
const named = 'tjx'
const aged = 13

// 通过模板标签调用函数
foo`Hello${named}, world${aged},!`  //  [ 'Hello', ', world', ',!' ] tjx 13 ..........