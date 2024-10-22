const display_score_human = document.getElementById("scoreHuman");
const display_score_computer = document.getElementById("scoreComputer");
const display_human_selection = document.getElementById("humanSelection");
const display_computer_selection = document.getElementById("computerSelection");
const announcer = document.getElementById("announcer");
const round_counter = document.getElementById("round_counter");
const body = document.querySelector("body");

const selection_menu = document.getElementById("selection_menu");

let computerScore = 0;
let humanScore = 0;
let current_round = 0;

function clear_score() {
	computerScore = 0;
	humanScore = 0;
	current_round = 0;
}

function game_announcer(computerChoice, humanChoice) {
	if (humanScore > computerChoice) {
		announcer.textContent = `You win!\n${humanChoice} beats ${computerChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`;
		display_score_human.textContent = `${humanScore}`;
		display_score_computer.textContent = `${computerScore}`;
		console.log(`You win!\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You choose ${humanChoice}`);
		if (humanScore == 5 || computerScore == 5) {
			clear_score();
			announcer.textContent = `Game ENDED!! You WIN!`;
		}
	} else {
		announcer.textContent = `You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`;
		display_score_human.textContent = `${humanScore}`;
		display_score_computer.textContent = `${computerScore}`;
		console.log(`You lose!\n${computerChoice} beats ${humanChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`);
		console.log(`You choose ${humanChoice}`);
		if (humanScore == 5 || computerScore == 5) {
			clear_score();
			announcer.textContent = `Game ENDED!! You LOSE!`;
		}
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

function playRound(computerChoice, humanChoice) {
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
	function announceLose() {
		computerScore = computerScore + 1;
		game_announcer(computerChoice, humanChoice);
	}
	function announceWin() {
		humanScore = humanScore + 1;
		game_announcer(computerChoice, humanChoice);
	}
	function announceTie() {
		announcer.textContent = `It's a tie!\n${humanChoice} are the same ${computerChoice}\nCOMP: ${computerScore}\nYOU:${humanScore}`;
		console.log("It's a tie!");
	}
}

selection_menu.addEventListener("click", (e) => {
	const computerSelection = getComputerChoice();
	current_round += 1;
	round_counter.textContent = `ROUND: ${current_round}`;
	let target = e.target;
	let humanSelection = "";
	switch (target.id) {
		case "choice_rock":
			humanSelection = "rock";
			playRound(computerSelection, humanSelection);
			break;
		case "choice_scissor":
			humanSelection = "scissor";
			playRound(computerSelection, humanSelection);
			break;
		case "choice_paper":
			humanSelection = "paper";
			playRound(computerSelection, humanSelection);
			break;
	}
});

body.addEventListener("keyup", (e) => {
	const computerSelection = getComputerChoice();
	current_round += 1;
	round_counter.textContent = `ROUND: ${current_round}`;
	if (humanScore == 5 || computerScore == 5) {
		clear_score();
		alert("Game ended");
	}
	let target = e.key;
	let humanSelection = "";
	switch (target) {
		case "z":
			humanSelection = "rock";
			playRound(computerSelection, humanSelection);
			break;
		case "x":
			humanSelection = "scissor";
			playRound(computerSelection, humanSelection);
			break;
		case "c":
			humanSelection = "paper";
			playRound(computerSelection, humanSelection);
			break;
	}
});

