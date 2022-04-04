// const obj = {
//   _name: 'ujx',
//   get name() {
//     return this._name // 传递了reveiver后这里的this指向objProxy
//   },
//   set name(newValue) {
//     this._name = newValue
//   }
// }

// const objProxy = new Proxy(obj, {
//   get: function(target, key, receiver) {
//     // reveiver 是创建出来的代理对象
//     console.log("get方法别访问---", key, receiver); 
//     return Reflect.get(target, key, receiver)
//   },
//   set: function(target, key, newValue, receiver) {
//     console.log("set方法被访问------",key);
//     Reflect.set(target, key, newValue, receiver)
//   }
// })
// objProxy.name = 'ksafa'  // 返回了两次 set方法被调用---- 但是两次key值不同，第一次为name，第二次为_name