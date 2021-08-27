const messageEl = document.querySelector("#message-el");
const cardEl = document.querySelector("#card-el");
const sumEl = document.querySelector("#sum-el");
const startBtn = document.querySelector("#start-btn");
const pickBtn = document.querySelector("#pick-btn");
let cards = [];
let message = "";
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
//let firstNum = 0;
//let secondNum = 0;
//let thirdNum = 0;

function generateNum() {
	let randomNum = Math.floor(Math.random() * 13) + 1;
	if (randomNum === 1) {
		return 11;
	} else if (randomNum > 10) {
		return 10;
	} else {
		return randomNum;
	}
}

startBtn.addEventListener("click", function () {
	isAlive = true;
	let firstNum = generateNum();
	let secondNum = generateNum();
	cards = [firstNum, secondNum];
	sum = firstNum + secondNum;
	renderGame();
});

pickBtn.addEventListener("click", function () {
	if (isAlive === true && hasBlackJack === false) {
		let thirdNum = generateNum();
		sum += thirdNum;
		cards.push(thirdNum);
		renderGame();
	}
});

function renderGame() {
	cardEl.textContent = "cards: ";
	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += `${cards[i]} `;
	}
	sumEl.textContent = sum;
	if (sum === 21) {
		message = "Wohoo! You've got Blackjack!";
		hasBlackJack = true;
	} else if (sum < 21) {
		message = "Draw another card";
	} else {
		message = "Game Over!, you are out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}
