def oneAway(str1,str2):
  counter = 0
  longer = str1
  if len(str2) > len(str1):
    longer = str2
  for i in range(0,len(longer)):
    if str1[i] != str2[i]:   # cant be out of range in python
      counter=counter+1
      if counter==2:
        return False
  return True



print(oneAway('pale', 'pal'))
# print(oneAway('pale', 'pales'))
# print(oneAway('pale', 'bale'))
# print(oneAway('pale', 'pale'))
# print(oneAway('palesss', 'pales'))