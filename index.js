const messageEl = document.querySelector("#message-el");
const cardEl = document.querySelector("#card-el");
const sumEl = document.querySelector("#sum-el");
const startBtn = document.querySelector("#start-btn");
const pickBtn = document.querySelector("#pick-btn");
let cards = [];

function generateNum() {
	let randomNum = Math.floor(Math.random() * 13) + 1;
	return randomNum;
}

startBtn.addEventListener("click", function () {
	let firstNum = generateNum();
	let secondNum = generateNum();
	cards = [firstNum, secondNum];
	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += ` ${cards[i]}`;
	}
	sumEl.textContent += firstNum + secondNum;
});
