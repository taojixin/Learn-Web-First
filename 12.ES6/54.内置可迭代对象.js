// String、Array、Map、Set、arguments对象、NodeList集合是可迭代对象，他们内置了迭代器
// 如字符串就是一个可迭代对象
const strings = 'abc'
// 获取可迭代的函数
console.log(strings[Symbol.iterator]); // [Function: [Symbol.iterator]]
// 调用可迭代函数， 获取迭代器
const iteratorString = strings[Symbol.iterator]() // 别忘了这里的()，调用可迭代函数
console.log(iteratorString.next()); // { value: 'a', done: false }
console.log(iteratorString.next()); // { value: 'b', done: false }
console.log(iteratorString.next()); // { value: 'c', done: false }
console.log(iteratorString.next()); // { value: undefined, done: false }
