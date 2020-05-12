// rough draft
var invertTree = function(root) {
    if(!root) return root
    const recurr = (root) => {
        let temp = root.left
        root.left = root.right
        root.right = temp
        if(root.left) recurr(root.left)
        if(root.right) recurr(root.right)
    }
    recurr(root)
    return root
};

// Best
var invertTree = function(root) {
    if(!root) return null
    
    let temp = root.left
    root.left = root.right
    root.right = temp
    
    invertTree(root.left)
    invertTree(root.right)
    
    return root
};