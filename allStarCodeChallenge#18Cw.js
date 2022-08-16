function strCount(str, letter){  
  let newstr = str.split('').filter(a => a == letter)
  return newstr.length
}
