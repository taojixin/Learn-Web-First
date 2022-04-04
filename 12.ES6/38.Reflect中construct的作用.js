// 作用：创建的一个对象，但是这个对象的方式是另一个对象的方法
function Students(name, age) {
  this.name = name
  this.age = age
}
function Teachers() {

}
// 执行Students函数中的内容，但是创建出的对象是Teacher对象
const teachers = Reflect.construct(Students, ['saf', 'sf'], Teachers)
console.log(teachers); // Teachers { name: 'saf', age: 'sf' }
console.log(teachers.__proto__ === Teachers.prototype); // true