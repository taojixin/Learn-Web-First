Promise.resolve('tjx')
// 等价于
const promisee = new Promise((resolve, rejest) => {
  resolve('tjx')
})

// promise可以传入三种参数：1.普通的参数 2.promise 3.实现了then方法的对象
// 1.普通参数
const promisep = Promise.resolve('adf')
promisep.then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err);
})
// 2.promise
const promisepro = Promise.resolve(new Promise((resolve, rejest) => {
  resolve('sfa')
}))
promisepro.then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err);
})
// 3.thenable
const promiseable = Promise.resolve({
  then: function(resolve, rejest) {
    resolve()
  }
})
promiseable.then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err);
})