console.log("Hello World!");

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

let humanScore = 0;
let computerScore = 0;


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
        return ("you tie you both picked scissors");
    } else return ("nice try enter a vaild option");

}





humanChoice = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    humanChoice = "rock";
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(humanScore + " your score");
    console.log(computerScore + " computer's score");
    if (humanScore > 4) {
        humanScore = 0;
        computerScore = 0;
        console.log("You win the Game!!!")
        console.log("starting new game now");
        console.log("");
    } else if (computerScore > 4) {
        humanScore = 0;
        computerScore = 0;
        console.log("you lose")
        console.log("starting new game now");
        console.log("");
    }
});

paper.addEventListener("click", () => {
    humanChoice = "paper";
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(humanScore + " your score");
    console.log(computerScore + " computer's score");
    if (humanScore > 4) {
        humanScore = 0;
        computerScore = 0;
        console.log("You win the Game!!!")
        console.log("starting new game now");
        console.log("");
    } else if (computerScore > 4) {
        humanScore = 0;
        computerScore = 0;
        console.log("you lose")
        console.log("starting new game now");
        console.log("");
    }
});

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(humanScore + " your score");
    console.log(computerScore + " computer's score");
    if (humanScore > 4) {
        humanScore = 0;
        computerScore = 0;
        console.log("You win the Game!!!")
        console.log("starting new game now");
        console.log("");
    } else if (computerScore > 4) {
        humanScore = 0;
        computerScore = 0;
        console.log("you lose")
        console.log("starting new game now");
        console.log("");
    }
});













