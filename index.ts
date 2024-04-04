#! //usr/bin/eve node

import inquier from "inquirer"

//computer will generate a random number
// user input for guessing number
// Compare user input with computer genrated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquier.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6",
}
]);

if(answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number")
} else {
console.log("You guessed wrong number")
}
