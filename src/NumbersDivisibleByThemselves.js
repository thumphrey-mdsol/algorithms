var selfDividingNumbers = function(left, right) {
    let arr = []
    for(let i = left;i<=right;i++){
        if(selfDividing(i)){
            arr.push(i)
        }
    }
    return arr
};
const selfDividing = (num) => {
    let nums = num.toString().split('')
    for(let i=0;i<nums.length;i++){
        if(num%nums[i]!==0){
            return false
        }
    }
    return true
}