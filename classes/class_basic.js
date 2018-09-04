class Animal {
    constructor (gas) {
        this.kingdom = "Animalia";
        this.gasBreathed = gas;
    }

    breathe() {
        console.log("Animal Took a breath of: " + this.gasBreathed);
    }
}

var a1 = new Animal("oxygen");
var a2 = new Animal('methane');

console.log(a1.kingdom);
console.log(a1.gasBreathed);
console.log(a2.kingdom);
console.log(a2.gasBreathed);

a1.breathe();
a2.breathe();
