function computerPlay() {

    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    let computerChoice = "rock";
    if (randomNumber === 1) {
        computerChoice = "paper";
    }
    else  if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie! We both chose " + playerSelection + "."; 
    }

    if (playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock"){
        return "loss";
    }
    
    if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"){
        return "Win";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));