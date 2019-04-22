// Array destructuring
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y);
console.log(z);

// Default values
var a, b;
[a=5, b=7] = [1];
console.log(a);
console.log(b);

// object destructuring
var a, b;
({a, b} = {a: 1, b: 2});
console.log(a,b);

var o = {p: 42, q: true};
var {p: foo, q: bar} = o; 
console.log(foo);
console.log(bar);

// default value
var {a = 10, b = 5} = {a: 3};
console.log(a); // 3
console.log(b); // 5


// object parameter destructuring with default value
function drawES2015Chart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
}
drawES2015Chart({
    coords: {x: 18, y: 30},
    radius: 30
});