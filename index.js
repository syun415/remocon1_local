/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(process.env.PORT || '3000', function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});


// 写真リストを取得するAPI
app.get("/", function(req, res, next){
    res.send("!");
});