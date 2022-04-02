let obj4 = {
  name: 'tjx'
}, obj5 = {
  age: 12
}
// 1.map的创建
const map = new Map()
map.set(obj4, 'aaa')
map.set(obj5, 'bbb')
map.set(1, 'ccc')
console.log(map); // Map(3) { { name: 'tjx' } => 'aaa', { age: 12 } => 'bbb', 1 => 'ccc' }

// 2.map的常见属性和方法
console.log(map.size); // 3
map.set('tjx', 'ddd')
console.log(map); // 输出如下：
                              // Map(4) {
                              //   { name: 'tjx' } => 'aaa',
                              //   { age: 12 } => 'bbb',
                              //   1 => 'ccc',
                              //   'tjx' => 'ddd'
                              // }
console.log(map.get('tjx')); // ddd

console.log(map.has(1)); // true

map.delete('tjx')
console.log(map); // Map(3) { { name: 'tjx' } => 'aaa', { age: 12 } => 'bbb', 1 => 'ccc' }

// map.clear()
// console.log(map); // Map(0) {}

// 3.map的遍历
map.forEach((item, key) => {
  console.log(item, key); // 输出如下：
                          // aaa { name: 'tjx' }
                          // bbb { age: 12 }
                          // ccc 1
})

for(const item of map) {
  console.log(item);  // 输出如下：
                      // [ { name: 'tjx' }, 'aaa' ]
                      // [ { age: 12 }, 'bbb' ]
                      // [ 1, 'ccc' ]
}

for (const [key, value] of map) {
  console.log(key, value); // 输出如下：
                            // { name: 'tjx' } aaa
                            // { age: 12 } bbb
                            // 1 ccc
}

