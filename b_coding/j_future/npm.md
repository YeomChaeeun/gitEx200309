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
  
// $ yarn add express
$ npm express -v
6.13.4
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



### pakage.json

```json
{
  "name": "j_future",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "testFile": "패키지 json 기능 일부를 구현"
  },
  "author": "",
  "license": "ISC",
  "keywords": [],
  "dependencies": {
    "express": "^4.17.1",
    "exxpress": "^1.0.0"
  },
  "devDependencies": {},
  "description": ""
}

```



## nodemon

```shell
$ nodemon --version
$ npm install -g nodemon
$ nodemon --version
2.0.4

$ npm run testFile
$ yarn testFile



```





## 서버

https://www.heroku.com/

- script에 start를 적어줘야함

```json
{
  "name": "j_future",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start":"nodemon app.js"
  },
  "author": "",
  "license": "ISC",
  "keywords": [],
  "dependencies": {
    "express": "^4.17.1",
    "exxpress": "^1.0.0"
  },
  "devDependencies": {},
  "description": ""
}

```

