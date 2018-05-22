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

// 1.1 testing
// print the objects like
console.log(student1);

// 1.2
// Accessing values of properties. There are two ways to access property data
// student1.firstName
// -or-
// student1["firstname"]
console.log(student1.firstName);
console.log(student1["firstName"]);

// #### exercise
// 1.2:  add more properties
// Create student5 and add a property named Age and set it to a value


// #### exercise
// 1.4: createa a function named getFullName that prints the first and last name as one string
//      for example: "Smith, Bob"
//
//      function name: getFullname()
//      args: student (an object)
//      return: return a string that is the full name in this format:
//            "last, first" i.e. "Smith, Bob"
function getFullname(student){
    var fullName;

    // do stuff to get full name

    return fullName;
}

// 1.4 testing
console.log(getFullname(student1));


// ####  
// 1.4: Object with properties and functions. 
//      
// 1.4: Exercise
//      Add two new students 
//      student6 and student7 with unique name/test info and with a 
//      method named FullName.  That method gets the FullName of the student. 
//      (use the same format as the stand alone function above) 
//        
//  method name: FullName
//         args: none (it will access properties on the object)
//         return: string representing full name: "last, first" i.e. "Smith, Bob"
//
// NOTE: notice the "this" key word. "this" refers to the object and basically says
//       use the var "Brand" tha is on "this" object.  

// example of method on object
var car1 = { Brand: "VW", 
             Model: "Bug",
             GetName: function() {
                return this.Brand + " " + this.Model;},
            }
// test code: print the full name of the student5 and student6
// i.e.
console.log(car1.GetName());

// ####
// 1.5: add metod to student objects that retruns the average of the test scores.
//      name: TestsScoreAvg
//      args: none (using testscore properties on object)
//      retrun: average (number)
//      
//      Loop through testscore and add the scores then divide by number of tests.     

// ####
// 1.5: Use Constructor to create objects
// TBD

            