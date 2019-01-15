function myfun(aa) {
    this.aa = aa;
    this.fun = function () {}
    var obj = new Object();
    obj.dd = "dd"
    return obj;
}
myfun.bb = "bb";
myfun.prototype.cc = "cc";
var o = new myfun("aa");
console.log(o.dd);

function circle(r) {
    this.r = r;
}
circle.pi = 3.14;
circle.prototype.area = function () {
    return circle.pi;
}
var c = new circle(10);
console.log(c.area());

var circle2 = function () {
    var obj = new Object();
    obj.pi = 3.14;
    obj.area = function (r) {
        return this.pi * r;
    }
    return obj;
}
var c = new circle2();
console.log(c.area(2));

var circle3 = new Object();
circle3.pi = 3.14;
circle3.area = function (r) {
    return this.pi * r;
}
console.log(circle3.area(3));

var circle4 = {
    "pi": 3.14,
    "area": function (r) {
        return this.pi * r;
    }
}
console.log(circle4.area(4));

var circle5 = new Function("this.pi = 3.14,this.area = function(r){return this.pi * r}");
console.log(new circle5().area(5));

var dom = function () {}
dom.show = function () {
    console.log("show");
}
dom.show();
dom.prototype.display = function () {
    console.log("protype");
}
var d = new dom();
d.display();

var dom2 = function () {
    var obj = new Object();
    obj.name = "jian";
    this.sex = "boy";
    this.success = function () {
        console.log("success");
    }
    obj.fun = function () {
        console.log(this.name);
    }

}
var d = new dom2();
d.success();

var html = {
    name: "object",
    success: function () {
        this.say = function () {
            console.log("Hello");
        }
        console.log("World");
    }
}
html.success.prototype.show = function () {
    console.log("show");
}
var ss = new html.success();
console.log(html.name);
ss.say();
html.success();
ss.show();

var html2 = new Object();
html2.name = "object2";
html2.success = function () {
    this.say = function () {
        console.log("Hello2")
    }
    console.log("World2");
}
html2.success.prototype.show = function () {
    console.log("show2")
}

var ss = new html2.success();
console.log(html2.name);
ss.say();
html2.success();
ss.show();

var persion = function () {
    var name = "default";
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        }
    }
}();
console.log(persion.getName());
persion.setName("jian");
console.log(persion.getName());

function persion2() {
    var name = "default2";
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            return name = newName;
        }
    }
}
var per = new persion2();
per.setName("qichen");
console.log(per.getName());
var jian = function () {}
jian.prototype = new persion2();
jian.prototype.say = function () {
    console.log("jianqichen");
}
var j = new jian();
j.setName("JQC");
j.say();
console.log(j.getName());

var close = function () {
    var n = 0;
    return function () {
        console.log(n);
        n += 1;
    }
}();
close();
close();
close();

var json = {
    "name": "jian",
    "age": 23,
    "sex": "boy",
    "phone": "10086"
}

for (var i in json) {
    console.log(i + ":" + json[i])
}

function funA() {
    console.log("funA")
    var x = 2;
    var y = 3;
    return funB(x, y);
}

function funB(x, y) {
    console.log("funB");
    return x * y;
}
console.log(funA(funB));

