const http = require('http')

// 方式一：
const server1 = http.createServer((req,res) => {
  res.end("serve1")
})
// server1.listen(8000, () => {
//   console.log("server1启动成功");
// })

// const server2 = http.createServer((req,res) => {
//   res.end("serve2")
// })
// server2.listen(8001, () => {
//   console.log("server2启动成功");
// })

// 方式二：
// const server2 = new http.Server((req,res) => {
//   res.end("serve2")
// })
// server2.listen(8001, () => {
//   console.log("server2启动成功");
// })


// 2.监听方法的使用
server1.listen(8000, () => {
  console.log("server1启动成功");
  console.log(server1.address().port);// 获取端口号
})