class Abc {
  constructor(name) {
    this.name = name
  }

  set name(newName) {
    console.log("设置了这个属性name");
  }
  get name() {
    console.log("调用或获取了这个属性name");
    // return this.name
    return "获取" // get必须有返回值
  }
}
console.log(Abc.name);