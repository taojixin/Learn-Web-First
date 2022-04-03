// 1.flat的使用
const nums = [10, 20, [2, 3], 90, [1, 4, [2, 4]], 90]
const newNums = nums.flat()
console.log(newNums); // 默认进行一次降维  [ 10, 20, 2, 3, 90, 1, 4, [ 2, 4 ], 90 ]  
const newNums2 = nums.flat(2)  // 进行两次降维
console.log(newNums2);  // [ 10, 20, 2, 3, 90, 1,  4, 2, 4, 90 ]

// 2.flatMap的使用
const nums2 = [10, 38, 40]
const newNums3 = nums2.flatMap(item => {
  return item * 2
})
const newNums4 = nums2.map(item => {
  return item * 2
}) 
console.log(newNums3); // [ 20, 76, 80 ]
console.log(newNums4); // [ 20, 76, 80 ]

// 3.flatMap的应用
const messaes = ['hello world', 'hello lyh', 'my name is loc']
const words = messaes.flatMap(item => {
  return item.split(' ')
})
console.log(words);  // 输出如下：
                      // [
                      //   'hello', 'world',
                      //   'hello', 'lyh',
                      //   'my',    'name',
                      //   'is',    'loc'
                      // ]
const words2 = messaes.map(item => {
  return item.split(' ') 
})
console.log(words2); // 输出如下：
                      // [
                      //   [ 'hello', 'world' ],
                      //   [ 'hello', 'lyh' ],
                      //   [ 'my', 'name', 'is', 'loc' ]
                      // ]
// 区别：flatMap是先进行map操作，再进行flat操作