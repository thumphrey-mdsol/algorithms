var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return helperFunction (mid, nums)
        } else if (nums[mid] < target) {
            left = mid + 1 
        } else {
            right = mid - 1
        }
    }
    return [-1, -1]
};
function helperFunction(mid, nums) {
    let left = mid - 1
    let right = mid + 1
    let results = [mid,mid]
    while(left + 1 || right + 1) {
        if(left + 1 && nums[left] === nums[mid]) {
            results[0] = left
            left --
        } else {
            left = -1
        }
        if (right + 1 && nums[right] === nums[mid]) {
            results[1] = right
            right++
        } else {
            right = -1
        }
    }
    return results
}