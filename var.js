console.log(x); // Output: undefined (due to hoisting)
var x = 5;
console.log(x); // Output: 5

if (true) {
    var y = 10;
}
console.log(y);