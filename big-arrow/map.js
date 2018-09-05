var theKids = [
    "Dave Foley",
    "Bruce McCulloch",
    "Kevin McDonald",
    "Mark McKinney",
    "Scott Thompson"
]

// pass a normal function to map
function daveItUp(name) {
    return "Dave you know " + name + " Dave!!! \n";
}

var kidsDaved = theKids.map(daveItUp);
console.log(`kidsDaved contents: ${kidsDaved}`);


// // pass an anonymous function to map
var kidsLength = theKids.map(function(name){return name.length});
console.log(`kidsLenth contents: ${kidsLength} \n`);


// // pass an arrow function (fat arrow, lambda) to map
var kidsCrushing = theKids.map(name => {return name + " I'm crushing your head! \n"})
console.log(`kidsCrushing contents: ${kidsCrushing} \n`);

// Create a second array to show .map is being called on the specific array
var nums = [1,2,3];
var bigNums = nums.map(num => {return num * 1000;})
console.log(bigNums);