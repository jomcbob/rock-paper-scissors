let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let newGame = document.querySelector("#newGame");
const container = document.querySelector("#container");

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

function playRound(hu, com) {
    if (com == "paper" && hu == "rock" || com == "rock" && hu == "scissors" || com == "scissors" && hu == "paper") {
        ++computerScore
        return (`you lose ${com} beats ${hu}`);
    } else if (com == "paper" && hu == "scissors" || com == "rock" && hu == "paper" || com == "scissors" && hu == "rock") {
        ++humanScore
        return (`you win! ${hu} beats ${com}`);
    } else if (com == hu) {
        ++computerScore
        ++humanScore
        return (`you tie you both picked ${hu}`);
    }
}

paper.addEventListener("click", () => {
    playChoice("paper")
});
scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playChoice("scissors")
});
rock.addEventListener("click", () => {
    playChoice("rock")
});
let gameEnd = function () {
    document.querySelectorAll("button").forEach((element) => 
        element.addEventListener("click", () => window.location.reload()))
};



let playChoice = function (event) {
    humanChoice = event
    let computerChoice = getComputerChoice();
    const content2 = document.createElement("div");
    content2.textContent = (`You chose: ${humanChoice}---The computer chose: ${computerChoice}`);
    container.appendChild(content2);

    const content3 = document.createElement("div");
    content3.textContent = (playRound(humanChoice, computerChoice));
    container.appendChild(content3);

    const content4 = document.createElement("div");
    content4.textContent = (humanScore + " your score");
    container.appendChild(content4);

    const content5 = document.createElement("div")
    content5.textContent = (computerScore + " computer's score");
    container.appendChild(content5);

    const content6 = document.createElement("div");
    if (computerScore == 5 && humanScore == 5) {
        content6.textContent = ("You tie press any button to try again")
        gameEnd()
    } else if (humanScore > 4) {
        content6.textContent = ("You win the Game!!! press any button to go again");
        gameEnd()
    } else if (computerScore > 4) {
        content6.textContent = ("You lose press any button to try again");
        gameEnd()
    } container.appendChild(content6);
};

newGame.addEventListener("click", () => {
    window.location.reload();
});














