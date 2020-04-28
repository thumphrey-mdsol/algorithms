

var isUnivalTree = function(root, val = root.val) {
    if(!root)return true
    return (root.val === val && isUnivalTree(root.left, val) && isUnivalTree(root.right, val))
};