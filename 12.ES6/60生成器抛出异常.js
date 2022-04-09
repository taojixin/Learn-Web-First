function* foo() {
  console.log("代码开始执行");

  const value1 = 100
  try {
    yield value1
  } catch (err) {
    console.log("捕获到异常：", err);
  }

  console.log("第二段代码继续执行");
  const value2 = 200
  yield value2

  console.log("代码执行结束");
}
const generator2 = foo()
console.log(generator2.next());
console.log(generator2.throw('err message'));
console.log(generator2.next());
// 输出如下：
// 代码开始执行
// { value: 100, done: false }
// 捕获到异常： err message
// 第二段代码继续执行
// { value: 200, done: false }
// 代码执行结束
// { value: undefined, done: true }
