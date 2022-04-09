function* foo(num) {
  console.log("函数开始执行~")

  const value1 = 100 * num
  console.log("第一段代码:", value1)
  const n = yield value1

  const value2 = 200 * n
  console.log("第二段代码:", value2)
  const count = yield value2

  const value3 = 300 * count
  console.log("第三段代码:", value3)
  yield value3

  console.log("函数执行结束~")
  return "123"
}

const generator1 = foo(10)
// 第一段代码
console.log(generator1.next())
// 相当于在第一段代码的后面添加了return语句，提前终止生成器代码的执行
console.log(generator1.return('sdf')) // return要有参数，作为value的值
console.log(generator1.next())
console.log(generator1.next())
// 输出如下：
// 函数开始执行~
// 第一段代码: 1000
// { value: 1000, done: false }
// { value: 'sdf', done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }
