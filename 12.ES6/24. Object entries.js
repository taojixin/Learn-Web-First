const obj = {
  name: 'tjx',
  age: 18
}

console.log(Object.entries(obj)); // [ [ 'name', 'tjx' ], [ 'age', 18 ] ]
const objEntries = Object.entries(obj)
objEntries.forEach(item => {
  console.log(item[0], item[1]);
})

console.log(Object.entries(['abc', 'sgc', 'aej'])); // [ [ '0', 'abc' ], [ '1', 'sgc' ], [ '2', 'aej' ] ]
console.log(Object.entries('adc')); // [ [ '0', 'a' ], [ '1', 'd' ], [ '2', 'c' ] ]