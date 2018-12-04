/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();
var exec = require('child_process').exec;

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
        var command ="";
        switch(obj.message){
            case "power":
                command ="irsend SEND_ONCE fan PWR";
                break;
            case "whigh":
                command ="irsend SEND_ONCE fan WHIGH";
                break;
            case "wlow":
                command ="irsend SEND_ONCE fan WLOW";
                break;
        }
        if(command !=""){
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error('[ERROR] ${error}');
                    return;
                }
                //console.log(`stdout: ${stdout}`);
                //console.log(`stderr: ${stderr}`);
            });
        }
       


    });
});