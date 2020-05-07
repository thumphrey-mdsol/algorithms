var detectCycle = function(head) {
    if(!head) {
        return null
    } else {
        const map = new Set()
        while(head.next) {
            if(map.has(head)) {
              return head
            } else {
              map.add(head)   
            }
            head = head.next
        }
    }
    return null
};