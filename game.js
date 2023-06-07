const sword = document.querySelector('.sword');
const axe = document.querySelector('.axe');
const lance = document.querySelector('.lance');
let score = document.getElementById('score');
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let winLoserText = document.getElementById('winner-loser-text');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(randomNum === 1){
        return "sword";
    }
    else if(randomNum === 2){
        return "lance";
    }
    else{
        return "axe";
    }
}

function getWinner(answer){
    let playerChoice = answer.trim().toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computer);
    if(playerChoice === "sword" && computerChoice === "lance"){
        computerScore++; 
        computer.innerText = ` ${computerScore} `;
        return "Sorry you lose, sword loses to lance";
    }
    else if(playerChoice === "sword" && computerChoice === "axe"){
        playerScore++; 
        player.innerText = ` ${playerScore} `;
        return "Congratulations, sword beats axe";
    }
    else if(playerChoice === "sword" && computerChoice === "sword"){
        return "Tie game";
    }
    else if(playerChoice === "axe" && computerChoice === "lance"){
        playerScore++; 
        player.innerText = ` ${playerScore} `;
        return "Congratulations, axe beats to lance";
    }
    else if(playerChoice === "axe" && computerChoice === "sword"){
        computerScore++; 
        computer.innerText = ` ${computerScore} `;
        return "Sorry you lose, axe loses to sword";
    }
    else if(playerChoice === "axe" && computerChoice === "axe"){
        return "Tie game";
    }
    else if(playerChoice === "lance" && computerChoice === "lance"){
        return "Tie game";
    }
    else if(playerChoice === "lance" && computerChoice === "sword"){
        playerScore++; 
        player.innerText = ` ${playerScore} `;
        return "Congratulations, lance beats to sword";
    }
    else if(playerChoice === "lance" && computerChoice === "axe"){
        computerScore++; 
        computer.innerText = ` ${computerScore} `;
        return "sorry, lance loses to axe";
    }
    else{
        return "invalid input";
    }
}

player.innerText = ` ${playerScore} `;
computer.innerText = ` ${computerScore} `;
//let answer = "";
sword.addEventListener('click', () => {
    answer = "sword";
    winLoserText.innerText = ` ${getWinner(answer.toString())} `;
});

axe.addEventListener('click', () => {
    answer = "axe";
    winLoserText.innerText = ` ${getWinner(answer.toString())} `;
});

lance.addEventListener('click', () => {
    answer = "lance";
    winLoserText.innerText = ` ${getWinner(answer.toString())} `;
});


//let payerChoice = 
//let answer = (prompt("Please enter sword, lance, or axe: ").toString());

//console.log(getWinner(answer.toString()));