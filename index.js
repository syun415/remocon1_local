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
            case "fpwr":
                command ="irsend SEND_ONCE fan PWR";
                break;
            case "wlow":
                command ="irsend SEND_ONCE fan WLOW";
                break;
            case "wmid":
                command ="irsend SEND_ONCE fan WMID";
                break;
            case "whigh":
                command ="irsend SEND_ONCE fan WHIGH";
                break;
            case "rlow":
                command ="irsend SEND_ONCE fan RLOW";
                break;
            case "rmid":
                command ="irsend SEND_ONCE fan RMID";
                break;
            case "rhigh":
                command ="irsend SEND_ONCE fan RHIGH";
                break;
            case "tim1":
                command ="irsend SEND_ONCE fan TIM1";
                break;
            case "tim2":
                command ="irsend SEND_ONCE fan TIM2";
                break;
            case "tim4":
                command ="irsend SEND_ONCE fan TIM4";
                break;
            case "swg":
                command ="irsend SEND_ONCE fan SWG";
                break;
            case "tpwr":
                command ="irsend SEND_ONCE tv PWR";
                break;
            case "1ch":
                command ="irsend SEND_ONCE tv 1CH";
                break;
            case "2ch":
                command ="irsend SEND_ONCE tv 2CH";
                break;
            case "3ch":
                command ="irsend SEND_ONCE tv 3CH";
                break;
            case "4ch":
                command ="irsend SEND_ONCE tv 4CH";
                break;
            case "5ch":
                command ="irsend SEND_ONCE tv 5CH";
                break;
            case "6ch":
                command ="irsend SEND_ONCE tv 6CH";
                break;
            case "7ch":
                command ="irsend SEND_ONCE tv 7CH";
                break;
            case "8ch":
                command ="irsend SEND_ONCE tv 8CH";
                break;
            case "9ch":
                command ="irsend SEND_ONCE tv 9CH";
                break;
            case "10ch":
                command ="irsend SEND_ONCE tv 10CH";
                break;
            case "11ch":
                command ="irsend SEND_ONCE tv 11CH";
                break;
            case "12ch":
                command ="irsend SEND_ONCE tv 12CH";
                break;
            case "vup":
                command ="irsend SEND_ONCE tv UP";
                break;
            case "vdown":
                command ="irsend SEND_ONCE tv DOWN";
                break;
            case "fpwr-tim1":
                command ="irsend SEND_ONCE fan PWR TIM1";
                break;
            case "fpwr-tim2":
                command ="irsend SEND_ONCE fan PWR TIM2";
                break;
            case "fpwr-tim4":
                command ="irsend SEND_ONCE fan PWR TIM4";
                break;
            case "fpwr-wlow":
                command ="irsend SEND_ONCE fan PWR WLOW";
                break;
            case "fpwr-wmid":
                command ="irsend SEND_ONCE fan PWR WMID";
                break;
            case "fpwr-whigh":
                command ="irsend SEND_ONCE fan PWR WHIGH";
                break;
            case "wlow-tim1":
                command ="irsend SEND_ONCE fan WLOW TIM1";
                break;
            case "wlow-tim2":
                command ="irsend SEND_ONCE fan WLOW TIM2";
                break;
            case "wlow-tim4":
                command ="irsend SEND_ONCE fan WLOW TIM4";
                break;
        }
        if(command !=""){
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    //console.error('[ERROR] ${error}');
                    return;
                }
                //console.log(`stdout: ${stdout}`);
                //console.log(`stderr: ${stderr}`);
            });
        }
       


    });
});