/**
 * Write a function that takes an array of integers as an argument and returns
 * another array of the two highest integers in the argument.
 * Don't use built-in array sorting or array min/max functions.
 */

 function maxTwo(array) {
     let largest = array[0];
     let secondLargest = array[1];
     for (let i = 0; i <array.length; i++) {
         let value = array[i];
         if (value > largest) {
             secondLargest = largest;
             largest = value;
         } else if (value > secondLargest) {
             secondLargest = value;
         }
     }
     return [largest, secondLargest];
 }