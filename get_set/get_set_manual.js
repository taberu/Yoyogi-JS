// This is manually creating getter and setter functions
// Note: this is not the way to do it in JavaScript
// Note: Use the build in get, set 

var name = "default name";

function Get_Name() {
    return name;
}

function Set_Name(new_name) {

    if (new_name == "vulgar") {
        return null;
    }

    name = new_name;
}

Set_Name("Jack");
Set_Name("vulgar");

console.log(name);
console.log(Get_Name());

console.log(k1.toString());