
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generateEl = document.getElementById('generate');
const copy = document.getElementById('copy');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	special: getRandomSpecial
}

copy.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied');
});

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSpecial = specialEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);
});

function generatePassword(lower, upper, number, special, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + special;
	const typesArr = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
	const special = '!@#$%&*.'
	return special[Math.floor(Math.random() * special.length)];
}





