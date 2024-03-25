#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Game:lets guess a number between 1 to 10 in 3 tries");
let rand = Math.floor(Math.random() * 9 + 1);
let numTries = 3;
let play = true;
let actualGuess = rand;
while (play) {
    while (numTries > 0) {
        const answer = await inquirer.prompt([{
                name: 'MyGuess',
                type: 'number',
                message: 'please enter a number'
            }]);
        //console.log(answer)
        if (answer.MyGuess == actualGuess) {
            console.log("Hurry! your guess is correct");
            numTries = 0;
        }
        else {
            console.log("your guess is wrong");
            if (actualGuess > answer.MyGuess) {
                console.log("think higher");
            }
            else {
                console.log("think lower");
            }
            console.log(`you have ${numTries - 1} left`);
        }
        numTries--;
    }
    const answerplay = await inquirer.prompt([{
            name: 'playagain',
            type: 'confirm',
            message: 'Do you want to playAGain'
        }]);
    if (answerplay.playagain == true) {
        numTries = 3;
        rand = Math.floor(Math.random() * 9 + 1);
        actualGuess = rand;
    }
    else {
        console.log("existing game");
        play = false;
    }
}
