
//computer makes a random choice
let choices = ['rock', 'paper', 'scissors'];
let comChoice = choices[Math.floor(Math.random() * choices.length)];
//user choice collected
let answer = ' ';
//supposed to add up scores
let computerCount = Number(document.getElementById('comPoints'));
let userCount = Number(document.getElementById('userPoints'));
//supposed to be where updated scores are kept
let pScore = 0;
let comScore = 0;
//supposed to display updated points
let userDisplay = document.querySelector("#userPoints span");
let comDisplay = document.querySelector("#comPoints span");
//supposed to say whether game is over or not
let gameOver = false;
//buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
//resets game
function resetButton() {
    location.reload()
}
//user enters their name
let btn = document.getElementById("uname");
let playerName = [];

btn.addEventListener("click", function player() {
    let ainm = document.getElementById("gname");

    if (ainm.value != "") {
        playerName.push(ainm.value);
        return playerName;
    } else {
        alert("Please enter your first name");
    }

});
//reset button
let pustToReset = document.getElementById('reset').addEventListener('click', resetButton);
//users choice
let comparisonOne = document.getElementById('rock').addEventListener('click', selectionRock);
let comparisonTwo = document.getElementById('paper').addEventListener('click', selectionPaper);
let comparisonThree = document.getElementById('scissors').addEventListener('click', selectionScissors);


function selectionRock() {
    answer = 'rock';
}
function selectionPaper() {
    answer = 'paper';

}
function selectionScissors() {
    answer = 'scissors';
}

//the acual game functionality 
let play = document.getElementById('start').addEventListener('click', () => {
    if (answer === null) {
        return document.getElementById('result').innerHTML = 'Please enter your choice.'
    }
    else if (comChoice === answer) {
        document.getElementById('result').innerHTML = 'You tied with the computer.'
    } else if (comChoice === 'rock' && answer === 'paper') {
        scoreUpdateCom()
        document.getElementById('result').innerHTML = `Sorry ${playerName}, you lost.`
    } else if (comChoice === 'paper' && answer === 'rock') {
        scoreUpdateUser()
        document.getElementById('result').innerHTML = `Yeah ${playerName}! You won!`
    } else if (comChoice === 'scissors' && answer === 'paper') {
        scoreUpdateCom()
        document.getElementById('result').innerHTML = `Sorry ${playerName}, you lost.`
    } else if (comChoice === 'paper' && answer === 'scissors') {
        scoreUpdateUser()
        document.getElementById('result').innerHTML = `Yeah ${playerName} ! You won!`
    } else if (comChoice === 'rock' && answer === 'scissors') {
            scoreUpdateCom()
      
        document.getElementById('result').innerHTML = `Sorry ${playerName}, you lost.`
    } else if (comChoice === 'scissors' && answer === 'rock') {
        scoreUpdateUser()
        document.getElementById('result').innerHTML = `Yeah ${playerName}! You won!`
        
    }
    if(comScore === 3){
       document.getElementById("result").innerHTML = "Game Over. You lost. Ha Ha Ha!"
    
    }else if (pScore === 3){
        document.getElementById("result").innerHTML = "Game Over. You won!!!"

    }
});

function scoreUpdateCom(){
    comScore+=1
     document.querySelector("#computerScore").innerHTML = `<p>${comScore}</p>`
     
}
function scoreUpdateUser(){
    pScore+=1
    document.querySelector("#userScore").innerHTML = `<p>${pScore}</p>`
    
}


/*07-challenge-rock-paper-scissors
Rock, Paper, Scissors
Start by creating a classic game of Rock Paper Scissors. Rock paper scissors is a classic two-player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.


The possible outcomes are but feel free to change these as needed for your version of the game:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Here are a few steps to get you started four parts:

Get the user’s choice.
Get the computer’s choice (random).
Compare the two choices and determine a winner.
Start the program and display the results.
After you have written your functional JS, give it a simple UI so that the player can play the game by clicking on buttons rather than typing their answer in a prompt.

Use HTML/CSS to build out your UI structure then add your JS and link up the components. (NOTE: This will likely require some refactoring!)

Be sure to take it one step at a time and be sure you met the minimal requirements of the assignment. 

Requirements
The game should keep score for the computer & the player
The game should display the player's name
The game should announce a winner of the game once one player reaches 3points
The game should have a replay or reset button
The game js can be stored internally or externally
The game styles should use properly (linked) and formatted CSS
Every HTML elements should be styled (ie: buttons, fonts, etc) - design is intentional
If You get stuck, here is a breakdown of each step (don't cheat, execute the concepts on your own as much as possible), happy coding!

Do these Last!
Create a 'scoreboard' - actual or not, that will display both the name of, (computer & playerName) and the current score
This will require an input on the page where the user can enter their name

Also, be sure to save and commit along the way (like when a piece is working properly)

Make sure your game only last (3 Rounds) 
Display the running score, and announce a winner of the game once one player reaches 3 points.

Add ONLY your working project to get hub and submit the link for review
         
   
*/
