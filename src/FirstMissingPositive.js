

// optimal

var firstMissingPositive = function(nums) {
    let result = 1;
    let arr = nums.filter(v => v >0)
    for( ; arr.indexOf(result) > -1 ; result++) {}
    return result;
};