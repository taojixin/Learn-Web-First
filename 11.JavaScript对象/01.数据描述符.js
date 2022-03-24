// 1.直接在一个对象上定义某个属性时
var obj = {
  name: 'tjx',
  age: 18,
  height: 1.88
}

// 当我们直接在一个对象上定义某个属性时，这个属性的configurable为true，所以默认是可以配置的
delete obj.name  // { age: 18, height: 1.88 }
console.log(obj);

for (var key in obj) {
  console.log(key); // age height
}

//获取对象的属性
console.log(Object.keys(obj));  // [ 'age', 'height' ]

obj.name = 'kobe'
console.log(obj);  // { age: 18, height: 1.88, name: 'kobe' }


console.log("***********************");
// 2.通过属性描述符定义一个属性时
Object.defineProperty(obj, 'address', {
  // configurable: false,
  // enumerable: true,
  // writable: false,
  value: '成都'
})
// 2.1 测试enumerable为false
// 这种方式访问时看不到属性 当enumerable为true时可以访问看到属性 
console.log(obj); // { age: 18, height: 1.88, name: 'kobe' }  没有address属性
console.log(Object.keys(obj)); // [ 'age', 'height', 'name' ]
for (var key in obj) {
  console.log(key); // age height name
}
// 这种方式是可以访问的
console.log("address" in obj); // true
console.log(obj.hasOwnProperty('address'));  // true
console.log(obj.address);  // 成都

// 2.2测试writable，修改address的值
obj.address = "广州"
console.log(obj.address);  // 成都  writable默认为false不可修改

// 2.3 测试configurable
// 不可删除
delete obj.address
console.log(obj.address); // 成都
// 不可以重新修改， 一下代码会报错
Object.defineProperty(obj, 'address', {
  configurable: true
})
console.log(obj.address);