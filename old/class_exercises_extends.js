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

// Sub - Class Exzmaples:
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

// Create a new subclass callsed Fish.  Fish is a subclass of Animal
// Fish breath fish-oxygen (pass this to the super constructor)
// Fish Swim() method.  And swim uses spped property 
// Fish doesTasteGood (true, false)
//
// Testing: Create 3 fish objects: Nemo, Charlie, Clive
//
// var nemo = new Fish(400, "bad");
class Fish extends Animal {
    constructor (name, taste, speed) {
        super("fish-oxygen");
        this.name = name;
        this.taste = taste;
        this.speed = `${this.name} can swim ${this.speed}`;
    }
}

var fish1 = new Fish('Nemo', "It's too yummy!", 90);

console.log(fish1.name);
