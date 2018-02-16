function strCompression(str) {
  const hash = {};
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]] ++;
    } else {
      hash[str[i]] = 1;
    }
  }
  for (const key in hash) {
    output += key + hash[key];
  }
  return output;
}

console.log(strCompression('aaabbbccc'));
