// // using named Function
// function foo1(arg1) {
//     return false; 
// }

// // anonymous function
// //function(arg1){ return false;  }

// // fat arroow fuctions -- lambda
// (arg1) => {return false; } 



// // saving arrow function into variable
// var foo = (x, y) => {
//     return x*y;
// }

// console.log(foo(2, 5));
////////

// test array
var numbers = [1,2,3,4,5,6,7,8,9,10]



// use as an fat arrow syntax
if (numbers.every(value => {return value > 0})){
    console.log("All the numbers are positive!")
} else {
    console.log("Not all of the numbers are positive")
}


// example using normal function
// value => {return value > 0}
function isNegative(value){
    return value < 0;
}

if (numbers.every(isNegative)){
    console.log("All the numbers are negative!")
} else {
    console.log("Not all of the numbers are negative")
}





