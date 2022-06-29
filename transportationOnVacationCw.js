function rentalCarCost(d) {
const base = d*40
if(d < 3) return base
if(d < 7) return base-20
if(d >= 7) return base-50
}