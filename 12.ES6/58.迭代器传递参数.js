function* foo(num) {
  console.log("函数开始执行");

  const value1 = 100 * num
  console.log("第一段代码：", value1);
  const n = yield value1 // 这里的value1为第一段代码的value值，不受第二段代码next传递参数的影响

  const value2 = 200 * n
  console.log("第二段代码：", value2);
  const count = yield value2 // value：2000

  const value3 = 300 * count
  console.log("第三段代码：", value3);
  yield value3

  console.log("最后一段代码");
  return '123'
}
// 生成器上的next方法可以传递参数
const generator = foo(10)
// 第一段代码
console.log(generator.next()); 
// 第二段代码
console.log(generator.next(10)); // 这里传入的参数会成为第一段代码的yield的返回值
// 第三段代码
console.log(generator.next(10));
// 第四段代码
console.log(generator.next()); // 最后一段代码的return值将作为这里的value值
// 输出如下：
// 函数开始执行
// 第一段代码： 1000
// { value: 1000, done: false }
// 第二段代码： 2000
// { value: 2000, done: false }
// 第三段代码： 3000
// { value: 3000, done: false }
// 最后一段代码
// { value: '123', done: true }
