/*Directions
Write a function that accepts a positive number N.
The function should console log a step shape with N
leves using the # character.  Make sure the step has
spaces on the right hand side.
Examples:
steps(2) = 
'# '
'##'
steps(3) =
'#  '
'## '
'###'
*/
//Soln1 (iterative)
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            }
            else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

module.exports = steps;