var countAndSay = function(n) {
    let output = [1]
    for(let i=1;i<n;i++){
        let count = 1
        let newStr = []
        for(let j=0;j<output.length;j++){
            if (output[j] === output[j+1]){
                count++
            } else {
                newStr.push(count, output[j])
                count = 1
            }
        } 
        output = newStr
    }
    return output.join('')
};