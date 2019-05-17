/**Directions
 * Create a stack data structure. The stack should be a class with
 * methods push, pop and peek.  Adding an element to the stack should
 * store it until it's removed.
 */

 class Stack {
     constructor() {
         this.data = [];
     }

     push(record) {
         this.data.push(record);
     }

     pop() {
         return this.data.pop();
     }

     peek() {
         return this.data[this.data.length - 1];
     }

 }

 module.exports = Stack;