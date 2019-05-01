/* Directions
Write a function that returns the number of vowels
in a string (A, E, I, O, U).
*/

//Iterative soln
function vowels(str) {
    let counter = 0;
    const vowelcheck = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        //includes method simplifies code, could use comparative statements (if char === 'a' || char === 'e')
        if (vowelcheck.includes(char)) {
            counter++;
        }
    }
    return counter;
}

module.exports = vowels;

//RegEx soln
function vowels(str) {
    
}

module.exports = vowels;