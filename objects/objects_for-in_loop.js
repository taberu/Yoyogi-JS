// This object describe a automobile. 
// Brand is the maker
// Model is the type of car
var car1 = { Brand: "VW", 
             Model: "Bug",
             GetName: function() {
                 return this.Brand + " " + this.Model;
            },
            PartCount: {
                Wheels: 4,
                Doors: 6,
                Windows: 5,
            }
        }
console.log("Wheel Count: " + car1.PartCount.Wheels);

console.log(car1.Brand);
console.log(car1["Brand"]);

console.log(car1);
console.log(car1.length);

// This is looping through car object
// It use the typeof operator to print only the properties, not functions
for (key in car1) {
    if (typeof car1[key] != "function") {
        console.log("KEY is: "  + key);
        console.log("VALUE is: " + car1[key]);
    } else {
        console.log("THIS is a funtion");
        
        console.log( car1[key]());
    }
}

for (key in car1.PartCount) {
    console.log("KEY: " + key);
}

