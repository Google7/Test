var express = require("express");
var fs = require("fs");
var app = express();

var user = {
    "user4" : {
       "name" : "jianqichen",
       "password" : "admin",
       "profession" : "monkey",
       "id": 4
    }
 }
 
app.use(express.static("public"));
app.get("/",function(req,res){
    res.send("Hello Get !");
});
app.post("/",function(req,res){
    res.send("Hello Post !");
});
app.delete("/del",function(req,res){
    res.send("Hello Delete !");
});
app.get("/listUser",function(req,res){
    fs.readFile(`${__dirname}/user.json`,"utf8",function(err,data){
        if(err) throw err;
        console.log(data);
        res.send(JSON.stringify(data));
    })
});
app.get("/addUser",function(req,res){
    fs.readFile(`${__dirname}/user.json`,"utf8",function(err,data){
        if(err) throw err;
        data = JSON.parse(data);
        data.user4 = user.user4;
        console.log(data);
        res.send(JSON.stringify(data.user4.name));
    })  
});

app.get("/delUser",function(req,res){
    fs.readFile(`${__dirname}/user.json`,"utf8",function(err,data){
        if(err) throw err;
        data = JSON.parse(data);
        delete data["user1"];
        console.log(data);
        res.send(JSON.stringify(data));
    })  
});

var service = app.listen(8084,function(){
    var host = service.address().address;
    var port = service.address().port;
    console.log(host,port);
});



