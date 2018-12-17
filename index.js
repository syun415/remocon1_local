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
                command ="irsend SEND_ONCE tv.conf PWR";
                break;
            case "guide":
                command ="irsend SEND_ONCE tv.conf GUIDE";
                break;
            case "chg":
                command ="irsend SEND_ONCE tv.conf CHG";
                break;
            case "bgh":
                command ="irsend SEND_ONCE tv.conf BGH";
                break;
            case "1":
                command ="irsend SEND_ONCE tv.conf 1";
                break;
            case "2":
                command ="irsend SEND_ONCE tv.conf 2";
                break;
            case "3":
                command ="irsend SEND_ONCE tv.conf 3";
                break;
            case "4":
                command ="irsend SEND_ONCE tv.conf 4";
                break;
            case "5":
                command ="irsend SEND_ONCE tv.conf 5";
                break;
            case "6":
                command ="irsend SEND_ONCE tv.conf 6";
                break;
            case "7":
                command ="irsend SEND_ONCE tv.conf 7";
                break;
            case "8":
                command ="irsend SEND_ONCE tv.conf 8";
                break;
            case "9":
                command ="irsend SEND_ONCE tv.conf 9";
                break;
            case "10":
                command ="irsend SEND_ONCE tv.conf 10";
                break;
            case "11":
                command ="irsend SEND_ONCE tv.conf 11";
                break;
            case "12":
                command ="irsend SEND_ONCE tv.conf 12";
                break;
            case "up":
                command ="irsend SEND_ONCE tv.conf UP";
                break;
            case "down":
                command ="irsend SEND_ONCE tv.conf DOWN";
                break;
            //ここから複数動作
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