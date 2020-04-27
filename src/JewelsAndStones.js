// Worst case O(n) and best case O(log n)
var numJewelsInStones = function(J, S) {
    let count = 0
    for(let i=0;i<S.length;i++){
        if(J.includes(S[i])){
            count++
        }
    }
    return count
};

// O(n)time & O(n) time
var numJewelsInStones = function(J, S) {
    let dp = {}
    let count = 0
    for(let i=0;i<J.length;i++){
        dp[J[i]] = J[i]
    }
    for(let i=0;i<S.length;i++){
        if(dp[S[i]]){
            count++
        }
    }
    return count
};