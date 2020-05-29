// Math.max
var rob = function(nums) {
    if(nums.length===1)return nums[0]
    return Math.max(helper(nums, 0, nums.length-1), helper(nums,1,nums.length))
};

const helper = (arr, start, length) => {
    let curr = 0
    let prev = 0
    for(let i=start;i<length;i++){
        let temp = curr
        curr = Math.max(prev+arr[i], curr)
        prev = temp
    }
    return curr
}