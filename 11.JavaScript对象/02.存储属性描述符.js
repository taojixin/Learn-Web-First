var obj = {
  name: 'tjx',
  age: 19
}
var address = "成都"
Object.defineProperty(obj, 'address', {
  configurable: true,
  enumerable: true,
  get: function () {
    // 当address被调用时触发get里面的函数
    console.log("getter");
    return address
  },
  set: function (value) {
    address = value
    // 当address的值被改时调用set里的函数
    console.log("setter");
  }
})
console.log(obj.address);  // 成都
obj.address = '杭州'
console.log(obj.address); // 杭州