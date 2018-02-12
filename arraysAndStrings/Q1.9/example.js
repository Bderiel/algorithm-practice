let original = 'thank';
let sub = 'ankth';

function rotateCheck(word, sub) {
  word = word + word;
  return word.includes(sub);
}

// rotateCheck(original, sub);

function stringRotation(word, sub){

  if(word.length !== sub.length) return false;
  
  let start ; 
  for(let i = 0; i< word.length; i++){
    if(sub[0] === word[i]) {
      start = i;
      break;
    } 
  }
  for(let j = 0; j< sub.length; j++){

    if(sub[j]!== word[start %word.length]) return false
    start++
  }

  return true

}
let a = 'jose'
console.log(stringRotation(original, sub))