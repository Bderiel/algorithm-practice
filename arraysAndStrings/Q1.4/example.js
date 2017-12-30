// check if any permutation of the string is a palendrome
// raceeecar even of every string, one odd allowed??
function palendromePerm(str) {
  const hash = {};
  let couter = 0; // if we hit two we return false
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
  }
  for (key in hash) {
    if (hash[key] % 2) {
      couter++;
      if (couter === 2) {
        return false;
      }
    }
  }
  return true;
}
console.log(palendromePerm('test')); // false
console.log(palendromePerm('racecar')); // true 
console.log(palendromePerm('acecarr')); // true
console.log(palendromePerm('t')); // true
console.log(palendromePerm('ttttt')); // true