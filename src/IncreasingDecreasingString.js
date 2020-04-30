// bruteforce
var sortString = function(s) {
    let copy = s.split('').sort()
    let output = []
    let i = 0
    const forward = (string) => {
        output.push(string.shift())
        for(let i=0;i<string.length;i++){
            if(output[output.length-1]<string[i]){
                output.push(string.splice(i,1)[0])
                i--
            }
        }
    }
    const backward = (string) => {
        output.push(string.pop())
        
        for(let i=string.length-1;i>0;i--){
            if(output[output.length-1]>string[i]){
                output.push(string.splice(i,1)[0])
            }
        }
    }
    while(copy.length){
        if(!(i%2)){
            forward(copy)
            
        } else {
            backward(copy)
        }
        i++
    }
    
    
    return output.join('')
};