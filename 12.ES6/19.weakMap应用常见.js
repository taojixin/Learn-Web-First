// 引用场景（vue3响应式原理）
const obj1 = {
  name: 'tjx',
  age: 19
}
function obj1NameFn1() {
  console.log("obj1NameFn1被执行");
}
function obj1NameFn2() {
  console.log("obj1NameFn2被执行");
}
function obj1AgeFn1() {
  console.log("obj1AgeFn1被执行");
}
function obj1AgeFn2() {
  console.log("obj1AgeFn2被执行");
}

const obj3 = {
  name: 'aaa',
  age: 09
}
function obj3NameFn1() {
  console.log("obj3NameFn1被执行");
}
function obj3NameFn2() {
  console.log("obj3NameFn2被执行");
}

// 1.创建WealMap
const weakMap = new WeakMap()

// 2.收集依赖结构
// 2.1 对obj1收集的数据结构
const obj1Map = new Map()
obj1Map.set('name', [obj1NameFn1, obj1NameFn2])
obj1Map.set('age', [obj1AgeFn1, obj1AgeFn2])
weakMap.set(obj1, obj1Map)

// 3.如果obj1.name发生了变化
// Proxy/Object.definePoroperty
obj1.name = 'java'
const targetWeakMap = weakMap.get(obj1)
const fns = targetWeakMap.get('name')
fns.forEach(item => item())



module.exports = {}
