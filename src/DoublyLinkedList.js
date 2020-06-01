class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    setHead(node) {
      if (this.head === null) {
              this.head = node
              this.tail = node
              return
          }
          this.insertBefore(this.head, node)
    }
    setTail(node) {
      if(this.tail === null) {
              this.head = node
              this.tail = node
              return
          }
          this.insertAfter(this.head, node)
    }
    insertBefore(node, nodeToInsert) {
      // Write your code here.
          if (nodeToInsert === this.head && nodeToInsert === this.tail) return 
          this.remove(nodeToInsert)
          nodeToInsert.next = node
          nodeToInsert.prev = node.prev
          if(node.prev === null) {
              this.head = nodeToInsert
          } else {
              node.prev.next = nodeToInsert
          }
          node.prev = nodeToInsert	
    }
    insertAfter(node, nodeToInsert) {
          if (nodeToInsert === this.head && nodeToInsert === this.tail) return 
          this.remove(nodeToInsert)
      if(node.next === null) {
              nodeToInsert.prev = node
              node.next = nodeToInsert
              this.tail = nodeToInsert
          } else {
              node.next.prev = nodeToInsert
              nodeToInsert.prev = node
              nodeToInsert.next = node.next
              node.next = nodeToInsert
          }
    }
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
    }
    removeNodesWithValue(value) {
      // Write your code here.
    }
    remove(node) {
          if(node === this.head) setHead(node.next)
          if(node === this.tail) setTail(node.prev)
      this.removeNodeBindings(node)
    }
    containsNodeWithValue(value) {
    }
      removeNodeBindings(node) {
          if (node.prev !== null) node.prev.next = node.next
          if (node.next !== null) node.next.prev = node.prev
          node.next = null
          node.prev = null
      }
  }
  // Do not edit the line below.
  exports.Node = Node;
  exports.DoublyLinkedList = DoublyLinkedList;