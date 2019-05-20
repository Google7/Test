function list() {
    var arr = [8, 4, 1, 5, 3, 7, 9, 6, 2];
    var i, j, tmp;
    console.log(arr[0] + "--" + arr[1] + "--" + arr[2] + "--" + arr[3] + "--" +
        arr[4] + "--" + arr[5] + "--" + arr[6] + "--" + arr[7] + "--" + arr[8]);
    console.log("-------------------------");
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            console.log(arr[0] + "--" + arr[1] + "--" + arr[2] + "--" + arr[3] + "--" +
                arr[4] + "--" + arr[5] + "--" + arr[6] + "--" + arr[7] + "--" + arr[8]);
        }
        console.log("-------------------------");
    }
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        console.log(this.name);
    };
}
var person = new Person("jian", 23);

var arr = [1, 2, 2, 3, 3, 4, 5];

function demo(array) {
    var temp = [];
    for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
            temp.push(array[i]);
        }
    }
    return temp;
}

function runAsync1() {
    var p = new Promise(function (resolve) {
        //做一些异步操作
        setTimeout(function () {
            console.log('执行完成1');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}

function runAsync2() {
    var p = new Promise(function (resolve) {
        //做一些异步操作
        setTimeout(function () {
            console.log('执行完成2');
            resolve('随便什么数据2');
        }, 1000);
    });
    return p;
}

function runAsync3() {
    var p = new Promise(function (resolve) {
        //做一些异步操作
        setTimeout(function () {
            console.log('执行完成3');
            resolve('随便什么数据3');
        }, 1000);
    });
    return p;
}

function getNumber() {
    var p = new Promise(function (resolve, reject) {
        var n = Math.ceil(Math.random() * 10);
        setTimeout(function () {
            if (n <= 5) {
                resolve(n);
            } else {
                reject('数字太大' + " " + n);
            }
        }, 1000)
    })
    return p;
}

getNumber().then(function(data){
    console.log(data)
}).catch(function(reson){
    console.log(reson);
})