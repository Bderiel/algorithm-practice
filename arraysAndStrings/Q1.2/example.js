// check permutations given two strings;
function permutations(str1, str2) { // read question wrong but this works
  const hash = {};
  let toHash = str2; // longest string to hash all values
  let shortStr = str1;
  if (str2.length < str1.length) {
    shortStr = str2;
    toHash = str1;
  }
  for (let i = 0; i < toHash.length; i++) { // hash the longest string
    if (hash[toHash[i]]) hash[toHash[i]]++;
    else hash[toHash[i]] = 1;
  }
  for (let i = 0; i < shortStr.length; i++) { // compare each index of string to and subtract a match
    if (hash[shortStr[i]]) { // if the match is less than zero we return out of the loop
      hash[shortStr[i]]--;
      if (hash[shortStr[i]] < 0) return false;
    } else {
      return false; // if value is not in hash table we return out of the loop
    }
  }
  return true; // Every value was checked and contained within the longer string. We return true
}

function realQuestion(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  return str2 === str1;
}

console.log(permutations('god', 'goo')); // false
console.log(permutations('ibr', 'brian')); // true;

console.log(realQuestion('ibr', 'bri')); // true;
console.log(realQuestion('obe', 'test')); // false;

