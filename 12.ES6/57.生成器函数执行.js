// 当遇到yield时候值 暂停 函数的执行
// 当遇到return时候生成器就 停止 执行
function* foo() {
  console.log("函数开始执行~")

  const value1 = 100
  console.log("第一段代码:", value1)
  yield // 如果yield这里后面跟值，则会是value的值，不跟值则为undefined

  const value2 = 200
  console.log("第二段代码:", value2)
  yield value2

  const value3 = 300
  console.log("第三段代码:", value3)
  yield value3

  console.log("函数执行结束~")
  return "123"
}

// generator本质上是一个特殊的iterator
const generator1 = foo()
console.log("返回值1:", generator1.next())
console.log("返回值2:", generator1.next())
console.log("返回值3:", generator1.next())
console.log("返回值3:", generator1.next())
// 多出来的next
console.log("返回值3:", generator1.next())
console.log("返回值3:", generator1.next())
// 输出如下：
// 函数开始执行~
// 第一段代码: 100
// 返回值1: { value: undefined, done: false }  // 这里undefined的原因是yield后面没有跟值
// 第二段代码: 200
// 返回值2: { value: 200, done: false }
// 第三段代码: 300
// 返回值3: { value: 300, done: false }
// 函数执行结束~
// 返回值3: { value: '123', done: true }
// 返回值3: { value: undefined, done: true }
// 返回值3: { value: undefined, done: true }