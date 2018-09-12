const Student = require("./Student.js");

var students = new Array();

// test
var jack = new Student("Jack", "Smith", 1);
var jill = new Student("Jill", "Smith", 2);
console.log(jack.firstName);


// stuff for project 
function addStudent(list, student) {
    list.push(student);
}

function printStudents1(list){
    list.forEach(function(element){
        console.log(element.firstName);
    });
}

function printStudents2(list) {
    list.forEach(element => {
        console.log(element.firstName);
    });
}

addStudent(students, jack);
addStudent(students, jill);
printStudents1(students);
printStudents2(students);

jack.addTestScore(10);
jack.addTestScore(30);
jack.printTestScore();

