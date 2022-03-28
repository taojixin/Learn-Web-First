var obj = {
  name: 'tjx',
  age: 39,
  height: 12,
  a: 12
}

// 1.对象的解构
var { namea, age, height } = obj
console.log(namea, age, height); // tjx 39 12

var { a } = obj
console.log(a); // 12

// 2.解构重命名
var {name: newName} = obj
console.log(newName); // tjx
var { address: newAddress = "广州" } = obj
console.log(newAddress);
