let computerScore = 0
let playerScore = 0
// get random computer choice
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors']
    let choice = options[~~(Math.random() * options.length)]
    return choice
}
function getPlayerChoice() {
    let choice = prompt('What do you choose?', 'Rock')
    return choice
}
function playRound() {
    let computerChoice = getComputerChoice().toLowerCase()
    let playerChoice = getPlayerChoice().toLowerCase()
    if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
    ) {
        console.log("Computer won")
        computerScore = ++computerScore
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("Human won")
        playerScore = ++playerScore
    } else {
        console.log("tie")
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (computerScore > playerScore) {
        console.log("Computer won the Game")
    } else {
        console.log("Human won the Game")
    }
}