function firstNonConsecutive (arr) {
const north = arr.find((a,b) => a !== b + arr[0])
return Number.isInteger(north) ? north : null
}