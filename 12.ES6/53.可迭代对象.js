// 创建一个可迭代对象
const iterableObj = {
  names: ['a', 'b', 'c'],
  [Symbol.iterator]: function() {
    let index = 0
    return {
      next: () => { // 这里必须是箭头函数: 为了this的指向iterableObj对象，而不是return的迭代器对象
        if (index < this.names.length) {
          return { done: false, value: this.names[index++]}
        } else {
          return { done: true, value: undefined}
        }
      }
    }
  }
}
console.log(iterableObj[Symbol.iterator]); // [Function: [Symbol.iterator]]

// 每次调用iterableObj[Symbol.iterator]()函数都是独立的，一次调用的next不会影响另一此调用的next
const iterator1 = iterableObj[Symbol.iterator]() // 这里必须要有 () ，这样才是调用这个函数
console.log(iterator1.next()); // { done: false, value: 'a' }
console.log(iterator1.next()); // { done: false, value: 'b' }
console.log(iterator1.next()); // { done: false, value: 'c' }
console.log(iterator1.next()); // { done: false, value: undefined }
// 第二此调用
const iterator2 = iterableObj[Symbol.iterator]() // 这里必须要有 () ，这样才是调用这个函数
console.log(iterator2.next()); // { done: false, value: 'a' }
console.log(iterator2.next()); // { done: false, value: 'b' }
console.log(iterator2.next()); // { done: false, value: 'c' }
console.log(iterator2.next()); // { done: false, value: undefined }

// for of 就是调用了iterableObj的iterableObj[Symbol.iterator]()函数
for (const item of iterableObj) {
  console.log(item);
}