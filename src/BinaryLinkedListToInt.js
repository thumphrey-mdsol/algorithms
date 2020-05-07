var getDecimalValue = function(head) {
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return parseInt(arr.join(''), 2)
};