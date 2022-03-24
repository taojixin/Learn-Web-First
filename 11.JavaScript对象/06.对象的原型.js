// // 对象
// var obj1 = new Object();
// console.log(obj1.__proto__);  // [Object: null prototype] {}
// console.log(obj1.prototype);  // undefined  不能直接获取prototype
// console.log(Object.getPrototypeOf(obj1));  // [Object: null prototype] {}
// console.log(obj1.__protp__ === obj1.prototype); // true
// console.log(obj1.__protp__ === Object.prototype); // false
// var obj2 = {}
// console.log(obj2.__proto__);  // [Object: null prototype] {}
// console.log(obj2.__protp__ === obj2.prototype); // true
// console.log(obj2.__protp__ === Object.prototype); // false

// console.log("************");

// // 其他引用数据类型
// var arry1 = new Array();
// console.log(arry1.__proto__); // Object(0) []
// console.log(arry1.prototype); // undefined
// console.log(arry1.__proto__ === Array.prototype); // true
// console.log(arry1.__proto__ === arry1.prototype); // false
// console.log(Object.getPrototypeOf(arry1)); // Object(0) []
// var arry2 = []
// console.log(arry2.__proto__); // Object(0) []
// console.log(arry2.__proto__ === arry2.prototype); // false
// console.log(arry2.__proto__ === Array.prototype); // true