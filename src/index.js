module.exports = function reverse (n) {
    str=String(Math.abs(n));
    var str_array=str.split("");
    str_array=str_array.reverse();
    str_array=str_array.join("");
    return Number(str_array);
}
