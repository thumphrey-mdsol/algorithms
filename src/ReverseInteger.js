var reverse = function(x) {
    let num = parseInt(x.toString().split('').reverse().join(''))
    if (num < -(2 ** 31) || num > 2 ** 31 - 1) {
        return 0;
    }
    return x>0? num : num*-1
};