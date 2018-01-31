let original = 'thank';
let sub = 'ankth';

function rotateCheck(word, sub) {
  word = word + word;
  return word.includes(sub);
}

rotateCheck(original, sub);
