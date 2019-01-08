var fs = require("fs");
fs.readFile("test.txt", function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data.toString());
});
console.log("程序执行结束");

var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function () {
    console.log("连接成功");
    eventEmitter.emit("data");
}
eventEmitter.on("connection", connectHandler);
eventEmitter.on("data", function () {
    console.log("数据接收成功");
});
eventEmitter.emit("connection");
console.log("程序执行完毕");
