this.name = "global_name";

var person = {
    name : "jack",
    printNameArrow : () => {console.log(this.name)},
    printNameFunc : function() {console.log(this.name)},
}

console.log(`Global: this.name is ${this.name}`);
person.printNameArrow();
person.printNameFunc();

