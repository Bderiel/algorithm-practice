function rotateMatrix(matrix) { // not in place;
  const output = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output.push(matrix[j][i]);
    }
  }
  return output;
}

const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotateMatrix(a))
