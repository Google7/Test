var http = require("http");
var fs = require("fs");
var url = require("url");
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var database = require("./DataBase")

function start(route) {
    function service(request, response) {
        var pathName = url.parse(request.url).pathname;
        if (pathName == "/favicon.ico") {
            return;
        }
        console.log("service=>" + pathName);
        fs.readFile(pathName.substr(1), function (err, data) {
            if (err) {
                console.log(err)
                response.writeHead(404, {
                    "Content-Type": "text/html"
                })
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.write(data.toString());
                response.end();
            }
        });
        route(pathName);
    }
    http.createServer(service).listen(8082);
    console.log(`http://localhost:8082/index.html`);
}
exports.start = start;

function getMethod() {
    var app = express();
    app.use(express.static("public"));
    app.get("/index.html", function (req, res) {
        res.sendFile(`${__dirname}/index.html`);
    });
    app.get("/test.html", function (req, res) {
        res.sendFile(`${__dirname}/test.html`);
    });
    app.get("/process_get", function (req, res) {
        var response = {
            firstName: req.query.first_name,
            lastName: req.query.last_name
        };
        console.log(response);
        res.end(JSON.stringify(response));
    });

    var server = app.listen(8122, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log(host, port);
    });
}
exports.getMethod = getMethod;

function postMethod() {
    var app = express();
    var urlencodeParser = bodyParser.urlencoded({
        extended: false
    });
    app.use(express.static("public"));
    app.get("/index.html", function (req, res) {
        res.sendFile(`${__dirname}/index.html`);
    });
    app.get("/test.html", function (req, res) {
        res.sendFile(`${__dirname}/test.html`);
    });
    app.post("/process_post", urlencodeParser, function (req, res) {
        var response = {
            firstName: req.body.first_name,
            lastName: req.body.last_name
        };
        console.log(response);
        res.end(JSON.stringify(response));
    });

    var server = app.listen(8122, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log(host, port);
    });
}
exports.postMethod = postMethod;

function fileUpload() {
    var app = express();
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(multer({
        dest: "/tmp/"
    }).array("image"));
    app.get("/index.html", function (req, res) {
        res.sendFile(`${__dirname}/index.html`);
    });
    app.post("/file_upload", function (req, res) {
        console.log(req.files[0]);
        var des_file = `${__dirname}/${req.files[0].originalname}`;
        fs.readFile(req.files[0].path, function (err, data) {
            if (err) throw err;
            fs.writeFile(des_file, data, function (err) {
                if (err) throw err;
                var response = {
                    message: "Successfully",
                    fileName: req.files[0].originalname
                }
                console.log(response);
                res.end(JSON.stringify(response));
            });
        });
    });

    var server = app.listen(8124, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log(host, port);
    });
}
exports.fileUpload = fileUpload;

function login(){
    var app = express();
    var urlencodeParser = bodyParser.urlencoded({
        extended:false
    });
    app.get("/login.html",function(req,res){
        res.sendFile(`${__dirname}/login.html`);
    });
    app.post("/process_login",urlencodeParser,function(req,res){
        var userName = req.body.userName;
        var userPwd = req.body.userPwd;
        console.log(userName,userPwd)
        var result = database.toLogin([userName,userPwd]);
        console.log(result);
        if(result){
            app.get("/index.html",function(req,res){
                res.sendFile(`${__dirname}/index.html`);
            });
        }else{
            res.end("Error");
        }
    });

    var server = app.listen(8320, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log(host, port);
    });
}
exports.login = login;