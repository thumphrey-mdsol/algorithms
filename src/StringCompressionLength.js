var compress = function(chars) {
    let char = ''
    let count = 1
    let length = chars.length
    if(chars.length===1)return chars.length
    for(let i=length-2;i>=-1;i--){
        if(chars[i] === chars[i+1]){
            count++
        } else if(count>1) {
            chars.splice((i+2),count-1, ...count.toString().split(''))
            count = 1
        }
    }
    return chars.length
};