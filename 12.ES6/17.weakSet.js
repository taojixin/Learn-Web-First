// 区别一：只能存放对象类型
let weakSet = new WeakSet()
// weakSet.add(10) // 报错

// 区别二：对对象是一个弱引用
let obj3 = {
  name: 'tjx'
}
weakSet.add(obj3) // 弱引用
console.log(weakSet); // WeakSet { <items unknown> }

const set3 = new Set()
set.add(obj3) // 强引用