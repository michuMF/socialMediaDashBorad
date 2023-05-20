const toogleBtn = document.querySelector(".toogle-btn");
const blackCircle = document.querySelector(".black-circle");
const whiteStats = document.querySelectorAll(".white");
const blackStats = document.querySelectorAll(".black");
const grayText = document.querySelectorAll(".grey");
const topBackground = document.querySelector(".top-background");
const body = document.querySelector("body");
const whiteHover = document.querySelectorAll(".white-hover");

const toogle = () => {
	toogleBtn.classList.toggle("switch");
	toogleBtn.classList.toggle("toogle-btn");
	topBackground.classList.toggle("top-background-white");
	body.classList.toggle("white-body");
	toogleBtn.classList.toggle("gray-toogle");
	blackCircle.classList.toggle("white-circle");
	whiteStats.forEach(e => {
		e.classList.toggle("whiteStats");
	});
	blackStats.forEach(e => {
		e.classList.toggle("black-h");
	});
	grayText.forEach(e => {
		e.classList.toggle("gray-h");
	});
	whiteHover.forEach(e => {
		e.classList.toggle("hover");
	});
};

toogleBtn.addEventListener("click", toogle);
