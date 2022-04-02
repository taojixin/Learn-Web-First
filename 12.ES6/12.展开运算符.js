const nameg = ['asd', 'dfg', 'sdfg']
const nameh = 'tjx'
const infog = {name: 'tjx', age: 19}

// 1.函数调用时
function foo(x, y, z) {
  console.log(x,y,z);
}

foo(...nameg) // asd dfg sdfg
foo(...nameh) // t j x

// 2.构造数组时
const newNameg = [...nameg, ...nameh]
console.log(newNameg); // [ 'asd', 'dfg', 'sdfg', 't', 'j', 'x' ]

// 3.构造对象字面量时
const objh = {...infog, address: 'guand'}
console.log(objh); // { name: 'tjx', age: 19, address: 'guand' }
