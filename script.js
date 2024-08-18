console.log ("Hello World!")

let computerScore = 0;
let humanScore = 0;
  



function getComputerChoice () {
    switch (Math.floor(Math.random()*3)) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2: 
        return "scissors";
    }
}



function getHumanChoice () {
    return prompt ("Rock, Paper or Scissors?").toLowerCase();
}    

function playRound (humanSelection, computerSelection){
    if (computerSelection === humanSelection) {
        return "It's a tie!"
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock")    ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!"
    } else {
        return "You Lose!"
    }
}




function playGame() {
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === `You win!`) {
            ++humanScore;
        } else if (roundResult === `You Lose!`) {
            ++computerScore;
        }


        console.log (`Round ${i + 1}:`);
        console.log ("Computer: " + computerSelection);
        console.log ("Human: " + humanSelection);
        console.log (roundResult);
        console.log (`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
        console.log (`-----------------------------------------------------------`)

        
    }
}

console.log (playGame())

function gameResult (humanScore, computerScore) {
    if (humanScore > computerScore) {
        return `You are the winner!`
    } else if (humanScore < computerScore) {
        return `You lost the game!`
    } else {
        return `The game is a tie!`
    }
}

console.log (`Final score - Human: ${humanScore}, Computer ${computerScore} `)
console.log (gameResult(humanScore, computerScore))