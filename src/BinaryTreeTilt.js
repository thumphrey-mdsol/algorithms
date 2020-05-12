var findTilt = function(root) {
    let tiltSum = 0 
    const recurr = (root) => { 
        if(!root) return 0
        let leftSum = recurr(root.left)
        let rightSum = recurr(root.right)
        tiltSum += Math.abs(leftSum - rightSum)
        return root.val + leftSum + rightSum
    }
    recurr(root)
    return tiltSum 
};