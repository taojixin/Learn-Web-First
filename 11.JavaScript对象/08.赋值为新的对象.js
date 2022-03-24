function Foo() {

}
Foo.prototype = {
  name: 'tjx',
  age: 10,
  height: 1.88,
  constructor: Foo,
}

var f = new Foo();
console.log(Object.getPrototypeOf(f)); // { name: 'tjx', age: 10, height: 1.88, constructor: [Function: Foo] }
// console.log(f.__proto__); // { name: 'tjx', age: 10, height: 1.88, constructor: [Function: Foo] }
console.log(Object.getPrototypeOf(Foo)); // {}  空对象的原因：Foo的prototype属性的enumerable为false，不可枚举，即查看不了
console.log(Object.getOwnPropertyDescriptors(Foo));  // 输出如下：
// {
//   length: { value: 0, writable: false, enumerable: false, configurable: true },
//   name: {
//     value: 'Foo',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   },
//   arguments: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   caller: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   prototype: {
//     value: {
//       name: 'tjx',
//       age: 10,
//       height: 1.88,
//       constructor: [Function: Foo]
//     },
//     writable: true,
//     enumerable: false,
//     configurable: false
//   }
// }