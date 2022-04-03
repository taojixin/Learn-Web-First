let objp = {
  name: 'tjx'
}
const registry = new FinalizationRegistry(value => {
  console.log("对象被销毁了", value);
})
registry.register(objp, 'obj')

objp = null