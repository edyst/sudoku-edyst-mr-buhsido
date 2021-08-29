var duplicacy = Array(3); // 0 row; 1 col; 2 box

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
	el.style = "background : red;";
}

function white(el) {
	el.style = "background : white;";
}

function processNo(row, col) {
	let el = document.getElementById("a" + row + col);
	let no = el.value;
	if (no >= 0 && no <= 9) {
		// input rows and columns
		validate(row, col, no);
	}
}

function validateAll() {
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
}

function isNumber(id) {
	let el = document.getElementById(id);
	let no = el.value;
	if (!(no >= 0 && no <= 9)) {
		el.value = "";
	}
}
