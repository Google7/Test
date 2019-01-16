function demo(){
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
var num = 20;
console.log(num.toString(2));
console.log(50 ^ 10)