def makeUrl(str):
  output = ''
  flag = True
  for char in reversed(str):
    if char == ' ' and flag==False:
      output='%20'+output
    if char != ' ':
      output=char+output
      flag=False
  return output

print(makeUrl('s t r  '))