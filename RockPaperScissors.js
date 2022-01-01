function computerPlay() {

    let randomNumber
    randomNumber = Math.floor(Math.random() * 3);

    let computerChoice = "Rock";
    if (randomNumber === 1) {
        computerChoice = "Paper";
    }
    else  if (randomNumber === 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}
