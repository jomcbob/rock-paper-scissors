console.log("Hello World!");
//Create a new function named getComputerChoice.
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
//Test that function returns what I expect using console.log

function getComputerChoice() {
   let choice = Math.floor(Math.random() * 10);
    if (choice <= 3) {
        return("scissors");
    } else if (choice <= 6 && choice > 3) {
        return("rock");
    } else if (choice <= 9 && choice > 6) {
        return("paper");
    }
    }

// make a function called getHumanChoice that gets input from the user 
// use prompt to tell user in input something
//Test that function returns what I expect using console.log


    console.log(prompt("type rock, paper, or scissors, in the box below please.") + ", your choice")
    console.log(getComputerChoice() + ", computer choice");