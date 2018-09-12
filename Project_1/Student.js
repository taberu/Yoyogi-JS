class Student {
    constructor (firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.testScores = new Array();
    }

    addTestScore(score) {
        this.testScores.push(score);
    }

    printTestScore() {
        this.testScores.forEach(element => {
            console.log(element);
        });
    }
}

module.exports = Student;