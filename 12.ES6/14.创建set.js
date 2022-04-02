// 1.创建Set
const set = new Set();
set.add(10)
set.add(20)
set.add(30)
set.add({})
console.log(set); // Set(4) { 10, 20, 30, {} }  set中内容不能重复
set.add({})
console.log(set); // Set(6) { 10, 20, 30, {}, {} }  这里set存放的是地址，所以两个对象
var obj = {}
set.add(obj)
set.add(obj)
set.add(obj)
console.log(set); // Set(6) { 10, 20, 30, {}, {}, {} }

// 2.数组去重
const arr = [33, 10, 26, 30, 33, 26]
const arrSet = new Set(arr)
const newArr1 = Array.from(arrSet)
const newArr2 = [...arrSet] // set也支持展开运算符
console.log(newArr1); // [ 33, 10, 26, 30 ]
console.log(newArr2); // [ 33, 10, 26, 30 ]