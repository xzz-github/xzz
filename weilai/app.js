//1.加载响应模块
 const express = require("express");
 const mysql = require("mysql");
 const pool = require("./pool");
//2.创建express服务器
var  app = express();
app.use(express.static(__dirname+"/public"));
//3.绑定监听端口
app.listen(3000);

app.get("/nionews",(req,res)=>{
 // var nid = req.query.nid;
  var sql = " SELECT * FROM news ";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
  //  console.log(result);
  res.writeHead(200,{"Access-Control-Allow-Origin":"*"})
  res.write(JSON.stringify(result))
    res.end();
  });
});