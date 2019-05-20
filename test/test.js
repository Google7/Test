function demo(c, d) {
    console.log(this.a + this.b + c + d);
}
var obj1 = {
    a: 3,
    b: 4
};
demo.call(obj1, 1, 2);
demo.apply(obj1, [5, 6]);

var obj2 = {
    user: "jian",
    fun: function () {
        console.log(this.user, this.fun);
    }
};
obj2.fun();

function ab() {
    this.user = "qichen";
}
var a = new ab();
console.log(a.user);

var fun = function () {
    console.log(fun.caller);
};

function ba() {
    fun();
}
ba();

var cc = function (x, y) {
    console.log(arguments, arguments.length, arguments.callee.length, arguments.callee);
    console.log(x * y);
    return x + y;
};
cc(2, 3, 4);
var dd = function (name, age) {
    this.name = name;
    this.age = age;
};
var obj3 = new dd("jian", 23);
dd.prototype.ss = 123;
console.log(obj3.ss, obj3.name);

function ee(name) {
    this.name = name;
    this.age = 23;
}
var obj4 = new ee("jian");
console.log(obj4.constructor.toString(), obj4.age);
var dd = '{ "employees" : [{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var jsonobj = JSON.parse(dd);
console.log(dd, jsonobj.employees[0].firstName);
var a = {
    x: 1
};

function aaa(a) {
    a.x++;
    console.log(a.x);
}
aaa(a);
console.log(a.x);

function test() {
    return this.firstName + this.lastName;
}
var demo = {
    firstName: "jian",
    lastName: "qichen",
    age: 23,
    fun: test
};
console.log(demo.fun());

function test2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var xx = new test2("aaa", "bbb");
console.log(xx);

function fun1() {
    var n = 1;
    add = function () {
        n += 1;
    };

    function fun2() {
        console.log(n);
    }
    return fun2;
}

var res = fun1();
res();
add();
res();

var object = {
    name: "My Object",

    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        };
    }
};

console.log(object.getNameFunc()());

function abc(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var asd = new abc("jian", "qichen");
abc.prototype.age = 23;
console.log(asd.age);
console.log(abc.prototype);

var bibi = function () {
    var count = 1;
    return function () {
        console.log(count);
        return count += 1;
    };
}();
bibi();
bibi();
bibi();

function call1(callback) {
    console.log("aaa");
    var a = 3;
    var b = 4;
    return callback(a, b);
}

function call2(a, b) {
    console.log("bbb");
    return a * b;
}

var nn = call1(call2);
console.log(nn);

var jsobj = {
    name: "jian",
    age: 23
};

var jsonstr = '{"emp":[' +
    '{"name":"dog","age":15},' +
    '{"name":"cat","age":12},' +
    '{"name":"mouse","age":10}]}';
console.log(jsobj);
console.log(JSON.parse(jsonstr));

for (var x in jsobj) {
    console.log(jsobj[x]);
}

var animals = {
    "dog": [{
            "name": "哈士奇",
            "age": 12
        },
        {
            "name": "田园犬",
            "age": 15
        },
        {
            "name": "柴犬",
            "age": 16
        }
    ],
    "cat": [{
            "name": "汤姆猫",
            "age": 13
        },
        {
            "name": "加菲猫",
            "age": 17
        },
        {
            "name": "野猫",
            "age": 18
        }
    ]
};

function Hello() {
    var name;
    this.setName = function (names) {
        name = names;
    };
    this.sayHello = function () {
        console.log("hello " + name);
    };
}
module.exports = Hello;

function sayHello(param) {
    console.log("Hello" + param);
}

function execute(task, param) {
    task(param);
}
execute(sayHello, "World");

var str = "abCdefg";
console.log(str.split('').reverse().join());
console.log(typeof str.split(''));
console.log(typeof str.split('').reverse());
console.log(typeof str.split('').reverse().join());

var arr = new Array(3);
arr[0] = 1;
arr[1] = 3;
arr[2] = 2;
console.log(arr);
console.log(arr.sort());
