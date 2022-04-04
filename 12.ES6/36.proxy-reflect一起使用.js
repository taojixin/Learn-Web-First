// const obj = {
//   name: 'tjx',
//   age: 19
// }

// const objProxy = new Proxy(obj, {
//   get: function(target, key, reciver) {
//     console.log("get");
//     return Reflect.get(target, key)
//   },
//   set: function(target, key, newValue, receiver) {
//     console.log("set");
//     target[key] = newValue
//     // target[key] = newValue 与通过Reflect.set的区别是：后者有返回布尔值，代表是设置成功
//     const result = Reflect.set(target, key, newValue)
//     if(result) {0} else {}
//   }
// })
// objProxy.name = 'dfs'
// console.log(objProxy.name);