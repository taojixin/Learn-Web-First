function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address

  this.eating = function() {
    console.log(this.name + '吃东西--');
  }

  this.runing = function() {
    console.log(this.name + '在跑步--');
  }
}

var p1 = new Person('张三', 10, 1.3, "成都")
var p2 = new Person('sadf', 10, 1.3, "成都")
var p3 = new Person('sdfsd', 10, 1.3, "成都")