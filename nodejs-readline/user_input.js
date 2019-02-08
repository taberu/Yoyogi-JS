const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

console.log("1");

rl.question('What is your favorite color? ', (answer) => {
    console.log(`${answer} is my favorite too!`);
    rl.close();
});

console.log("2");
