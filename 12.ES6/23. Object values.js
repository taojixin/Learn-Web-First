const obj = {
  name: 'tjx',
  age: 18
}

console.log(Object.keys(obj)); // [ 'name', 'age' ]
console.log(Object.values(obj)); // [ 'tjx', 18 ]
// 用到非常少
console.log(Object.values(['abc', 'dxa', 'dsx'])); // [ 'abc', 'dxa', 'dsx' ]
console.log(Object.values("abx")); // [ 'a', 'b', 'x' ]