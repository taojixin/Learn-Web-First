const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // request对象中封装了客户端给我们服务器传递过来的所有信息
  console.log(req.url);
  console.log(req.method);// 请求方式，如Post，Get
  console.log(req.headers);// 请求头信息
  res.end('hello serve')
});

// 启动web服务器
// listen三个参数：第一个参数：端口号  第二个参数：本机（默认： 0.0.0）  第三个参数：启动成功后的回调函数
server.listen(8888, '127.0.0.1', () => {
  console.log("服务器启动成功！");
})