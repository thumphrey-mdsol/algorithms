var sortArray = function(nums) {
    if(nums.length<2)return nums
    const mid = Math.floor(nums.length/2)
    const left = nums.slice(0,mid)
    const right = nums.slice(mid)
    return merge(sortArray(left),sortArray(right))
};

const merge = (left,right) => {
    let mergedArr = []
    let l = 0
    let r = 0
    while(l<left.length && r<right.length){
        if(left[l] > right[r]){
            mergedArr.push(right[r])
            r++
        } else {
            mergedArr.push(left[l])
            l++
        }
    }
    if(l<left.length){
        mergedArr.push(...left.slice(l))
    }
    if (r<right.length){
        mergedArr.push(...right.slice(r))
    }
    return mergedArr
}