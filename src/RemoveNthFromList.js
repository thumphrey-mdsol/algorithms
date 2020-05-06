var removeNthFromEnd = function(head, n) {
    let dummy_head = new ListNode(0)
    dummy_head.next = head
    let slow = dummy_head
    let fast = dummy_head
    for(i=0; i<=n; i++) {
        fast = fast.next
    }
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy_head.next
};