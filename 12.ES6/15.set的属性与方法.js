const arr1 = [33, 10, 26, 30, 33, 26]
const arrSet1 = new Set(arr1)

// 1.set的属性 size
console.log(arrSet1.size); // 4

// 2.set的方法
arrSet1.add(1000)
console.log(arrSet1); // Set(5) { 33, 10, 26, 30, 1000 }

arrSet1.delete(1000) // 删除这里只能传入值，不是下标
console.log(arrSet1); // Set(4) { 33, 10, 26, 30 }

console.log(arrSet1.has(33)); // true 判断是否有这个值，返回布尔值

arrSet1.clear()
console.log(arrSet1); // Set(0) {}