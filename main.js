var a = +prompt("son kiriting")
var b = +prompt("darajani kiriting")
var res;

if (isNaN(a) || isNaN(b)) {
    res = " boshidan kiriting"
} else if (a === 0 || b === 0) {
    res = " boshidan kiriting"
} else {
    var res = "javob " + Math.pow(a, b);
}
alert(res)
    