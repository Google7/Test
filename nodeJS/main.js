var fs = require("fs");
var zlib = require("zlib");
var read = "read ";
var write = "Hello Stream";
var events = require("events");
var eventEmitter = new events.EventEmitter();
var service = require("./Service");
var router = require("./Router");

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
    var writeStream = fs.createWriteStream("./test.txt");
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
    var readStream = fs.createReadStream("./test.txt");
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
    var readStream = fs.createReadStream("./input.txt");
    var writeStream = fs.createWriteStream("./output.txt");
    readStream.pipe(writeStream);
    console.log("pipeStream !");
}

function compressFile() {
    fs.createReadStream("./test/test.txt")
        .pipe(zlib.createGzip().pipe(fs.createWriteStream("./test.zip")));
    console.log("compressFile !")
}

function decompressFile() {
    fs.createReadStream("./test.zip")
        .pipe(zlib.createGunzip().pipe(fs.createWriteStream("./test.txt")));
}

var arr = [];

function print(data) {
    if (typeof data === "string") {
        console.log(data);
    } else if (typeof data === "object") {
        for (const i in data) {
            console.log(i + "=>" + data[i]);
        }
    }
}

function getData(option, callback) {
    arr.push(option);
    if (callback && typeof callback === "function")
        callback(option);
}

var clientData = {
    id: 250,
    fullName: "",
    setUserName: function (firstName, lastName) {
        this.fullName = firstName + lastName;
        console.log(this.fullName);
    }
}

function getUserName(firstName, lastName, callback) {
    callback(firstName, lastName);
}

function getUsertInput(firstName, lastName, callback, obj) {
    callback.apply(obj, [firstName, lastName]);
}

function readFile() {
    fs.readFile("./test.txt", "utf-8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {
            console.log(data);
        }

    });
    console.log("程序执行结束");
}

function demo(err,fd){
    if(err){
        console.log(err);
        return;
    }
    var buf = new Buffer(8);
    fs.read(fd,buf,0,8,null,function(err,byte,buf){
        if(err){
            console.log(err);
            return;
        }
        console.log(byte);
        console.log(buf);
    })
}

//service.start(router.route);
//service.getMethod();
//service.postMethod();
service.fileUpload();