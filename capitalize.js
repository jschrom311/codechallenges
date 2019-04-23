/*Directions
Write a function that accepts a string.  The function should capitalize the first letter
of each word in the string then return the capitalized string.
*/

//Hints: one solution will use a for loop
//The other will use methods from js library(slice, toUpperCase, join)

function capitalize(str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

module.exports = capitalize;