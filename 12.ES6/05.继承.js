class A {
  constructor(name,age) {
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
class B extends A {
  constructor(name,age,height) {
    // this.name = name
    // this.age = age
    super(name,age) // 这里必须调用父类的构造器否则报错(派生类的构造函数必须包含 "super" 调用。)，同时可以避免代码冗余
    this.height = height

  }
  study() {
    console.log("study");
  }
}

// 子类中新添加的方法是添加到了子类的原型对象上，并不是父类的远程对象上
console.log(Object.getOwnPropertyDescriptors(B.prototype)); // 输出如下：
// {
//   constructor: {
//     value: [class B extends A],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   study: {
//     value: [Function: study],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
console.log(Object.getOwnPropertyDescriptors(A.prototype));  // 输出如下：
// {
//   constructor: {
//     value: [class A],
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