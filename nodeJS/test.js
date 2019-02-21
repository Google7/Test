function list() {
    var arr = [8, 4, 1, 5, 3, 7, 9, 6, 2];
    var i, j, tmp;
    console.log(arr[0] + "--" + arr[1] + "--" + arr[2] + "--" + arr[3] + "--" +
        arr[4] + "--" + arr[5] + "--" + arr[6] + "--" + arr[7] + "--" + arr[8]);
    console.log("-------------------------")
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
        console.log("-------------------------")
    }
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        console.log(this.name);
    }
}
var person = new Person("jian", 23);

var arr = [1, 2, 2, 3, 3, 4, 5];


var newArr = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur)
    return prev;
}, []);
console.log(newArr);

function demo(array){
    var temp = [];
    for (let i = 0; i < array.length; i++) {
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i])
        }
    }
    return temp;
}

console.log(demo(arr));

var aa = [1,3,5,2,7,4,8,6];
console.log(aa.sort().reverse().join(" ").split(/ /))


