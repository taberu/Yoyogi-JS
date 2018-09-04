

var strArray = ['h','e','l','l','o'];

var strString = "brian";

console.log(strString.length);

for (var i = 0; i < strArray.length; i++) {
    console.log("ARRAY: " + strArray[i]);
}

for (var i = 0; i < strString.length; i++) {
    console.log("STRING: " + strString[i]);
}


function ListElements(stuff) {
    console.log("STUFF IS: " + stuff);
    console.log("STUFF.LENGTH: " + stuff.length);
    console.log("STUFF TYPE: " + typeof stuff);

    if (typeof stuff === "number") {
        console.log("SORRY THIS IS A NUMBER: Good-bye");
        
        throw(TypeError);
        return;
    }
    
    if (typeof stuff === "boolean") {
        console.log("SORRY THIS IS A BOOLEAN: Good-bye");
        return;
    }

    if (typeof stuff == "number") {
        for (var index = 0; index < stuff.length; index++){
            console.log("STUFF: " + stuff[index]);
        }
    }


    console.log();
}

ListElements(strArray);
ListElements(strString);
//ListElements(42);

try{
    ListElements(42);
}
catch(err)
{
    console.log("I Caught an error: " + err.message);
}

var foo2 = 42;
 foo2  / 0;



