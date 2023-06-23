const css = document.querySelector('textarea');
const [color1, color2] = document.querySelectorAll('.color');
const body = document.getElementById('gradient');

const randomButton = document.getElementById('random');

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = '${body.style.background};';
}

_linearGradient = () => {
	return 'linear-gradient(to right, ${color1.value}, ${color2.value})';
}

// .addEventListener("load", setGradient);

getRandomColor = () => {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color+= letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

randomColors = () => {
	color1.value, color2.value = getRandomColor();

	setGradient();
}

setGradient();

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randomButton.addEventListener('click', randomColors);





