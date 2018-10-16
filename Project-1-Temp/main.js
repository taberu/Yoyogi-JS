// import the Student class
const Student = require("./Student.js");

var seniors = new Array(); 
var juniors = new Array();

function addStudent(studentObject, studentList){
    studentList.push(studentObject);
}

// function addStudentCreateNew(firstName, lastName, studentList){
// }

function removeStudent(studentObject, studentList) {
    // initalize index.
    var index = -1;

    // Get the position of the studentin the list
    for (var i = 0; i < studentList.length; i++){
        console.log(studentList[i]);
        if (studentObject.firstName == studentList[i].firstName) {     
                index = i;
        }
    }

    // if student is in array, remove them
    if (index > -1) {
        studentRemoved = studentList.splice(index, 1);
        console.log(`${studentRemoved.toString()} removed from list. `);
    } else {
        console.log(`${studentObject.toString()} is not in the list. `);
    }
}

// function printStudents(list){
//     list.forEach(function(element){
//         console.log(element.firstName);
//     });

//     // this does the same thing, but uses => fat arrow function

//     // list.forEach(element => {
//     //     console.log(element.firstName);
//     // });
// }


// testing
var jack = new Student("Jack", "Smith", 12);
var jill = new Student("Jill", "Smith", 12);
var sara = new Student("sara", "jones", 11)

console.log(jack.firstName);

jack.addTestScore(10);
jack.addTestScore(30);

jack.printTestScore();

console.log("+++++++");

console.log(jack.getTestAverage());

console.log(jack.toString());
console.log(jill.toString());

addStudent(jack, seniors);
addStudent(jill, seniors); 
addStudent(new Student("Barry", "Jones", [0,2, 12]), seniors);

var mary = new Student("Mary", "Linn", [3,55, 99]);
addStudent(mary, seniors);

console.log(seniors);
console.log(seniors[0]);

// testing 
// printStudentList("Seniors 2018", seniors);
// printStudentList("Juniors 2018", juniors);

removeStudent(mary, seniors);
console.log(seniors);

// Add juniors
addStudent(sara, juniors);
console.log(juniors);