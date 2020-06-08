var shuffle = function(nums, n) {
    let x = nums.slice(0,n)
    let y = nums.slice(n)
    let results = []
    for(let i=0;i<(nums.length/2);i++){
        results.push(x[i])
        results.push(y[i])
    }
    return results
};