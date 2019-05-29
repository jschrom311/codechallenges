/**
 * Return the 'middle' node of a linked list.
 * If the list has an even number of elements,
 * return the node at the end of the first half of the list.
 * Don't use a counter variable, don't retrieve the size
 * of the list, and only iterate through the list once.
 */

 function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
 }

 module.exports = midpoint;