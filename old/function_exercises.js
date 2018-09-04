

function addNums3(num1, num2){
    var total = num1 + num2;
    console.log(total);
    
    return total;
}

function addNums2(num1, num2){
    var total = num1 + num2;
    return total;
}

function addNums1(num1, num2){
    return num1 + num2;
}
var x;
var y;

x  = addNums1(1,2);
x = 1 + 2;
x = addNums1(1,2) + addNums1(2,4) + addNums1(6,2) ;
// x = 3 + 6 + 8;
// x = 17;
console.log("x is: " + x);


var w = console.log(addNums1(10,11));

console.log("var w is: " + w);

var y = addNums2(3,4);
var z = addNums3(5,6);

console.log(x + y + x);