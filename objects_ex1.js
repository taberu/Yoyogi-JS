// Objects hold collections of properties (variables) and methods (functions)
// They are defined as a key:value pair.  
// The "key" is the name, and "value" is the data that is stored.

// ####
// 1.1: simple object with properties (vars) only
// 
// Using the example objects below, 
// create objects named student3 and student4 with different name/test scores values. 
// ###

// example objects
var student1 = {firstName: "Bob", lastName: "Smith", testScore: [90,32,56]};
var student2 = {firstName: "Mary", lastName: "Jones", testScore: [60,92,86]};



// Accessing values of properties. There are two ways to access property data
// student1.firstName
// -or-
// student1["firstname"]
console.log(student1.firstName);
console.log(student1["firstName"]);

// ####
// 1.2: createa a function named getFullName that prints the first and last name
//      name: getFullname()
//      args: student (an object)
//      return: return a string that is the full name in this format:
//            "last, first" i.e. "Smith, Bob"

// ####  
// 1.3: Object with properties and functions. Add two new students 
//      student5 and studetn6 with unique name/test info and with a 
//      method named FullName, that gets the FullName of the student. 
//      (use the same format as the stand alone function above) 
//        
//  method name: FullName
//         args: none (it will access properties on the object)
//         return: string representing full name: "last, first" i.e. "Smith, Bob"

// example of method on object
var car1 = { Brand: "VW", 
             Model: "Bug",
             GetName: function() {
                return this.Brand + " " + this.Model;
             },
            }
// test code: print the full name of the students
// i.e.
console.log(car1.GetName());

            