class Animal {
    constructor (gas, speed) {
        this.kingdom = "Animalia";
        this.gasBreathed = gas;
        this.speed = speed;
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

// SubClass Examples:
class Dog extends Animal{
    constructor (speed, pitch) {
        super("dog-oxygen", speed);
        this.bark_pitch = pitch;
    }

    bark(){
        if (this.bark_pitch == "low") {
            console.log("WRUFF")
        } else if (this.bark_pitch == "high") {
            console.log("YIPP YIPP")
        } else {
            console.log("Bark!")
        }
    }
}

var fluffy = new Dog(15, "high");
console.log(`${fluffy.gasBreathed} ${fluffy.speed} ${fluffy.bark_pitch}`);
fluffy.bark();

var fightO = new Dog(200, "low");
console.log(`${fightO.gasBreathed} ${fightO.speed} ${fightO.bark_pitch}`);
fightO.bark();

