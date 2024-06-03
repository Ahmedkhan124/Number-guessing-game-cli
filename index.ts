#! /usr/bin/env node
import inquirer from "inquirer"

// printing  a welcome message 
console.log("Welcome to the Cli number guessing game");

// Generating the random number between 1 to 10
const randomNumber = Math.floor(Math.random() * 10 + 1);
let condition = true; 

let attempts = 1;

// starting the game loop
while(condition){
    const userAns = await inquirer.prompt(
        {
            type: "number",
            name: "userNum",
            message: "Enter a number between 1 - 10:"
        }
    )

    // Extract the user input
    let {userNum} = userAns;

    console.log(`\nYour attempt count.${attempts}`);
    
    // Check if the user's number matches the random number
    if(userNum === randomNumber) wonMath();
    if(userNum > randomNumber) greaterNum();
    if(userNum < randomNumber) lessNum();

// Function to execute when the user guesses correctly
    function wonMath(){
        console.log("Congratulations! you guess a correct number");
        console.log(`\n You have attempt ${attempts} times to guess a correct number`);
        condition = false; // Exit the loop 
    }

// Function to execute when the user guesses is too high
    function greaterNum(){
        console.log("Sorry! You guess a high number\n"); 
        attempts++; // Increment attempts
    }

    // Function to execute when the user guesses is too low
    function lessNum(){
        console.log("Sorry! You guess a low number\n");
        attempts++; // Increment attempts
    }
    
    
}

