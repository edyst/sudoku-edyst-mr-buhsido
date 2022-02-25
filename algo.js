var duplicacy = Array(3); // 0 row; 1 col; 2 box

// loop
for (let i = 0; i < 3; i++) {
	duplicacy[i] = new Array(9);
}

for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 9; j++) {
		duplicacy[i][j] = new Array(10);
	}
}

for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 9; j++) {
		for (let k = 0; k < 10; k++) {
			duplicacy[i][j][k] = 0;
		}
	}
}

function getBox(row, col) {
	let R = parseInt(parseInt(row) / 3);
	let C = parseInt(parseInt(col) / 3);

	return parseInt(R * 3 + C);
}

function validate(row, col, val) {
	let box = getBox(row, col);
	let id = "a" + row + col;

	let el = document.getElementById(id);

	if (duplicacy[0][row][val] === 0) {
		//duplicacy[0][row][val]++;
		white(el);
	} else {
		red(el);
	}
	duplicacy[0][row][val]++;

	if (duplicacy[1][col][val] === 0) {
		//duplicacy[1][col][val]++;
		white(el);
	} else {
		red(el);
	}
	duplicacy[1][col][val]++;

	if (duplicacy[2][box][val] === 0) {
		//duplicacy[2][box][val]++;
		white(el);
	} else {
		//duplicacy[2][box][val]++;
		red(el);
	}
	duplicacy[2][box][val]++;
}

function red(el) {
	el.className = "cellsErr";
}

function white(el) {
	el.className = "cells";
}

function processNo(row, col) {
	let el = document.getElementById("a" + row + col);
	let no = el.value;
	if (no >= 0 && no <= 9) {
		// input rows and columns
		console.log("initiating validate");
		validate(row, col, no);
	}
}

function validateAll() {
	console.log("validateAll starts");

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 9; j++) {
			for (let k = 0; k < 10; k++) {
				duplicacy[i][j][k] = 0;
			}
		}
	}

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			processNo(i, j);
		}
	}

	console.log("validateAll ends");
}

function isNumber(id) {
	let el = document.getElementById(id);
	let no = el.value;
	if (!(no >= 0 && no <= 9)) {
		el.value = "";
	}
}

function reset() {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			let el = document.getElementById("a" + i + j);
			white(el);
			el.value = "";
			el.disabled = false;
		}
	}
}

function filled(id, val) {
	document.getElementById(id).value = val;
	document.getElementById(id).disabled = true;
}

function easy() {
	reset();

	filled("a02", 9);
	filled("a03", 6);
	filled("a05", 8);
	filled("a06", 5);

	filled("a10", 1);
	filled("a13", 4);
	filled("a16", 9);
	filled("a17", 3);

	filled("a20", 4);
	filled("a21", 6);
	filled("a24", 3);
	filled("a25", 1);

	filled("a30", 3);
	filled("a32", 1);
	filled("a33", 7);
	filled("a34", 8);
	filled("a35", 9);

	filled("a41", 7);
	filled("a42", 8);
	filled("a45", 4);
	filled("a47", 5);
	filled("a48", 9);

	filled("a52", 4);
	filled("a54", 6);
	filled("a56", 1);
	filled("a58", 7);

	filled("a60", 8);
	filled("a61", 4);
	filled("a62", 2);
	filled("a63", 5);
	filled("a67", 1);

	filled("a70", 5);
	filled("a73", 1);
	filled("a74", 2);
	filled("a76", 4);
	filled("a77", 6);

	filled("a81", 1);
	filled("a88", 5);
}

function medium() {
	reset();

	filled("a04", 1);
	filled("a06", 5);

	filled("a11", 5);
	filled("a16", 8);
	filled("a18", 1);

	filled("a22", 9);
	filled("a23", 8);

	filled("a31", 8);
	filled("a33", 6);
	filled("a36", 3);
	filled("a37", 9);

	filled("a40", 4);
	filled("a42", 5);
	filled("a47", 2);

	filled("a50", 9);
	filled("a54", 2);
	filled("a56", 1);

	filled("a62", 7);
	filled("a64", 4);

	filled("a74", 3);
	filled("a75", 5);
	filled("a77", 6);

	filled("a80", 8);
	filled("a85", 6);
}

function hard() {
	reset();

	filled("a12", 6);
	filled("a13", 9);
	filled("a17", 3);
	filled("a18", 1);

	filled("a22", 2);
	filled("a25", 4);
	filled("a28", 9);

	filled("a30", 9);
	filled("a32", 7);
	filled("a37", 5);
	filled("a38", 3);

	filled("a45", 2);
	filled("a46", 1);

	filled("a52", 1);
	filled("a56", 4);
	filled("a57", 6);

	filled("a71", 6);
	filled("a74", 3);
	filled("a75", 7);
	filled("a78", 4);

	filled("a81", 3);
	filled("a83", 1);
	filled("a84", 6);
	filled("a85", 8);
}
// done
