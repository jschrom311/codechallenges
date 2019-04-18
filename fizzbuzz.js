/* Directions
Write a program that console logs the numbers from 1 to n.
For multiples of three print 'fizz' instead of the number
and for multiples of five print 'buzz'.  For numbers which are
multiples of both three and five print 'fizzbuzz'.
*/
//The real challenge of this is determining when the number is
//a multiple of both three and five - modulo operator helps this!

function fizzBuzz(n) {
    for (let i = 1; i<=n; i++) {
        //multiple of 3 & 5 (should only be multiples of 15)
        //could do (i % 15 === 0)
        if (i % 3 === 0 && i % 5 == 0) {
            console.log('fizzbuzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;