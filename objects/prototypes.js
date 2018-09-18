// Prototype Example

function Kids(name){
    this.name = name;
    this.yellName = function() {
       console.log(this.name + "!!!!!!");
    }
}

class CKids {
    constructor(name) {
        this.name = name;
    }

    YellName(){
        console.log(this.name + "!!!!!!"); 
    }

    toString() {
        return this.name;
    }
}

class Ckids2 extends CKids {
    YellName() {
       super.YellName();
       //console.log(this.name + "CKIDS 2 !!!!!!");
    }
}

ck1 = new CKids("Dave");
ck1.YellName();    

ck2 = new Ckids2("Joe");
ck2.YellName();
//ck2.super.YellName();

k1 = new Kids("Bruce");
k2 = new Kids("Kevin");

k1.yellName();
k2.yellName();

Kids.prototype.PrintTroupeName = function (){
   console.log("Kids In The Hall");
}

Kids.prototype.toString = function () {
    return this.name;
}

k1.PrintTroupeName();
k2.PrintTroupeName();

CKids.prototype.PrintTroupeName = function (){
    console.log("CKids In The Hall");
 }

 ck1.PrintTroupeName();

console.log(k1.toString());
console.log(ck1.toString());

var x = 5;
console.log(x.toString());
var s = "hello";
console.log(s.toString());
var a = new Array();
a.push(42);
a.push(52);
console.log(a.toString());
console.log(ck1);

