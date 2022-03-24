// function createPerson(name, age, height, address) {
//   var p = new Object()
//   // 总是提示  类型“Object”上不存在属性“***” 但是不影响执行，可能这种写法不支持了把
//   p.name = name
//   p.age = age
//   p.height = height
//   p.address = address

//   p.eating = function() {
//     console.log(this.name + '吃东西--');
//   }

//   p.runing = function() {
//     console.log(this.name + '在跑步--');
//   }

//   return p
// }

// var p1 = createPerson('张三', 10, 1.3, "成都")
// var p2 = createPerson('sadf', 10, 1.3, "成都")
// var p3 = createPerson('sdfsd', 10, 1.3, "成都")