var sumOfLeftLeaves = function(root) {
    let results = 0
    const recurr = (root) => {
        if(!root) return results 
        if(root === null) return 
        if(root.left && !root.left.left && !root.left.right){
            results += root.left.val 
        }
        recurr(root.left)
        recurr(root.right)
        return results 
    }
    return recurr(root)
};