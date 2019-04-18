/* Directions
Given a string, return the character taht is most commonly used in the string.
Examples:
maxChar("abcccccd") === "c"
maxChar ("apple 1231111") === "1"
*/
//General logic for solving: convert string into object with characters as keys
//and counts as values.  Then go through object and return greatest key value.

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;