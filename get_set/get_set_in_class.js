class Animal {
    constructor (gas) {
        this.kingdom = "Animalia";
        this.gasBreathed = gas;
        this.nickname = "none";
    }

    breathe() {
        console.log("Animal Took a breath of: " + this.gasBreathed);
    }
    
    get Nickname() {
        // maybe always return in lower case 

        // Verify password
        // if password correct then
        return this.nickname;
        // else
        //    print No Access
    }

    set Nickname(new_nickname) {
        if (new_nickname == "Sam"){
            console.log("Don't use real names");
        } else {
            this.nickname = new_nickname;
        }
    }
}

// testing 
var my_pet = new Animal("o2");

my_pet.Nickname = "Sam";
my_pet.Nickname = "Picacue";
console.log(my_pet.Nickname);