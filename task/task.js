// Простой вариант с рекурсивным setTimeout и отсчетом до нуля
function countdown(seconds) {
	if (seconds > 0) {
		console.log(seconds);
		seconds--;
		setTimeout(() => countdown(seconds), 1000);
	} else console.log('Start!');
}
countdown(3);

// вариант с рекурсивным setTimeout и отсчетом в любую сторону
function timer(message, from, to = 0, delay = 1000) {
	let doCount;
	let count = from;
	if (from > to) doCount = () => count--;
	else if (from < to) doCount = () => count++;

	const timer = setTimeout(function step() {
		console.log(count);
		if (count === to) {
			clearTimeout(timer);
			setTimeout(console.log, delay, message);
		} else {
			setTimeout(step, delay);
			doCount();
		}
	});
}
// timer('Start!', 3, 1, 1000);
// timer('Start!', 0, 3, 1000);

// решение через SetInterval c отсчетом в любую сторону
function intTimer(message, from, to = 0, delay = 1000) {
	let doCount;
	let count = from;
	if (from > to) doCount = () => count--;
	else if (from < to) doCount = () => count++;

	const timer = setInterval(() => {
		if (count === to) {
			clearInterval(timer);
			setTimeout(console.log, delay, message);
		}
		console.log(doCount());
	}, delay);
}

// intTimer('Start!', 3, 1, 1000);
// intTimer('Start!', 0, 3, 1000);

