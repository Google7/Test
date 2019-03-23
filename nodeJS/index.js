function demo(){
    var n = 0;
    function demo2(){
        console.log(n);
        return n++;
    }
    return demo2;
}


var aa = demo();
console.log(demo()())