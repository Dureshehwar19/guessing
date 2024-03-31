#! /usr/bin/env node
import inquirer from"inquirer";

//1) computer will generate a random number
//2) user input from guessing number
//3) campare user inout with computer generated number and show reault

const randomNumber= Math.floor(Math.random()*6+1);

const answer= await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"please guess a number between 1 to 6:"
    }
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("congratulations! you guessed right number");
}
else{
    console.log("you guessed wrong number");
}