var binaryTreePaths = function(root) {
    const results = []
    if(!root) return results 
    const recurr = (root,path) =>{
        path += root.val
        if(root && root.left === null && root.right === null){
            results.push(path) 
            return 
        }
        path += "->"
        root.left && recurr(root.left,path)
        root.right && recurr(root.right,path) 
    }
    recurr(root,"")
    return results
};