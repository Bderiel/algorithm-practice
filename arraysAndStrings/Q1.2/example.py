def permutations(str1,str2):
  if len(str1) != len(str2):
    return False
  str1 = sorted(str1)
  str2 = sorted(str2)
  return str1 == str2

print (permutations('bri','irb')) #True
print (permutations('bria','irb')) #False
