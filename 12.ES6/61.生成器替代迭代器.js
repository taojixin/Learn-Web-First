// 一、生成器替代迭代器
function* createArrayIterator(arr) {
  // 1.写法一
  // yield 'abc'
  // yield 'cba'
  // yield 'nba'

  // 2.写法二
  // for (const item of arr) {
  //   yield item
  // }

  // 3.写法三
  yield* arr  // yield*后面必须是可迭代对象
}
const nameg = ['abc', 'cba', 'nba']
const namegIterator = createArrayIterator(nameg)
console.log(namegIterator.next()); // { value: 'abc', done: false }
console.log(namegIterator.next()); // { value: 'cba', done: false }
console.log(namegIterator.next()); // { value: 'nba', done: false }
console.log(namegIterator.next()); // { value: undefined, done: true }

// 二、创建一个函数, 这个函数可以迭代一个范围内的数字
function* createRangeIterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }
}
const rangIterator = createRangeIterator(10, 13)
console.log(rangIterator.next()); // { value: 10, done: false }
console.log(rangIterator.next()); // { value: 11, done: false }
console.log(rangIterator.next()); // { value: 12, done: false }
console.log(rangIterator.next()); // { value: undefined, done: true }

// 三、class案例
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }
  // [Symbol.iterator] = function*() {
  //   yield* this.students
  // }
  *[Symbol.iterator]() {
    yield* this.students
  }
}
const classroom = new Classroom("3幢", "1102", ["abc", "cba"])
for (const item of classroom) {
  console.log(item)
}
