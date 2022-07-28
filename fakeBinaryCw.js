function fakeBin(x){
return x.split('').map((a,b) => a<5 ? 0 : 1).join('')
}