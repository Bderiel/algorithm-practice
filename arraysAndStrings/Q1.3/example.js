// Give string replace spaces with '%20' do not do the end spaces

// function makeUrl(str) {   // o(n^2) messy
//   str = str.split('');
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ' && str.slice(i).filter(el => el != ' ').length) {
//       str[i] = str[i] = '%20';
//     } else if (str[i] === ' ') {
//       return str.slice(0, i).join('');
//     }
//   }
//   //return str.join(''); unneeded
// }

// With hints
function makeUrl(str) {
  let output = '';
  let flag = true;    // flag to start adding out filler
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      output = str[i] + output;
      flag = false;
    }
    if (str[i] === ' ' && !flag) {
      output = `%20${output}`;
    }
  }
  return output;
}

console.log(makeUrl('t e t t        ')); // t%20w%20t%20t
