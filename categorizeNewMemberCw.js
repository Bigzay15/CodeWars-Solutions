function openOrSenior(data){
return data.map((a,b) => a[0] >= 55 && a[1] > 7 ? 'Senior' : 'Open')
}