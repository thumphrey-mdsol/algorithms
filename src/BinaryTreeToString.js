// legible
var tree2str = function(root) {
    let resultsString = ""
    if(!root) return resultsString
    const recurr = (root) => {
        if(!root) return 
        resultsString += "("
        resultsString += root.val
        root.left && recurr(root.left)
        if(!root.left && root.right) resultsString += "()"
        root.right && recurr(root.right)
        resultsString += ")"
    }
    recurr(root.left)
    recurr(root.right)
    if(!root.left && root.right){
        return `${root.val}()${resultsString}`
    } else {
        return `${root.val}${resultsString}`   
    }
};