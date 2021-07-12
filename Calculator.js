let text = document.getElementById("text");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let into = document.getElementById("into");
let div = document.getElementById("div");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let dot = document.getElementById(".");
let calc = document.getElementById("=");
let but = document.querySelector('button');
let clear = document.getElementById("c");

const input = () => {
	calc.addEventListener('click', function () {
		text.value = eval(text.value);
	});
	add.addEventListener("click", function () {
		text.value = (text.value) + "+";
	});
	sub.addEventListener("click", function () {
		text.value = (text.value) + "-";
	});
	into.addEventListener("click", function () {
		text.value = (text.value) + "*";
	});
	div.addEventListener("click", function () {
		text.value = (text.value) + "/";
	});
	one.addEventListener("click", function () {
		text.value = (text.value) + "1";
	});
	two.addEventListener("click", function () {
		text.value = (text.value) + "2";
	});
	three.addEventListener("click", function () {
		text.value = (text.value) + "3";
	});
	four.addEventListener("click", function () {
		text.value = (text.value) + "4";
	});
	five.addEventListener("click", function () {
		text.value = (text.value) + "5";
	});
	six.addEventListener("click", function () {
		text.value = (text.value) + "6";
	});
	seven.addEventListener("click", function () {
		text.value = (text.value) + "7";
	});
	eight.addEventListener("click", function () {
		text.value = (text.value) + "8";
	});
	nine.addEventListener("click", function () {
		text.value = (text.value) + "9";
	});
	zero.addEventListener("click", function () {
		text.value = (text.value) + "0";
	});
	dot.addEventListener("click", function () {
		text.value = (text.value) + ".";
	});
	clear.addEventListener("click", function () {
		text.value = "";
	});
}
input();
