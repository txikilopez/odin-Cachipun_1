// console.log("Hello World");
// Define 1: Rock, 2: Paper, 3: Scissor
// Create function that gets the choice for the computer

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
const roundsToPlay = 5;


const buttonPressed = document.querySelector(".buttons");
const resultCounter = document.querySelector(".resultCounter");
const outputResultFinal = document.querySelector(".finalScore");
const listResult = document.querySelector(".ResultList")
const WinnerAnnouncement = document.querySelector(".finalScoreWinner");



buttonPressed.addEventListener("click",(e)=>{
    if (roundNumber <=roundsToPlay){
        let humanChoiceAux = ""; 
        let computerChoiceAux = "";
        let roundResultNotification = [];
        let target = e.target;
        let currentHumanScore = 0;
        let currentComputerScore = 0;
        let winnerMessage="1";

        switch(target.id) {
            case "btnRock":
                humanChoiceAux =  "Rock";
            break;
            case "btnPaper":
                humanChoiceAux = "Paper"
            break;
            case "btnScissors":
                humanChoiceAux = "Scissors"
            break;
            }
        computerChoiceAux = getComputerChoice();
        //play the game
        roundResultNotification = playRound(humanChoiceAux,computerChoiceAux);
        currentHumanScore = roundResultNotification[1];
        currentComputerScore = roundResultNotification[2];
        resultCounter.textContent = `After ${roundNumber} rounds -- Human: ${currentHumanScore} vs. Computer: ${currentComputerScore}`;

        outputResultFinal.textContent = "Current round: " + roundResultNotification[0];
        console.log(roundNumber);
        roundNumber++;

        if(roundNumber == 6 && currentHumanScore>currentComputerScore) { WinnerAnnouncement.textContent = `You won the game after ${roundNumber-1} rounds`; }
        if(roundNumber == 6 && currentHumanScore<currentComputerScore) { WinnerAnnouncement.textContent = `You lost the game after ${roundNumber-1} rounds`;}
        if(roundNumber == 6 && currentHumanScore==currentComputerScore) { WinnerAnnouncement.textContent = `You tied after ${roundNumber-1} rounds`;}
        
    }
    else outputResultFinal.textContent = `Sorry, you already played ${roundNumber-1} games, hit refresh or go do something else.`;
        
    },)

    

// assign paper, rock, scissors depending on random number
function getComputerChoice(){
    let computerSelectionNum = Math.floor(Math.random()*3)+1;
    computerSelectionStr = convertNumberToAction(computerSelectionNum);
    return computerSelectionStr;
}


function playRound(humanChoice, computerChoice){
    let winner = parseInt(chooseWinner(humanChoice,computerChoice));
    let winnerMessage = "";

    if (winner === 3){
        winnerMessage =  `Tie, both parties chose ${humanChoice}`;
        computerScore += 1;
        humanScore += 1;
    }
    else if (winner === 2){
        computerScore += 1;
        winnerMessage =   `Loser!! Computer chose ${computerChoice}, and you chose ${humanChoice}`;
    }
    else {
        humanScore += 1;
        winnerMessage = `Winner!! You chose ${humanChoice} computer chose ${computerChoice}`;
    }
    return [winnerMessage,humanScore,computerScore];
}

//Return 1 if human won, return 2 if computer won, 3 if tie
function chooseWinner(a,b){
    if(a==="Rock" & b==="Scissors"){return 1;}
    else if(a==="Rock" & b==="Paper"){return 2;}

    else if(a==="Scissors" & b === "Paper"){return 1;}
    else if(a==="Scissors" & b === "Rock"){return 2;}
    
    else if(a==="Paper" & b === "Rock"){return 1;}
    else if(a==="Paper" & b === "Scissors"){return 2;}
    else {return 3;}
}


function convertNumberToAction(num){
    if(num===1){return "Rock";}
    else if (num === 2){return "Paper";}
    else if (num === 3){return "Scissors";}
    else {return "invalid input";}
}


