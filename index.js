/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(process.env.PORT || '3000', function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});


app.get("/", function(req, res, next){
    res.send("!");
});

app.get("/", function(req, res, next){
  res.send("!");
});



function connect(){

}

const io = require('socket.io-client');
const socket = io('https://remopi.herokuapp.com/');

console.log("1");
socket.on('connect', () => {
  console.log("2");
    socket.emit("greeting", {"message":'send message.'});
    socket.emit("messaging", {"message":'send message.'});
    socket.on('messaged', (obj) => {
        // io.emit('chat message', msg);
        console.log("message:"+obj.message);
    });
});