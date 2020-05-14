var removeKdigits = function(num, k) {
    if(k===num.length)return '0'
    let peak = 0;
    function firstPeak(str) {
        for(let i = peak-1; i < str.length; i++) {
            if(str[i] > str[i+1]) return i
        }
        return str.length - 1;
    }
    while(k--) {
        peak = firstPeak(num);
        num = num.slice(0, peak) + num.slice(peak+1);
    }
    while(num[0] === '0') num = num.slice(1);
    return num.length ? num : '0'
};