String.prototype.toJadenCase = function () {
return this.split(' ').map((b) => b[0].toUpperCase() + b.slice(1)).join(' ')
};