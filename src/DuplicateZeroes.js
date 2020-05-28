var duplicateZeros = function(arr) {
    let length = arr.length
    for(let i=0;i<length;i++){
        if(arr[i]===0){
            arr.splice(i,1,0,0)
            arr.pop()
            i++
        }
    }
};