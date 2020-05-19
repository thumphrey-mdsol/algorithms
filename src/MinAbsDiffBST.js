// effecient
var getMinimumDifference = function(root) {
    let minDiff = Number.MAX_SAFE_INTEGER
    let previous = null
    const dfs = (root) => {
        if(!root)return
        dfs(root.left)
        if(previous !== null){
            minDiff = Math.min(minDiff, root.val-previous)
        }
        previous = root.val
        dfs(root.right)
    }
    dfs(root)
    return minDiff
};

// array method