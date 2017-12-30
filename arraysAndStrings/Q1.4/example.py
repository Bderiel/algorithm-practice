def palendrom(str):
  hash = {}
  count = 0
  for char in str:
    if char in hash and char != ' ':
      hash[char]=hash[char]+1
    else:
      if char != ' ':
        hash[char]=1
  for char in hash:
    if hash[char] % 2 != 0:
      count=count+1
      if count == 2:
        return False
  print count
  return True

print (palendrom('racecar')) #True
print (palendrom('acecarr')) #True
print (palendrom('t')) # True
print (palendrom('false')) # False
print (palendrom('tttt')) #True


