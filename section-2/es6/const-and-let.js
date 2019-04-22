console.log(foo);
var foo = 'bar';
console.log(foo);

console.log(test);
let test = 'abc';
console.log(test);
// scope
for(var index = 0; index < 5; index++){
    setTimeout(function(){
        console.log(index);
    });
}

for(let count = 0; count < 5; count++){
    setTimeout(function(){
        console.log(count);
    });
}


const tree = "apple";
tree = "mango";

const car = {
    engine: '6262cc',
    milage: '4kmpl',
    topSpeed: '335kmph',
    fuelCapacity: 78
}
console.log(car);
car.engine = '1197cc';

console.log(car)

