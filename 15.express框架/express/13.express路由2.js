const express = require('express')
const router = require('./12.express路由1')

const app = express();

app.use('/user', router);
app.use('/user/id', router);
console.log(app);

app.listen(8000, () => {
  console.log("启动成功");
})