const display_score_human = document.getElementById("scoreHuman");
const display_score_computer = document.getElementById("scoreComputer");
const display_human_selection = document.getElementById("humanSelection");
const display_computer_selection = document.getElementById("computerSelection");
const announcer = document.getElementById("announcer");

const selection_menu = document.getElementById("selection_menu");
const btn_rock = document.getElementById("choice_rock");
const btn_paper = document.getElementById("choice_paper");
const btn_scissor = document.getElementById("choice_scissor");

let computerScore = 0;
let humanScore = 0;

function clear_score() {
	computerScore = 0;
	humanScore = 0;
}

function game_announcer() {
	announcer.textContent = `You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`;
	display_score_human.textContent = `${humanScore}`;
	display_score_computer.textContent = `${computerScore}`;
	console.log(`You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`);
	console.log(`You choose ${humanChoice}`);
}

function rps_judge(humanSelection) {
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

	if (humanChoice === computerChoice) {
		announceTie();
	} else if (
		humanChoice === "rock" && computerChoice === "scissors" ||
		humanChoice === "paper" && computerChoice === "rock" ||
		humanChoice === "scissors" && computerChoice === "paper") {
		announceWin();
	} else {
		announceLose();
	}
}

selection_menu.addEventListener("click", (e) => {
	let target = e.target;
	let humanSelection = "rock";
	switch (target.id) {
		case "choice_rock":
			humanSelection = "rock";
			rps_judge(humanSelection);
			break;
		case "choice_scissor":
			humanSelection = "scissor";
			rps_judge(humanSelection);
			break;
		case "choice_paper":
			humanSelection = "paper";
			rps_judge(humanSelection);
			break;
	}
});
