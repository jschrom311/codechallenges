/***
 * Given an array of a taht only numbers in the range from 1 to a.length,
 * find the first duplicate number for which the second occurence has the
 * minimal index.
 */

 function firstDuplicate(a) {
    let dictionary = {};
    for(let i = 0; i < a.length; i++) {
if(dictionary[a[i]] !== undefined)
     return a[i];
else
   dictionary[a[i]] = i;
  }
  return -1;
}