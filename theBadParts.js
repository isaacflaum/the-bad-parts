// variables in blocks are hoisted to the top of the function scope:
// this
if (true) {
	var hoisted = 3;
}
// is actually this
var hoisted2;
if (true) {
	hoisted2 = 3;
}
console.log(hoisted === hoisted2);

// not a number has the same type as number:
console.log(typeof NaN === typeof 4.5);