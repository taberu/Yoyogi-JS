var gameData = "";
var isDataRead = false;

// create a file system object names fs
var fs = require('fs');

// Not Anonymous function 
function readData(err, data) {
    console.log("Inside readData")
    if (err) {
        console.log(err);
    }

    gameData = data;
    isDataRead = true;
    // convert JSON data into a JS object
    // var character = JSON.parse(data);
    // console.log(character);

    // var char_as_str = JSON.stringify(character);
    // console.log(char_as_str);
    //console.log(data);
}

// read from file using a normal function
// this is an asyncronous function 
fs.readFile("Game_Save.json","utf8", readData);

// read from file using an anonymous function
//fs.readFile("data.txt","utf8", function (err, data){ console.log(data); } );
//fs.readFile("data.txt","utf8", function (err, data){ console.log("Second File was read!"); } );

// write to a file
//fs.writeFile("save2.txt", "Hello world Form writing to file");

// 1) Store Game Character Data in a file as JOSN data
// 2) Create function to read in data
// 3) DeSeralize Data: Create a function to Parse data and return character objects
// 4) run game: update data
// 5) Seralize Data: Convert object to JSON strings.
// 6) save JOSN data to file

// while (true) {
//     //
//     if (isDataRead == true) {
//         console.log("Game Data: " + gameData)
//     }
// }

console.log("Game Data: " + gameData)
console.log(isDataRead);

