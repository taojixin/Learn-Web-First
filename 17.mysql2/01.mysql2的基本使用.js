const mysql = require('mysql2');

// 1.创建数据库连接
const connecton = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'atguigudb',
  user: 'root',
  password: '123456'
})

// 2.执行mysql语句
const statement = `
SELECT * FROM countries
`

connecton.query(statement, (err, results, fields) => {
  console.log(results);
  // 关闭
  connecton.end();
  // 强制关闭
  connecton.destroy();
})
