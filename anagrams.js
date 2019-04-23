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
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    
    //Make sure str same length using object keys
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

//helper function
function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagrams;

//2nd solution

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;