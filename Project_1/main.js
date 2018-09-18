// import the Student class
const StudentClassFromImport = require("./Student.js");

// list of students 
var students = new Array();

// functions to manipulate student list
function addStudent(list, student) {
    // ToDo: should add check to make sure student is not in list already
    list.push(student);
}

function removeStudent(list, student) {

}

function printStudents(list){
    list.forEach(function(element){
        console.log(element.firstName);
    });

    // this does the same thing, but uses => fat arrow function

    // list.forEach(element => {
    //     console.log(element.firstName);
    // });
}

// testing

var jack = new StudentClassFromImport("Jack", "Smith", 1);
var jill = new StudentClassFromImport("Jill", "Smith", 2);
console.log(jack.firstName);

addStudent(students, jack);
addStudent(students, jill);

printStudents(students);

jack.addTestScore(10);
jack.addTestScore(30);

jack.printTestScore();

