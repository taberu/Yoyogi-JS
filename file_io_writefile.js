function convertOjectToString(player_object) {
    var object_as_string = JSON.stringify(player_object);

    return object_as_string;
}

// create player object
var player = {Name:"Bob", Level:1, Gold:200};

// play game -- modify player
player.Gold = player.Gold + 2000;
player.Level = 2;

// SAVE GAME 

// convert player object back into a string
var player_as_string = convertOjectToString(player);

function WriteFileError(err) {
    if (err) {
        console.log("Error saving game data: " + err);
    } else {
        console.log("Saved Game Data Successfully");
    }
}
// write to a file
var fs = require('fs');
fs.writeFile("game_save_2.txt", player_as_string, WriteFileError);