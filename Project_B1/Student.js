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

    getTestAverage(){
        var testAvg = 0;
        var total = 0;

        // for (var x = 0; x < this.testScores.length; x++) {
        //     total = total + this.testScores[x];
        //     // total += this.testScores[x];
        // //    console.log(this.testScores[x]);
        // }

        this.testScores.forEach(element => { total = total + element; } )

        // divide total by lenght of testScores
        testAvg = total / this.testScores.length;
        return testAvg;
      
       //  return total / this.testScores.length;
    } 

    toString(){
        return `${this.lastName}, ${this.firstName}`;
    }
} // end of class

module.exports = Student;
//exports.data = Student;