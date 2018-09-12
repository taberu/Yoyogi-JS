const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

console.log("1");

function askQuestionsRecursively(){
    rl.question('What is your favorite color? ', (answer) => {
        if (answer == 'exit') {
            rl.close();
        }
    
        console.log(`${answer} is my favorite too!`);
        askQuestionsRecursively();
    });
}

askQuestionsRecursively();

