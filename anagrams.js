/* Directions
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity.  Only consider characters, not spaces or
punctuation.  Consider capital letters the same as lower case.
*/

//Use RegEx
/*Ex:
const word = "HI THERE!!!"
word.replace(/[^\w]/g, "").toLowerCase();
*/

function anagrams (stringA, stringB) {
    
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagrams;