// 1.引入express
const { response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则，接受亲求
// request 是对请求报文的封装
// response 是对响应报文的封装
// 接受get请求
app.get('/server', (request, response) => {
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置相应体
  response.send('HELLO EXPRESS')
});
// // 接受post请求
// app.post('/server', (request, response) => {
//   // 设置响应头 允许跨域
//   response.setHeader('Access-Control-Allow-Origin', '*');
//   // 设置相应体
//   response.send('HELLO EXPRESS POST')
// });
// 接收各种类型请求
app.all('/server', (request, response) => {
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Header', '*');
  // 设置相应体
  response.send('HELLO EXPRESS POST')
});

app.all('/json-server', (request, response) => {
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Header', '*');
  // 响应一个数据
  const data = {
    name: 'taojixin'
  };
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置相应体
  // send只能发送字符串或buffer
  response.send(str)
});

// IE缓存
app.get('/ie', (request, response) => {
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置相应体
  response.send('HELLO y7')
});

// 延时响应
app.get('/delay', (request, response) => {
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置相应体
  // response.send('延时响应')
  setTimeout(() => {
    response.send("延时响应")
  },3000)
});

// fetch服务
app.all('/fetch-server', (request, response) => {
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Header', '*');
  // 响应一个数据
  const data = {
    name: 'taojixin'
  };
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置相应体
  // send只能发送字符串或buffer
  response.send(str)
});

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务器已经启动，8000 端口监听中...")
})