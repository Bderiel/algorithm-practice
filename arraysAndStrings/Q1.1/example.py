def isUnique(word):
  obj = {}
  for letter in word:
    if letter in obj: 
      return False
    else:
      obj[letter]=True
  return True


print (isUnique ('brian')) #True
print (isUnique ('good')) #False
