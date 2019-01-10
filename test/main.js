var fs = require("fs");
var zlib = require("zlib");
var read = "read ";
var write = "Hello Stream";
var events = require("events");
var eventEmitter = new events.EventEmitter();

function readFile() {
    fs.readFile("./test/test.txt", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data.toString());
    });
    console.log("程序执行结束");
}

function eventEmitter() {
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
}

function writeStream() {
    var writeStream = fs.createWriteStream("./test/test.txt");
    writeStream.write(write, "UTF-8");
    writeStream.end();
    writeStream.on("finish", function () {
        console.log("写入完成");
    });
    writeStream.on("error", function (err) {
        console.log("write " + err.stack);
    });
    console.log("wreiteStream !");
}

function readStream() {
    var readStream = fs.createReadStream("./test/test.txt");
    readStream.setEncoding("UTF-8");
    readStream.on("data", function (chunk) {
        console.log("读取成功");
        read += chunk;
    });
    readStream.on("end", function () {
        console.log(read);
    });
    readStream.on("error", function (err) {
        console.log("read " + err.stack);
    });
    console.log("readStream !");
}

function pipeStream() {
    var readStream = fs.createReadStream("./test/input.txt");
    var writeStream = fs.createWriteStream("./test/output.txt");
    readStream.pipe(writeStream);
    console.log("pipeStream !");
}

function compressFile() {
    fs.createReadStream("./test/test.txt")
        .pipe(zlib.createGzip().pipe(fs.createWriteStream("./test/test.zip")));
    console.log("compressFile !")
}

function decompressFile() {
    fs.createReadStream("./test/test.zip")
        .pipe(zlib.createGunzip().pipe(fs.createWriteStream("./test/test2.txt")));
}

var service = require("./Service");
var router = require("./Router");
service.start(router.route);
