var x = 42;
var pi = 3.14;

console.log(x);
console.log(pi);

x = x + 1;
pi = pi + 1;

console.log(x);
console.log(pi);
pi

var numbers = [5,3,2,6,1];
numbers.push(42);
console.log(numbers);
numbers.pop();
console.log(numbers);

numbers.sort();
console.log(numbers);

var num = 42;

function Animal(name) {
    this.animalName = name;

    this.bark = function(){
        console.log("ROFF ROFF");
    }

    function hiddenFunc(){
        console.log("Hidden bark");
    }

    this.angryBark = function(){
        this.bark();
        this.bark();
        this.bark();
        hiddenFunc();
    }


}

var myAnimal = new Animal("Sparky");
myAnimal.angryBark();

//myAnimal.hiddenFunc();


