# node js



.gitignore

/media/youtube/
/node_modules

```shell
$ npm init 

$ npm init -y

$ npm install express --save

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN j_future@1.0.0 No description
npm WARN j_future@1.0.0 No repository field.

+ express@4.17.1
  added 50 packages from 37 contributors and audited 50 packages in 1.78s
  found 0 vulnerabilities
  
$ yarn add express
```



- node js를 통해 서버를 불러와서 사용함

```js
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
```

- ctrl + C 키로 껏다가, npm app 으로 구동시킴

