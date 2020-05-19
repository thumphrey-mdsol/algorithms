var twoSum = function(nums, target) {
    let hash = {}
    for(let i=0;i<nums.length;i++){
        if(!hash[target-nums[i]]){
            hash[nums[i]] = i+1
        } else {
            return [hash[target-nums[i]]-1, i]
        }
    }
    return []
};