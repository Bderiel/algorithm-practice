/*
Yo this is it. do it in place?


*/




function rotateMatrix(matrix) { // not in place;
  const output = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output.push(matrix[j][i]);
    }
  }
  return output;
}

const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // [ 1, 4, 7, 2, 5, 8, 3, 6, 9 ]
        // [[0,0,0], [1,1,1], [2,2,2]]
        //  how to swap without interfering with itself?
        //  what are we temping? the thing we're going to switch out 
        //   [i][j] = [j][i]
        //   what do we want the j to become ? [j][i] = [i][j]
        // [0,0] [0,1] [0,2] ---> put it into the [j][i]  [0,0] [1,0] [0,2]
        
        console.log(rotateMatrixInPlace(a))

function rotateMatrixInPlace(matrix){

  for(let i = 0; i< matrix.length; i++){

    for(let j = 0 ; j < i; j++){
        
      let temp = matrix[i][j] 
      matrix [i][j] = matrix[j][i]
      matrix[j][i] = temp
     

      }
  }
 return matrix
}

/* We want it to */ 