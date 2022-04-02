// 1.Symbol的基本使用
const symbol1 = Symbol()
const symbol2 = Symbol()
// console.log(symbol1 === symbol2); // false

// 2.description描述符
const symbol3 = Symbol('aaa')
console.log(symbol3.description); // aaa

// 3.Symbol值最为key
// 3.1 在定义对象字面量时使用
const obj = {
  [symbol1]: 'abc',
  [symbol2]: 'dfa'
}
// 3.2 新增属性
obj[symbol3] = 'nab'
// 3.3 Object.defineProperty方式

const symbol4 = Symbol()
Object.defineProperty(obj, symbol4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'mag'
})
console.log(obj[symbol1], obj[symbol2], obj[symbol3], obj[symbol4]); // abc dfa nab mag
// 注意：不能通过 . 的方式获取 结果：undefined
console.log(obj.symbol1); // undefined

// 4.使用Symbol作为key的属性名，在遍历/Object.keys等中是获取不到这些symbol值，需要Object.getOwnPropertySymbols来获取所有Symbol的key
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(), Symbol(), Symbol(aaa), Symbol() ]
const keys = Object.getOwnPropertySymbols(obj)
for (const sKey of keys) {
  console.log(obj[sKey]); // 输出如下：
                          // abc
                          // dfa
                          // nab
                          // mag
}

// 5.创建相同的Symbol   Symbol.for(key)/Symbol.keyFor(symbol)
const a = Symbol.for('aaa')
const b = Symbol.for('aaa')
console.log(a); // Symbol(aaa)
// console.log(a === b); // true

const keya = Symbol.keyFor(a) // 获取aaa用于通过for()创建相同的symbol
console.log(keya); // aaa
const c = Symbol.for(keya)
// console.log(a === c); // true