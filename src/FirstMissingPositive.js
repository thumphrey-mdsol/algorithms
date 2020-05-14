// set
var firstMissingPositive = function(nums) {
    let set = new Set()
    for(let i=0;i<nums.length;i++){
        set.add(nums[i])   
    }
    let i = 1
    while(set.has(i)){
    i++
    }
    return i
};

// optimal

var firstMissingPositive = function(nums) {
    let result = 1;
    let arr = nums.filter(v => v >0)
    for( ; arr.indexOf(result) > -1 ; result++) {}
    return result;
};