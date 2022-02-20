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

const message = document.createElement("p")
const container = document.querySelector('#container');
const count = document.createElement("p")
container.appendChild(message);
container.appendChild(count);
const winMessage = document.createElement("p")
const loseMessage = document.createElement("p")
winMessage.textContent = "You win! the game!"
winMessage.style.color ='green';
loseMessage.textContent = "I win this time!";
loseMessage.style.color='red';

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {

    button.addEventListener("click", () => {
        game(button.id);
    });
});

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "tie" 
    }

    if (playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "rock" && computerSelection == "paper" 
            || playerSelection == "scissors" && computerSelection == "rock"){
        return "loss";
    }
    
    if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors" 
            || playerSelection == "scissors" && computerSelection == "paper"){
         return "win";
    }
}

let ties = 0;
let wins = 0;
let losses = 0;

function game(playerChoice) {
    if (container.contains(loseMessage)){
        container.removeChild(loseMessage);
    }

    if (container.contains(winMessage)){
        container.removeChild(winMessage);
    }
  
    let computerChoice = computerPlay();
    let result = playRound(playerChoice, computerChoice)

    if (result == "tie"){
        message.textContent = "It's a tie! We both chose " + playerChoice + "."; 
        ties++;
    }
    else if (result == "win"){
        message.textContent =  "You win! " + capitalize(playerChoice) + " beats " + computerChoice + ".";
        wins++;
    }
    else if (result == "loss"){
        message.textContent = `You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`
        losses++;
    }

    count.textContent = (`${losses} losses, ${wins} wins, and ${ties} ties.`)
    
    if(wins>=5){
        container.appendChild(winMessage);
        ties = 0;
        wins = 0;
        losses = 0;
    }

    if(losses>=5){
        container.appendChild(loseMessage);
         ties = 0;
         wins = 0;
         losses = 0;
    }
}

function capitalize(string){ //This function is here to capitalise playerSelection and ComputerSelection at the start of sentences.
    let firstLetter = string.charAt(0);
    let capitalisedFirstLetter = firstLetter.toUpperCase();
    let subsequentLetters = string.slice(1);
    let capitalizedString = capitalisedFirstLetter + subsequentLetters;
    return capitalizedString;
} 