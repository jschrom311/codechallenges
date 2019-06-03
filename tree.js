/**
 * Create a node class.  The constructor should accept an argument that gets
 * assigned to the data property and initialize an empty array for storing
 * children.  The node class should have 'add' and 'remove' methods.
 * 
 * Create a tree class.  The tree constructor should initialize a 'root'
 * property to null.
 * 
 * Implement breadth first search traversal and depth first search traversal
 * on the tree class.  Each method should accept a function taht gets called
 * with each element in the tree.
 */

 class Node {
     constructor (data) {
        this.data = data;
        this.children = [];
     }
     add (data) {
         this.children.push(new Node(data));
     }
     remove (data) {
         this.children = this.children.filter(node => {
             return node.data !== data;
         });
     }
 }

 class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }  
    }
 }

 module.exports = {Tree, Node};






