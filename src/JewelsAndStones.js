var numJewelsInStones = function(J, S) {
    let count = 0
    for(let i=0;i<S.length;i++){
        if(J.includes(S[i])){
            count++
        }
    }
    return count
};

