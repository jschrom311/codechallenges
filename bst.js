/**
 * Directions:
 * Implement a Node class to create a binary search tree.
 * The constructor should initialize values data, left, and right.
 * 
 * Implement the insert method for the Node class. Insert should accept
 * an argument data, then create and insert a new node at the appropriate
 * location in the tree.
 */

 class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
 }

 module.exports = Node;