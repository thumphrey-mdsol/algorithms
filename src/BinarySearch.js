var search = function(nums, target) {
    let right = nums.length
    let left = -1 
    while(left + 1 < right){
        let guessIndex = Math.floor((right - left) / 2) + left 
        if(nums[guessIndex] === target) return guessIndex 
        if(nums[guessIndex] > target){
            right = guessIndex
        } else {
            left = guessIndex
        }
    }
    return -1
};