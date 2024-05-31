// console.log("Hello World");
// Define 1: Rock, 2: Paper, 3: Scissor
// Create function that gets the choice for the computer

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

let gameResultGlobal = playGame();
console.log(gameResultGlobal);


// assign paper, rock, scissors depending on random number
function getComputerChoice(){
    let computerSelectionNum = Math.floor(Math.random()*3)+1;
    computerSelectionStr = convertNumberToAction(computerSelectionNum);
    return computerSelectionStr;
}

// Create function that gets the choice for the human. If not a valid choice, prompt again.
function getHumanChoice(){
    let humanSelectionNum = +prompt("Please choose:\n1 for Rock,\n2 for Paper,\n3 for Scissors");
    if (!humanSelectionNum || humanSelectionNum>3 || humanSelectionNum<1) {getHumanChoice()}
    else{
    humanSelectionStr = convertNumberToAction(humanSelectionNum);
    return humanSelectionStr;
       }
}


function playRound(humanChoice, computerChoice){
    let winner = parseInt(chooseWinner(humanChoice,computerChoice));

    if (winner === 3){
        return `Tie, both parties chose ${humanChoice}`
    }
    else if (winner === 2){
        computerScore += 1;
        return `You lose! Computer chose ${computerChoice}, and you chose ${humanChoice}`;
    }
    else {
        humanScore += 1;
        return `You won! You wisely chose ${humanChoice} vs. ${computerChoice}`;
    }
}

function playGame(){
    roundNumber=1;
    let humanSelection;
    let computerSelection;
    let gameResult;

    for(roundNumber=1;roundNumber<=5;roundNumber++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        let roundResult = playRound(humanSelection,computerSelection);
        console.log(roundResult);
    }

    // console.log(humanScore);
    // console.log(computerScore);

    if (humanScore > computerScore){
        gameResult = `you won the game after ${roundNumber-1} rounds. Score was ${humanScore} human vs. ${computerScore}. And ${5-humanScore-computerScore} ties`;
    } else if (humanScore < computerScore){
        gameResult = `computer won the game after ${roundNumber-1} rounds. Score was ${humanScore} human vs. ${computerScore}. And ${5-humanScore-computerScore} ties`
    }
    else {
        gameResult = `you tied the game after ${roundNumber-1} rounds.`;
    }
    // console.log(gameResult);
    return gameResult;
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


