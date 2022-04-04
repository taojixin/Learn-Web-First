const obj = {
  name: 'tjx',
  age: 19
}

Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`监听到obj对象的${key}属性被访问`);
      return value
    },
    set: function(newValue) {
      console.log(`监听到obj对象的${key}属性被修改`);
      value = newValue
    }
  })
})
obj.name = 'kis'
obj.age = 30

console.log(obj.name);
console.log(obj.age);
// 传统监听方法的弊端，不能监听新的属性的添加
obj.height = 1.88