function playGame(choice) {
	let result = Math.floor(Math.random() * 3) + 1;
	if (result === 1) {
		alert("Your opponent chose rock!");
	}
	else if (result === 2) {
		alert("Your opponent chose paper!");
	}
	else {
		alert("Your opponent chose scissor!");
	}
	
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