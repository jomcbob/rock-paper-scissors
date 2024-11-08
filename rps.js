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
        ++computerScore
        ++humanScore
        return ("you tie you both picked paper");
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        ++humanScore
        return ("you win! scissors beats paper");
    } else if (computerChoice == "rock" && humanChoice == "rock") {
        ++computerScore
        ++humanScore
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
        ++computerScore
        ++humanScore
        return ("you tie you both picked scissors");
    } else return ("nice try enter a vaild option");

}

let humanChoice = "";
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let newGame = document.querySelector("#newGame");
const container = document.querySelector("#container");
let buttons = document.querySelector('button')

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

let playChoice = function (event) {
    humanChoice = event
    let computerChoice = getComputerChoice();
    const content = document.createElement("div");
    content.textContent = ('You chose: ' + humanChoice);
    container.appendChild(content);

    const content2 = document.createElement("div");
    content2.textContent = (' The computer chose: ' + computerChoice);
    container.appendChild(content2);

    const content3 = document.createElement("div");
    content3.textContent = (playRound(humanChoice, computerChoice));
    container.appendChild(content3);

    const content4 = document.createElement("div");
    content4.textContent = (humanScore + " your score");
    container.appendChild(content4);

    const content5 = document.createElement("div");
    content5.textContent = (computerScore + " computer's score");
    container.appendChild(content5);

    const content6 = document.createElement("div");
    if (computerScore == 5 && humanScore == 5) {
        content6.textContent = ("You tie press any button to try again")
        container.appendChild(content6);
        buttons.addEventListener("click", () => {
            window.location.reload();
        });
    } else if  (humanScore > 4) {
        content6.textContent = ("You win the Game!!! press any button to go again");
        container.appendChild(content6);
        rock.addEventListener("click", () => {
            window.location.reload();
        });
        paper.addEventListener("click", () => {
            window.location.reload();
        });
        scissors.addEventListener("click", () => {
            window.location.reload();
        });


    } else if (computerScore > 4) {
        content6.textContent = ("You lose press any button to try again");
        container.appendChild(content6);
        buttons.addEventListener("click", () => {
            window.location.reload();
        });
    } 
};

newGame.addEventListener("click", () => {
    window.location.reload();
});














