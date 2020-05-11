// Recursion
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

// Legible
var tree2str = function(root) {
    if(!root) return ""
    const left = tree2str(root.left)
    const right = tree2str(root.right)
    if(!left && !right) {
        return `${root.val}`
    }
    if(!right) {
        return `${root.val}(${left})`
    }
    return `${root.val}(${left})(${right})`
};