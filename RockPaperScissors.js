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
// The below is test code which has been commented out.
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
    let ties = 0;
    let wins = 0
    let losses = 0
    for (i = 0; i<5; i++){
        let playerSelection = window.prompt("Paper, scissors, or rock?").toLowerCase();
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);

        if (result == "tie"){
            alert("It's a tie! We both chose " + playerSelection + "."); 
            ties++;
        }
        else if (result == "win"){
            alert("You win! " + capitalize(playerSelection) + " beats " + computerSelection + ".");
            wins++;
        }
        else if (result == "loss"){
            alert(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`)
            losses++;
        }
    }
    alert(`${losses} losses, ${wins} wins, and ${ties} ties.`)
}

game();


function capitalize(string){ //This function is here to capitalise playerSelection and ComputerSelection at the start of sentences.
    let firstLetter = string.charAt(0);
    let capitalisedFirstLetter = firstLetter.toUpperCase();
    let subsequentLetters = string.slice(1);
    let capitalizedString = capitalisedFirstLetter + subsequentLetters;
    return capitalizedString;
}