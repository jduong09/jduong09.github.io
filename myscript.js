
function pickRock(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let result = Math.floor(Math.random() * (max - min + 1)) + min;

	// document.getElementById("demo").innerHTML = result;
	//conditional to check if you are a winner, loser or draw! 
	// delegate rock to be 1, paper to be 2, scissor to be 3
	//return the result! Print to the screen
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