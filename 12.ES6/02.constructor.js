class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eatting() {
    console.log(this.name + "吃！");
  }
  running() {
    console.log(this.name + "跑！");
  }
}

// var p1 = new People('颤三',19)
// p1.eatting() // 颤三吃！
// p1.running() // 颤三跑！

console.log(Object.getOwnPropertyDescriptors(People)); // 输出如下：
// {
//   length: { value: 2, writable: false, enumerable: false, configurable: true },
//   name: {
//     value: 'People',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   },
//   prototype: {
//     value: {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
console.log(Object.getOwnPropertyDescriptors(People.prototype)); // 输出如下：
// {
//   constructor: {
//     value: [class People],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   eatting: {
//     value: [Function: eatting],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   running: {
//     value: [Function: running],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
