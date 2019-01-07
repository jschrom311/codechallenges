/***
 * Given a string s consisting of small English letters, find and return
 * the first instance of a non-repeating character in it. If there is no
 * such character, return '_'.
 */

function firstNonRepeatingCharacter(s) {
    for (i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return '_';
}