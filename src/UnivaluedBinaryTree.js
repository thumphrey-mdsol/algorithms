var isUnivalTree = function(root) {
    let val = root.val
    let output = true
    const findVals = (root) => {
        if(root.val!==val){
            output = false
        }
        if(root.left){
            findVals(root.left)
        }
        if(root.right){
           findVals(root.right)
           }
    }
    findVals(root)
    return output
};

var isUnivalTree = function(root, val = root.val) {
    if(!root)return true
    return (root.val === val && isUnivalTree(root.left, val) && isUnivalTree(root.right, val))
};