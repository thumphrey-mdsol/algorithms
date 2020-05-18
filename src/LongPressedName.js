var isLongPressedName = function(name, typed) {
    let count = 0
    for(let i=0; i<typed.length;i++){
        if(name[count] !== typed[i] && name[count-1] !== typed[i]){
            return false
        } 
        if(name[count] === typed[i]) count++
    }
    return count === name.length}