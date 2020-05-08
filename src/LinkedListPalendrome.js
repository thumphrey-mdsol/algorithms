const reverse = (thing) => {
    let cur = thing
    let prev = null
    while(cur){
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}

var isPalindrome = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    fast = head
    slow = reverse(slow)
    while(slow){
        if(fast.val === slow.val){
            fast = fast.next
            slow = slow.next
        } else{
            return false
        }
    }
    return true
};