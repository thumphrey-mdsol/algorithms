var findTarget = function(root, k) {
    let results = new Set()
    const recurr = (root) => { 
        if(!root) return false
        let secondNumber = k - root.val
        if(results.has(secondNumber)){
            return true 
        } else {
            results.add(root.val)
        }
        return recurr(root.left) || recurr(root.right)
    }
    return recurr(root)
};