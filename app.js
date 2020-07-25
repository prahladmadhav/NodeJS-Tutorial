const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let answer = num1 + num2

rl.question(`(Q) What is ${num1} + ${num2}? \n(A) `,
(userInput)=>{
    if (userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt(`Incorrect! Try again. \n(A) `);
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer ${userInput} is incorrect! Try again. \n(A) `);
                rl.prompt();
            }
        })
    }
});

rl.on('close',()=>{
    console.log(`Correct`);
})