console.log("Hello World!");
//Create a new function named getComputerChoice.
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
//Test that function returns what I expect using console.log

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10);
    if (computerChoice <= 3) {
        computerChoice = ("scissors");
    } else if (computerChoice <= 6 && computerChoice > 3) {
        computerChoice = ("rock");
    } else if (computerChoice <= 9 && computerChoice > 6) {
        computerChoice = ("paper");
    }

    return (computerChoice);
}

// make scores to keep track of points
let humanScore = 0;
let computerScore = 0;

// make a new function call playRound that takes robot and human choices and says who wins
// make it so that even if they put in RoCk it still works
// increase humanScore or computerScore based on who won

function playRound(humanChoice, computerChoice) {
    if (computerChoice == "paper" && humanChoice == "rock") {
        ++computerScore
        return ("you lose paper beats rock");
    } else if (computerChoice == "paper" && humanChoice == "paper") {
        return ("you tie you both picked paper");
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        ++humanScore
        return ("you win! scissors beats paper");
    } else if (computerChoice == "rock" && humanChoice == "rock") {
        return ("you tie you both picked rock");
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        ++humanScore
        return ("you win! paper beats rock");
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        ++computerScore
        return ("you lose rock beats scissors");
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        ++humanScore
        return ("you win! rock beats scissors");
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        ++computerScore
        return ("you lose scissors beats paper");
    } else if (computerChoice == "scissors" && humanChoice == "scissors") {
        return("you tie you both picked scissors");
    } else return ("nice try enter a vaild option");

}



//get the result of five rounds of the game. the player choice and computer choice displays on the console
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`The computer chose: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(humanScore + " your score");
        console.log(computerScore + " computer's score");
    }
}


playGame();
if (humanScore > computerScore) {
    console.log("You win the Game!!!")
} else if (computerScore > humanScore) {
    console.log("you lose refresh the page to try again")
} else console.log("it's a tie refresh the page to try again")









