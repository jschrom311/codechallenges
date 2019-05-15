/*Directions
Create a queue data structure.  The queue should be a class
with methods 'add' and 'remove'.  Adding to the queue should
store an element until it is removed.
*/

class Queue {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove() {
        return this.data.pop();
    }
}

module.exports = Queue;

/*Directions for weave.js--
Implement a 'peek' method in this queue class.  Peek should
return the last element (the next one to be returned) from
the queue without removing it.
*/

class Queue {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Queue;
