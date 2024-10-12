function getComputerChoice() {
	let bot = parseInt(Math.floor(Math.random() * 3) + 1);
	let weapon;
	switch (bot) {
		case 1:
			weapon = "rock";
			return weapon
		case 2:
			weapon = "paper";
			return weapon
		case 3:
			weapon = "scissors";
			return weapon
	}
}
function getHumanChoice() {
	let user = prompt("Enter your weapon: rock, paper, scissors");
	console.log(`LOG: Choosen ${user}`);
	return user.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;
function playRound(computerChoice, humanChoice) {
	function announceLose() {
		computerScore = computerScore + 1;
		alert(`You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You choose ${humanChoice}`);
	}
	function announceWin() {
		humanScore = humanScore + 1;
		alert(`You win!\n${humanChoice} beats ${computerChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You win!\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You choose ${humanChoice}`);
	}
	function announceTie() {
		alert(`It's a tie!\n${humanChoice} are the same ${computerChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log("It's a tie!");
	}

	if (humanChoice === "rock") {
		if (computerChoice === "paper") {
			announceLose();
		}
		else if (computerChoice === "scissors") {
			announceWin();
		}
		else {
			announceTie();
		}
	}
	else if (humanChoice === "paper") {
		if (computerChoice === "scissors") {
			announceLose();
		}
		else if (computerChoice === "rock") {
			announceWin();
		}
		else {
			announceTie();
		}
	}
	else if (humanChoice === "scissors") {
		if (computerChoice === "rock") {
			announceLose();
		}
		else if (computerChoice === "paper") {
			announceWin();
		}
		else {
			announceTie();
		}
	}
}

function playGame() {
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();

	playRound(computerSelection, humanSelection)
	if (humanScore > computerScore) {
		alert(`THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`);
		console.log(`THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`);
	}
	else if (humanScore < computerScore) {
		alert(`THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`);
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`);
	}
	else if (humanScore == computerScore) {
		alert(`THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`);
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`);
	}
}
playGame();
