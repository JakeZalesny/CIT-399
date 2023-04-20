/* 
This is a really good way to organize thoughts and our code
Leads to a lot less refactoring. 

Introduce player to the game
Add three buttons to the UI
When User clicks button: 
    Get Random Number
    Which button was clicked
    compare the choice with the random
    output the appropriate message


*/
import { qs, random } from "./utils.mjs";

 

//default export is really meant for when you're exporting one thing
export default class RockPaperScissors {
    
    //called automatically when we're using the class. Can't be asynchronous.  
    constructor(outputElement) {
        this.outputElement = outputElement;
        this.playerChoice = -1; 
        this.computerChoice = -1; 
        buildUI(this.outputElement);
        qs("#rock", this.outputElement).addEventListener('click', this.compareChoices);
        qs("#paper", this.outputElement).addEventListener('click', this.compareChoices);
        qs("#scissors", this.outputElement).addEventListener('click', this.compareChoices);
    }

    // In case we need to get anything built asynchronously
    //async init(){}

    getComputerChoice() {
        //get random number
        //convert to paper/rock/scissors
        this.compareChoices = random(3);
    }

    getUserChoice(el) {
        console.log(el);
        this.playerChoice = el.dataset.choice; 
    }

    compareChoices(ev) {
        // get the user choice
        this.getUserChoice(ev.target); 
        // get the computer choice
        const compChoice = this.getComputerChoice(); 
        // compare the two
        if(this.playerChoice === this.computerChoice){
            console.log("Tie")
        }
        
        else if(this.playerChoice == 0 && this.computerChoice == 1) {
            console.log("Computer Wins");
        }

        else if(this.playerChoice == 1 && this.computerChoice == 2) {
            console.log("Computer Wins");
        }

        else if(this.playerChoice == 2 && this.computerChoice == 0) {
            console.log("Computer Wins");
        }

        else {
            console.log("Player Wins")
        }

        let message = "temp";
        // output correct message
        outputMessage(message);
    }


}


function outputMessage(outcome) {

}

function buildUI(element) {
    const html = `<button id="rock" data-choice="0">Rock</button>
    <button id="paper" data-choice="1">Paper</button>
    <button id="scissors" data-choice="2">Scissors</button>
    <div id="output"></div>`;
    element.innerHTML = html; 

}