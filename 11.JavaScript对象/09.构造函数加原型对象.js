function Person(name, age, height, address) {
  this.name = name,
  this.age = age
  this.height = height
  this.address = address
}
Person.prototype.eating = function() {
  console.log(this.name + "在吃");
}
Person.prototype.running = function() {
  console.log(this.name + "在跑");
}

var p1 = new Person('why', 18, 1.99, '北京')
var p2 = new Person('士大夫', 18, 1.99, '北京')

p1.eating()
p2.running()