function* foo() {
  console.log("函数开始执行");

  const value1 = 100
  console.log("第一段代码：", value1);
  yield

  const value2 = 200
  console.log("第二段代码：", value2);
  yield

  const value3 = 300
  console.log("第三段代码：", value3);
  yield

  console.log("函数执行结束（相当于第四段代码");
}
// 调用生成器函数，会返回一个生成器对象
const generator = foo()
// 执行第一段代码
generator.next()
// 执行第二代代码
generator.next()
// 一次类推
generator.next()
generator.next()
generator.next()
// 输出如下：实际上generator.next()有返回值
// 函数开始执行
// 第一段代码： 100
// 第二段代码： 200
// 第三段代码： 300
// 函数执行结束（相当于第四段代码