const display_score_human = document.getElementById("scoreHuman");
const display_score_computer = document.getElementById("scoreComputer");
const display_human_selection = document.getElementById("humanSelection");
const display_computer_selection = document.getElementById("computerSelection");
const announcer = document.getElementById("announcer");

const btn_rock = document.getElementById("choice_rock");
const btn_paper = document.getElementById("choice_paper");
const btn_scissor = document.getElementById("choice_scissor");

let computerScore = 0;
let humanScore = 0;

if (computerScore == 5 || humanScore == 5) {
	if (computerScore > humanScore) {
		announcer.textContent = "Winner: Computer";
	}
	if (computerScore < humanScore) {
		announcer.textContent = "Winner: Human";
	}
}

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
/*
function getHumanChoice(callback) {
	let humanChoice = callback();
	return humanChoice;
}
*/
//TODO: Add display the players' chosen attack

function playRound(computerChoice, humanChoice) {
	function announceLose() {
		computerScore = computerScore + 1;
		announcer.textContent = `You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`;
		display_score_human.textContent = `${humanScore}`;
		display_score_computer.textContent = `${computerScore}`;
		console.log(`You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You choose ${humanChoice}`);
	}
	function announceWin() {
		humanScore = humanScore + 1;
		announcer.textContent = `You win!\n${humanChoice} beats ${computerChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`;
		display_score_human.textContent = `${humanScore}`;
		display_score_computer.textContent = `${computerScore}`;
		console.log(`You win!\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You choose ${humanChoice}`);
	}
	function announceTie() {
		announcer.textContent = `It's a tie!\n${humanChoice} are the same ${computerChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`;
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

btn_rock.addEventListener("click", () => {
	const humanSelection = "rock";
	const computerSelection = getComputerChoice();
	playRound(computerSelection, humanSelection)
	if (humanScore > computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`;
		console.log(`THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`);
	}
	else if (humanScore < computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`;
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`);
	}
	else if (humanScore == computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`;
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`);
	}
});

btn_paper.addEventListener("click", () => {
	const humanSelection = "paper";
	const computerSelection = getComputerChoice();
	playRound(computerSelection, humanSelection)
	if (humanScore > computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`;
		console.log(`THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`);
	}
	else if (humanScore < computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`;
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`);
	}
	else if (humanScore == computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`;
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`);
	}
});

btn_scissor.addEventListener("click", () => {
	const humanSelection = "scissor";
	const computerSelection = getComputerChoice();
	playRound(computerSelection, humanSelection)
	if (humanScore > computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`;
		console.log(`THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou win!`);
	}
	else if (humanScore < computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`;
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nYou lose!`);
	}
	else if (humanScore == computerScore) {
		announcer.textContent = `THE WINNER IS:\nYOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`;
		console.log(`YOU: ${humanScore}\nComputer: ${computerScore}\nIt's a tie!`);
	}
});

