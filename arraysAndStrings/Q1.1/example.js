// determine if a string has all unique characters
function isUnique(str) {
  str = str.toLowerCase();
  const hashTable = {};
  for (let i = 0; i < str.length; i++) {
    if (hashTable[str[i]]) return false;
    else hashTable[str[i]] = true;
  }
  return true;
}

console.log(isUnique('brian')); // true
console.log(isUnique('good')); // false
console.log(isUnique('d')); // true
