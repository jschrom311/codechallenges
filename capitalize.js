/*Directions
Write a function that accepts a string.  The function should capitalize the first letter
of each word in the string then return the capitalized string.
*/

//Hints: one solution will use a for loop
//The other will use methods from js library(slice, toUpperCase, join)


//Solution 1
function capitalize(str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

module.exports = capitalize;

//Solution 2
function capitalize(str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        }
        else {
            resullt += str[i];
        }
    }
    return result;
}

module.exports = capitalize;