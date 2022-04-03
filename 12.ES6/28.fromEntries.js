const obj = {
  name: 'tjx',
  age: 19,
  height: 1.88
}
const entries = Object.entries(obj)
console.log(entries); // [ [ 'name', 'tjx' ], [ 'age', 19 ], [ 'height', 1.88 ] ]
// 传统方法
const newObj1 = {}
for (const entry of entries) {
  newObj1[entry[0]] = entry[1]
}
console.log(newObj1); // { name: 'tjx', age: 19, height: 1.88 }
// 使用ES10新增方法
const newObj2 = Object.fromEntries(entries)
console.log(newObj2); // { name: 'tjx', age: 19, height: 1.88 }
console.log("(((((((((");
// 应用
const queryString = 'name=tjx&age=19&height=1.88'
const queryParams = new URLSearchParams(queryString)
console.log(queryParams); // URLSearchParams { 'name' => 'tjx', 'age' => '19', 'height' => '1.88' }
for (const param of queryParams) {
  console.log(param); // 输出如下：
                                // [ 'name', 'tjx' ]
                                // [ 'age', '19' ]
                                // [ 'height', '1.88' ]
}
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj); // { name: 'tjx', age: '19', height: '1.88' }