var age = 18
var obj1 = {
  // age : age
  age,    // 1.属性的简写

  // 2.方法名简写
  // foo: function() {

  // }
  foo() {  // 简写

  },

  // 3.计算属性
  [age + 123]: 'hhhhh',
  [age + '123']: 'hhhhh'
}

console.log(obj1);  // { '141': 'hhhhh', '18123': 'hhhhh', age: 18, foo: [Function: foo] }

