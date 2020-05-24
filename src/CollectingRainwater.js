var trap = function(height) {
    let left = 0
    let maxLeft = height[left]
    let right = height.length-1
    let maxRight = height[right]
    let result = 0
    while(left<right){
        if(height[left]<height[right]){
            if(height[left]>=maxLeft){
                maxLeft=height[left]
            } else {
                result+=maxLeft-height[left]
            }
            left++
        } else {
            if(height[right]>=maxRight){
                maxRight=height[right]
            } else {
                result+=maxRight-height[right]
            }
            right--
        }
    }
    return result
};


// alternate
var trap = function(height) {
    let left = 0
    let maxLeft = height[left]
    let right = height.length-1
    let maxRight = height[right]
    let result = 0
    while(left <= right) {
        maxLeft = Math.max(maxLeft, height[left])
        maxRight = Math.max(maxRight, height[right])
        result += maxLeft - height[left]
        result += maxRight - height[right]
        if(height[left] <= height[right]) left++
        else right--
    }
    return result
};