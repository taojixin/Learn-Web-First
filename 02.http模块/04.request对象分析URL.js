const http = require('http')
const url = require('url')
// 用于对query进行结构
const qs = require('querystring')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 最基本的请求方式
  // if (req.url === '/login') {
  //   res.end("欢迎回来");
  // } else if (req.url === '/users') {
  //   res.end("用户列表");
  // } else {
  //   res.end("错误请求，检查")
  // }
  console.log(url.parse(req.url));
  const {pathname, query} = url.parse(req.url);
  console.log(pathname);
  console.log(query);
  const {username, id} = qs.parse(query);
  console.log(username, id);



});

// 启动web服务器
// listen三个参数：第一个参数：端口号  第二个参数：本机（默认： 0.0.0）  第三个参数：启动成功后的回调函数
server.listen(8888, '127.0.0.1', () => {
  console.log("服务器启动成功！");
})