// One away
// pale pal
// pale pales
// pale bale

function oneAway(str1, str2) {
  if (str1 === str2) return false;
  let counter = 0;
  let longer = str1;
  if (str2 > str1) longer = str2;
  for (let i = 0; i < longer.length; i++) {
    if (str1[i] !== str2[i]) {
      counter++;
      if (counter === 2) return false;
    }
  }
  return true;
}

// console.log(oneAway('pale', 'pal'));
// console.log(oneAway('pale', 'pales'));
// console.log(oneAway('pale', 'bale'));
// console.log(oneAway('pale', 'pale'));
console.log(oneAway('paless', 'pales'));

