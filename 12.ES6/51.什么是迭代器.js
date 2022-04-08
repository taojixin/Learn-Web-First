// 编写一个符合规则的迭代器
const iterator = {
  next: function() {
    return { // 返回一个拥有这两个属性的对象
      done: true, 
      value: 123
    }
  }
}

// 数组
const names = ['a', 'b', 'c', 'd']
// 用于记录遍历时的下标
let index = 0
// 创建一个迭代器对象来访问数组
const namesIterator = {
  next: function() {
    if (index < names.length) {
      return { done: false, value: names[index++]}
    } else {
      return { done: true, vlaue: undefined}
    }
  }
}
console.log(namesIterator.next());  // { done: false, value: 'a' }
console.log(namesIterator.next());  // { done: false, value: 'b' }
console.log(namesIterator.next());  // { done: false, value: 'c' }
console.log(namesIterator.next());  // { done: false, value: 'd' }
console.log(namesIterator.next());  // { done: true, vlaue: undefined }
console.log(namesIterator.next());  // { done: true, vlaue: undefined }