var reverseBetween = function(head, m, n) {
    let dummyhead = {next: head}
    let prev = dummyhead
    for(let i= 0; i< m-1; i++){
        prev = prev.next
    }
    let cur = prev.next
    for(let j=0; j<n-m; j++){
        let next = cur.next
        cur.next = next.next
        next.next = prev.next 
        prev.next = next
    } 
    return dummyhead.next
};