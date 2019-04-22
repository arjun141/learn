// without arrow function
function Person() {
    this.age = 0;
    setInterval(function(){
        this.age++;
        console.log(this.age);
    }, 1000);
} 
var p = new Person();

// with arrow function
function Person(){
this.age = 0;

setInterval(() => {
    this.age++; // |this| properly refers to the Person object
}, 1000);
}

var p = new Person();