let hands=['rock', 'paper', 'scissors'];

function getComputerHand() {
	let index = parseInt(Math.random()*3);
    return hands[index];
}

function compare(player, computer) {
	console.log("The player played: "+player);
    console.log("The computer played: "+computer);

	//Determine the winner.
    if (player === computer) {
    	return "Tie!"
    }
    if(player === "rock") {
    	if(computer === "paper") {
        	return "Computer wins!";
        } else { //computer is scissors.
        	return "Player wins!";
        }        
    }
    else if(player === "paper") {
    	if(computer === "scissors") {
        	return "Computer wins!";
        } else { //computer is rock.
        	return "Player wins!";
        }        
    } 
    else if(player === "scissors") {
    	if(computer === "rock") {
        	return "Computer wins!";
        } else { //computer is paper.
        	return "Player wins!";
        }        
    }
    return "Player chose illegal hand!";
}    

let playerChoice = "scissors";
let computerChoice = getComputerHand();

console.log(compare(playerChoice, computerChoice));