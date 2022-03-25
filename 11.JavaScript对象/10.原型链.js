function foo(name,age) {
  this.name = name
  this.age = age
}
Object.prototype.toString = function () {
  console.log(this.name + ':' + this.age);
}
var fn = new foo('小明', 19)
fn.toString();  // 小明:19
console.log(fn.toString === foo.prototype.__proto__.toString); // true

console.log(fn.__proto__ === foo.prototype); // ture
console.log(foo.prototype.__proto__ === Object.prototype); // ture
console.log(Object.prototype.__proto__ === null); // ture