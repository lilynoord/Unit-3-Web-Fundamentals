/**
 * Counts down from the given number to zero in intervals of one second.
 * @param {*} tminus
 */
function countDown(tminus) {
	let abs;
	if (tminus < 0) {
		abs = -1;
	} else {
		abs = 1;
	}
	if (tminus === 0) {
		console.log("DONE!");
	} else {
		console.log(tminus);
		setTimeout(function () {
			countDown(tminus - abs);
		}, 1000);
	}
}
/**
 * Every second attempts to get a number between 0.75 and 1 using random. Counts the number of attempts until success.
 *
 */
function randomGame() {
	let attempts = 0;
	let num = 0;
	let pass = false;
	let game = setInterval(function () {
		attempts++;
		num = Math.random();
		if (num > 0.75) {
			console.log(`randomGame required ${attempts} attempts`);
			clearInterval(game);
		}
	}, 1000);
}
function main() {
	countDown(4);
	randomGame();
}

main();
