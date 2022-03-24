// Object.defineProperties() 方法直接在一个对象上定义 多个 新的属性或修改现有属性，并且返回该对象。
var obj = {
  _age: 18
}
Object.defineProperties(obj, {
  name: {
    writable: true,
    value: 'tjx'
  },
  age: {
    get: function () {
      return this._age
    }
  }
})