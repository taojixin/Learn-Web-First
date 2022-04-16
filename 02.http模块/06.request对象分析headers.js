const http = require('http')
const url = require('url')
// 用于对query进行结构
const qs = require('querystring')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  console.log(req.headers);
});

// 启动web服务器
server.listen(8888, '127.0.0.1', () => {
  console.log("服务器启动成功！");
})