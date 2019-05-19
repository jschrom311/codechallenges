/**
 * Directions --
 * Implement classes Node and Linked Lists.
 * Node should have two properties, 'data' and 'next'.
 * 
 */

 class Node {
     constructor(data, next = null) {
         this.data = data;
         this.next = next;
     }
 }

 class LinkedList {
     constructor() {
         this.head = null;
     }
     
     insertFirst(data) {
         this.head = new Node(data, this.head);
     }

 }

 module.exports = {Node, LinkedList};