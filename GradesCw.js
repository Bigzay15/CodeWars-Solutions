function getGrade (s1, s2, s3){
  let ans = (s1+s2+s3)/3
  if (ans>=90)return  'A'
  else if (ans>=80)return  'B'
  else if (ans>=70)return  'C'
  else if (ans>=60)return  'D'
  else if (ans>=0)return   'F'
  }