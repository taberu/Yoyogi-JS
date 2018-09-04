var fs = require('fs');

function convertToObject(data){
    var character = JSON.parse(data);

    return character;
}

// Process Data Read in from file
// Create Ojbects
function readData(err, data) {
    if (err) {
        console.log(err);
    }

    // convert saved data from string into a object -- Load Game
    var player = convertToObject(data);
    console.log(player);
}

// Open File and get data
fs.readFile("Game_Save.json","utf8", readData);