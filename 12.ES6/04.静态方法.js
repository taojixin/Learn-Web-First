class Asd {
  constructor(asd) {
    this.asd = asd
  }
  
  haox() {
    console.log("不是静态方法不可以直接调用");
  }

  static create() {
    console.log("你调用了静态方法");
  }
}
Asd.create() // 你调用了静态方法
// Asd.haoX() // 报错，不是静态方法不能直接调用，需要new一个实例才能调用
var a1 = new Asd()
a1.haox() // 不是静态方法不可以直接调用