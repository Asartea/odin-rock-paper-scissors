/* New stuff */
let buttons = document.querySelectorAll('.btn')
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})
function reportResult(result) {
    let output
    if (result === 'Computer' || result === 'Human') {
        output = `The Round was won by the ${result}`
        
    } else if (result === 'tie') {
        output = `The Round was a tie`
    } else {
        console.error(`Error: ${result} is not a accepted result`)
    }
    updateResults(output, 'round-won')
}
function reportGame(result) {
    let output = `The Game was won by the ${result}`
    updateResults(output, 'game-won')
}
function updateResults(output, cssclass) {
    let resultbox = document.querySelector('.result')
    resultbox.classList.add(cssclass)
    resultbox.textContent = output
}
let computerScore = 0
let playerScore = 0
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors']
    let choice = options[~~(Math.random() * options.length)]
    return choice
}
function playRound(playerChoice) {
    console.log(`The current scores are Human: ${playerScore}, Computer: ${computerScore}`)
    let computerChoice = getComputerChoice().toLowerCase()
    if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
    ) {
        reportResult('Computer')
        computerScore = ++computerScore
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        reportResult('Human')
        playerScore = ++playerScore
    } else {
        reportResult('tie')
    }
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore === 5) {
            reportGame('Computer')
            computerScore = 0
        } else {
            reportGame('Player')
            playerScore = 0
        }
    }
}