// Objects hold collections of properties (variables) and methods (functions)
// They are defined as a key:value pair.  
// The "key" is the name, and "value" is the data that is stored.

// 1.1: simple object with properties only
// 
// #### Exercise
// 1.1 
// Using the objects below as an example, 
// create objects named student3 and student4 with different name/test scores values. 
var student1 = {firstName: "Bob", lastName: "Smith", testScore: [90,32,56]};
var student2 = {firstName: "Mary", lastName: "Jones", testScore: [60,92,86]};

// 1.1 testing5
// print the objects like
console.log(student1);

// 1.2
// Accessing values of properties. There are two ways to access property data
// pay attention to the string quotes on the 2nd example. 
//
// student1.firstName
// -or-
// student1["firstname"]
console.log(student1.firstName);
console.log(student1["firstName"]);

// #### exercise
// 1.2:  add more properties
// Create student5 and add a property named Age and set it to a value

// 1.2 test
// print out only the new Age property of Student5
student1.height = 200;
console.log("Student 1 height: " + student1.height);

console.log("weight " + student1.weight);



// #### exercise
// 1.4: createa a function named getFullName that prints the first and last name as one string
//      for example: "Smith, Bob"
//
//      function name: getFullname()
//      args: student (an object)
//      return: return a string that is the full name in this format:
//            "last, first" i.e. "Smith, Bob"
function getFullname(student){
    //var fullName;
 

    return student.lastName + ", " + student.firstName;

    //return fullName;
}

function FuncName() {

}

// 1.4 testing -- call getFullName for each student

//getFullname(fullName);
console.log(getFullname(student1));
var x = 42;



// ####  
// 1.4: Object with properties and functions. 
//      
// 1.4: Exercise
//      Add two new students 
//      student6 and student7 with unique name/test info and with a 
//      method named FullName.  That method gets the FullName of the student. 
//      (use the same format for the string as the stand alone function above) 
//        
//  method name: FullName
//         args: none (it will access properties on the object)
//         return: string representing full name: "last, first" i.e. "Smith, Bob"
//
// NOTE: notice the "this" key word. "this" refers to the object and basically says
//       use the var "Brand" that is on "this" object.  

// example of method on object
var car1 = { Brand: "VW", 
             Model: "Bug",
             GetName: function() {
                return this.Brand + " " + this.Model;},
            }
// test code: print the full name of the student5 and student6
// i.e.
console.log(car1.GetName());

var student6 = {firstName: "Mary", 
                lastName: "Jones", 
                testScore: [60,92,86],
                fullName: function() {
                    return this.lastName + ", " + this.firstName;
                }};

console.log(student6.fullName());


student6.fullName()

// ####
// 1.5: add metod to student objects that retruns the average of the test scores.
//      name: testsScoreAvg
//      args: none (using testscore properties on object)
//      retrun: average (number)
//      
//      Loop through testscore and add the scores then divide by number of tests. 

var student7 = {firstName: "Mary", 
                lastName: "Jones", 
                testScore: [60,92,86],
                Grades: {
                    Math: "A",
                    Bio: "C",
                    English: "B",
                },
                testScoreAvg: function() {
                    // check if there are any test scores
                    if (this.testScore.length == 0){
                        return 0;
                    }

                    var total = 0;
                    for(var i = 0; i < this.testScore.length; i++){
                        total += this.testScore[i];
                    }

                    return total / this.testScore.length;
                }};

console.log(student7.testScoreAvg());