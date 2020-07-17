// app.js

// 호출
var express = require("express");

// 기능수행
var app = express();

// --------------------------------------------
app.listen(3000,function(){
  console.log("웹서버가 구현되었습니다. localhost:3000");
});

app.get('/',function(req,res){
  res.send('<h1>지금 당신은 서버를 구축하였습니다.</h1>')
});

app.get('/product',function(req,res){
  res.send('<p>제품내용을 확인해보세요</p>')
});