var util = require("util");
function Base(){
    this.name ="jian";
    this.age = 23;
    this.sayHello = function(){
        console.log(`Hello ${this.name}`);
    }
}

Base.prototype.showName = function(){
    console.log(this.name);
}
function Sub(){
    this.name = "Sub";
}
util.inherits(Sub,Base);
var base = new Base();
base.showName();
base.sayHello();
console.log(base);
var sub = new Sub();
sub.showName();
console.log(sub);

function Persion(name){
    this.name = name;
    this.toStrintg = function(){
        return this.name;
    }
}
var persion = new Persion("jian");
console.log(util.inspect(persion));