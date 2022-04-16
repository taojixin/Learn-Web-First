const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {

  // 响应结果
  res.write("hello world")
  res.end('hello serve')
});

// 启动web服务器
// listen三个参数：第一个参数：端口号  第二个参数：本机（默认： 0.0.0）  第三个参数：启动成功后的回调函数
server.listen(8888, 'localhost', () => {
  console.log("服务器启动成功！");
})