/* Directions
Write a function that accepts an integer N and returns a NxN spiral matrix.
Ex:
matrix(2)
[[1, 2],
[4, 3]]

matrix(3)
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
*/

function matrix(n, start_row = 0, end_row = 0) {
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    }
}

module.exports = matrix;