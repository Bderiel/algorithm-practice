// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to O.

const sample =
[[1, 2, 3, 4],
[1, 2, 3, 4],
[0, 2, 3, 0]];

function zero(matrix) {
    const zeroTrack = [];
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length;j++){
            if (matrix[i][j] === 0){
                zeroTrack.push([i, j]);
            }
        }
    }
    let len = matrix.length;
    for (let i = 0; i < zeroTrack.length; i++) {
        let tempArr = new Array(matrix[zeroTrack[i][0]].length).fill(0);
        matrix[zeroTrack[i][0]] = tempArr;
        for (let j = 0; j < len; j++){
            matrix[j][zeroTrack[i][1]] = 0;
        }
    }

     return matrix;
}
console.log(zero(sample))
;
