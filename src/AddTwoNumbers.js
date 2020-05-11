// brute force/lots of logic
var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2) return l1
    let newLinkedList = new ListNode()
    let result = newLinkedList
    let carryOver = false
    while(l1 || l2){
        let sum = 0
        if(l1) sum += l1.val 
        if(l2) sum += l2.val 
        if(carryOver){
          sum += 1 
        carryOver = false   
        }
        console.log(newLinkedList)
        if(sum >= 10){
            carryOver = true 
            sum -= 10
            newLinkedList.val = sum 
        } else {
           newLinkedList.val = sum  
        }
        if((l1 && l1.next) || (l2 && l2.next) || carryOver){
         newLinkedList.next = new ListNode()   
        }
        newLinkedList = newLinkedList.next 
        if(l1) l1 = l1.next 
        if(l2) l2 = l2.next 
    }
    if(carryOver){
       newLinkedList.val = 1 
    } 
    return result
};

// best solution
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0)
    let current = dummyHead
    let sum = 0
    let carryOver = 0
    while(l1 || l2 || sum > 0) {
        if(l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            sum -= 10
            carryOver += 1
        }
        current.next = new ListNode(sum)
        current = current.next
        sum = carryOver
        carryOver = 0
    }
    return dummyHead.next
};