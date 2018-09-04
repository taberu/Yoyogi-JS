// //var student1 = {firstName: "Bob", lastName: "Smith", testScore: [90,32,56]};

// function Student(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//    // this.testScores = scores;
//     this.school = "Harvard";
//     this.favoriteFood; 
//     this.testAverage = function() {
//         var total = 0;
//         for (var i = 0; i < this.testScores.length; i++){
//             total = total + this.testScores[i];
//         }

//         return total / this.testScores.length;
//     }
    
//     // function TroupeFavNum(){
//     //     return 42;
//     // }

//  }

//s1 = Student("bob","jones");
 //console.log(s1.firstName());

 function Kids(name){
     this.name = name
     this.yellName = function() {
        console.log(this.name + "!!!!!!");
     }
 }

 k1 = new Kids("Bruce");
 k2 = new Kids("Kevin");

 k1.yellName();
 k2.yellName();

Kids.prototype.TroupeName = function (){
    console.log("Kids In The Hall");
}

 k1.TroupeName();
 k1.TroupeName();





// var Bob = new Student("Bob", "Smith", [88,56,85,100]);
// var Sam = new Student("Sam", "Jones", [0,0,0,0])
// console.log(Bob);
// console.log(Sam);

// Student.prototype.kids_email = "foo@hotmail.com"; 
// Student.prototype.get_first_intial = function() {
//     return this.firstName[0];
// }

// console.log(Bob);
// console.log(Sam);

// console.log(Bob.kids_email);
// console.log(Sam.kids_email);
// console.log(Bob.get_first_intial());
// console.log(Sam.get_first_intial());

// Bob.yell = function(){
//     console.log("OUOOOOOOOCH");
// }

// Bob.yell();
// //Sam.yell();

// var nums = Array(1,2,3,4);
// var letters = Array('a','b','c');
// Array.prototype.say_crazy = function(){
//     console.log("WWHAAAAAAA AEHHEEWEW");
// }
// console.log(nums);
// console.log(nums);

// nums.say_crazy();
// letters.say_crazy();

//nums.prototype.say_crazy();

// Array.prototype.www_darren_com_capatalize() = function {

// }

// 1,000
// modify_char_data(bob.data);
// modify_char_data(sam.data);

// fucntion modify_char_data(data_array){
//     // do lots of stuff
//     data_array.www_darren_com_capatalize();
//     // do lots of stuff 
// }


// CTOR
// function Coffee (scent) {
//     this.liquid = "coffee";
//     this.aroma = scent;
//     this.strength;
// }

// var StarBucks = new Coffee("Bold");
// StarBucks.strength = "strong";

// var Tullys = new Coffee("Sweet");
// Tullys.strength = "medium";

// var Lawson = new Coffee("Heavenly");
// Lawson.StarBucks = "weak";



// var class1 = [];
// class1.push(Bob);
// class1.push(new Student("Sally", "Jones", [77,99,76,88]));
// class1.push(new Student("Jeff", "Blake", [55,67,66,45]));

// console.log(class1);

// for (var i = 0; i < class1.length; i++) {
//     console.log(class1[i].firstName + ": " + class1[i].testAverage());
// }

// var myArray1 = new Array(1,2,3);
// var myArray2 = [10,20,30]
// var myString1 = new String("Hello My Sting1");
// var myString2 = "hello";

// console.log(myString1 + " " + typeof myString1);
// console.log(myString2 + " " +  typeof myString2);

// //console.log(myArray1);
// //console.log(myArray2);

// for (key in myString1) {
//     console.log("KEY: " + key + " " + myString1[key] + " " + typeof myString1[key]);
// }

// exercises create fucntion ctor for KidsInHall 
//                           method: say_catch_phrase()
// 
// modify prototype to add new properties and methods()
// test and cal new prototype methods. 
//
// within methods, make use of for loops, arrays
// arrys of properites
// properties that properties
// 

x = 6
console.log(x)

x = x >> 1
console.log(x)


