function bmi(weight, height) {
  const index = weight/Math.pow(height,2)
  if(index<=18.5) return 'Underweight'
  if(index<=25) return 'Normal'
  if(index<=30) return 'Overweight'
  if(index>30) return 'Obese'
}