// spread operator
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

// spread array
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes'];


// spread object
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var obj3 = {...obj1, obj2};


// Rest operator
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// rest object
function details({name, age, ...rest}){
    console.log(rest);
}
details({name:'Sam', age: 45, profession: 'Architect', favSport: 'cricket'});