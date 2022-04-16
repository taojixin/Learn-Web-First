// 程序中如何进行判断以及获取对应的数据呢？
// 这里我们需要判断接口是 /users，并且请求方式是POST方法去获取传入的数据；
// 获取这种body携带的数据，我们需要通过监听req的 data事件来获取；

const http = require('http')
// 导入url模块，用于获取req中的url中的pathname
const url = require('url')
// 用于对query进行结构
const qs = require('querystring')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  const {pathname} = url.parse(req.url);
  if(pathname === '/login') {
    if(req.method === 'POST') {
      // 拿到body中的数据
      // 将拿到的body中的数据（buffer)转字符串
      req.setEncoding('utf-8')
      req.on('data', (data) => {
        // console.log(data.toString());
        // console.log(data);//字符串
        const {username,password} = JSON.parse(data);
        console.log(username, password);
      })
    }
  }
});
// 启动web服务器
server.listen(8888, '127.0.0.1', () => {
  console.log("服务器启动成功！");
})