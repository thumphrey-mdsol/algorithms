var increasingBST = function(root) {
    let node = new TreeNode(0)
    let curr = node 
    function dfs(root){
        if(!root) return 
        dfs(root.left)
        root.left = null 
        curr.right = root
        curr = root 
        dfs(root.right)
    }
    dfs(root)
    return node.right
};