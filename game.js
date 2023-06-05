function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(randomNum === 1){
        return "rock";
    }
    else if(randomNum === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getWinner(answer){
    let playerChoice = answer.trim().toLowerCase();
    let computer = getComputerChoice();
    console.log(playerChoice);
    console.log(computer);
    if(playerChoice === "rock" && computer === "paper"){
        return "Sorry you lose, rock loses to paper";
    }
    else if(playerChoice === "rock" && computer === "scissors"){
        return "Congratulations, rock beats scissors";
    }
    else if(playerChoice === "rock" && computer === "rock"){
        return "Tie game";
    }
    else if(playerChoice === "scissors" && computer === "paper"){
        return "Congratulations, scissors beats to paper";
    }
    else if(playerChoice === "scissors" && computer === "rock"){
        return "Sorry you lose, scissors loses to rock";
    }
    else if(playerChoice === "scissors" && computer === "scissors"){
        return "Tie game";
    }
    else if(playerChoice === "paper" && computer === "paper"){
        return "Tie game";
    }
    else if(playerChoice === "paper" && computer === "rock"){
        return "Congratulations, paper beats to rock";
    }
    else if(playerChoice === "paper" && computer === "scissors"){
        return "sorry, paper loses to scissors";
    }
    else{
        return "invalid input";
    }
}

let answer = (prompt("Please enter rock, paper, or scissors: ").toString());


console.log(getWinner(answer.toString()));