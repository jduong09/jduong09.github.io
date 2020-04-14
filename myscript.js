/*
function pickRock(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let result = Math.floor(Math.random() * (max - min + 1)) + min;

	//what are the possibilities
	// if you pick rock && the number computer result is 1
	// if you pick rock && the computer result is 2
	// if you pick rock && the computer result is 3

	if (result === 1) {
		alert("Draw! Try again!");
	}
	if (result === 2) {
		alert("Loser! Paper beats rock!");
	}
	if (result === 3) {
		alert("Winner! Rock beats scissor!");
	}
}

// if you pick paper && the computer result is 1
	// if you pick paper && the computer result is 2
	// if you pick paper && the computer result is 3
function pickPaper(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let result = Math.floor(Math.random() * (max - min + 1)) + min;
	
	if (result === 1) {
		alert("Winner! Paper beats rock!");
	}
	if (result === 2) {
		alert("Draw! Try again!");
	}
	if (result === 3) {
		alert("Loser! Scissor beats paper!");
	}
}

function pickScissor(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let result = Math.floor(Math.random() * (max - min + 1)) + min;

	if (result === 1) {
		alert("Loser! Rock beats scissor!");
	}
	if (result === 2) {
		alert("Winner! Scissor beats paper!");
	}
	if (result === 3) {
		alert("Draw! Try again!");
	}
}
*/
function playGame(min, max, choice) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let result = Math.floor(Math.random() * (max - min + 1)) + min;
	alert(result);
	alert(choice);
	
	if (choice === "rock" && result === 1) {
		alert("Draw! Try again!");
	}
	else if (choice === "rock" && result === 2) {
		alert("Loser! Paper beats rock!");
	}
	else if (choice === "rock" && result === 3) {
		alert("Winner! Rock beats scissor!");
	}

	if (choice === "paper" && result === 1) {
		alert("Winner! Paper beats rock!");
	}
	else if (choice === "paper" && result === 2) {
		alert("Draw! Try again!");
	}
	else if (choice === "paper" && result === 3) {
		alert("Loser! Scissor beats paper!");
	}

	if (choice === "scissor" && result === 1) {
		alert("Loser! Rock beats scissor!");
	}
	else if (choice === "scissor" && result === 2) {
		alert("Winner! Scissor beats paper!");
	}
	else if (choice === "scissor" && result === 3) {
		alert("Draw! Try again!");
	}
}