/*Directions
**First add peek functionality to queue class(queue.js)**
Implement the 'weave' function.  Weave receives two queues
as arguments and combines the contents of each into a new
third queue.  The third queue should contain the alterating
content of the two queues.  The function should handle the 
queues of different lengths without inserting 'undefind' into
the new one.  Do not access the array inside of any queue, only
use the 'add', 'remove' and 'peek' functions.
Ex:
    const queueOne = new Queue();
    queueOne.add(1);
    queueOne.add(2);
    const queueTwo = new Queue();
    queueTwo.add('Hi');
    queueTwo.add('There');
    const q = weave(queueOne, queueTwo);
    q.remove();
*/

const Queue = require('.queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q;

}

module.exports = weave;

