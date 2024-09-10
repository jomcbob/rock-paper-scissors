console.log("Hello World!");
//Create a new function named getComputerChoice.
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
//Test that function returns what I expect using console.log


   let getComputerChoice = Math.floor(Math.random() * 10);
    if (getComputerChoice <= 3) {
        getComputerChoice = ("scissors");
    } else if (getComputerChoice <= 6 && getComputerChoice > 3) {
        getComputerChoice = ("rock");
    } else if (getComputerChoice <= 9 && getComputerChoice > 6) {
        getComputerChoice = ("paper");
    }
    

// make a function called getHumanChoice that gets input from the user 
// use prompt to tell user in input something
//Test that function returns what I expect using console.log

let getHumanChoice = prompt("type rock, paper, or scissors, in the box below please.").toLowerCase();


    //console.log(getHumanChoice() + ", your choice");
   // console.log(getComputerChoice() + ", computer choice");

    let humanScore = 0;
    let computerScore = 0;

    // make a new function call playRound that takes robot and human choices and says who wins
    // make it so that even if they put in RoCk it still works
    // increase humanScore or computerScore based on who won

    function playRound(humanChoice, computerChoice) {
        if (getComputerChoice == "paper" && getHumanChoice == "rock") {
            return("you lose paper beats rock");
        } else if (getComputerChoice == "paper" && getHumanChoice == "paper") {
            return("you tie you both picked paper");
        } else if (getComputerChoice == "paper" && getHumanChoice == "scissors") {
            return("you win! scissors beats paper");
        } else if (getComputerChoice == "rock" && getHumanChoice == "rock") {
            return("you tie you both picked rock");
        } else if (getComputerChoice == "rock" && getHumanChoice == "paper") {
            return("you win! paper beats rock");
        } else if (getComputerChoice == "rock" && getHumanChoice == "scissors") {
            return("you lose rock beats scissors"); 
        } else if (getComputerChoice == "scissors" && getHumanChoice == "rock") {
            return("you win! rock beats scissors");
        } else if (getComputerChoice == "scissors" && getHumanChoice == "paper") {
            return("you lose scissors beats paper");
        } else if (getComputerChoice == "scissors" && getHumanChoice == "scissors") {
        } else return("did not enter a choice try another choice");
        }


    console.log(getHumanChoice + ", your choice");
    console.log(getComputerChoice + ", computers choice");
    console.log(playRound());



 