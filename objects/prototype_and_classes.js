// Prototype Example
function Kids(name){
    this.name = name;
}

// Class Example
class CKids {
    constructor(name) {
        this.name = name;
    }
}

// instantiate objects
k1 = new Kids("Bruce");
k2 = new Kids("Kevin");
ck1 = new CKids("Dave");
    
// Modify Prototype of class
Kids.prototype.yellName = function (){
    console.log("Function Constructor: " + this.name + "!!!!!!");
}

k1.yellName();
k2.yellName();

// Modify Protoype of Class
CKids.prototype.yellName = function (){
    console.log("Class: " + this.name + "!!!!!!");
 }

 ck1.yellName();