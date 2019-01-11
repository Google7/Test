var express = require("express");
var app = express();
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
app.get("/list",function(req,res){
    res.send("Hello List !")
});

var service = app.listen(8084,function(){
    var host = service.address().address;
    var port = service.address().port;
    console.log(host,port);
});



