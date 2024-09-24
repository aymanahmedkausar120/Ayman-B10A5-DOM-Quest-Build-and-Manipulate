
function getInputFieldValueById(id) {
	const inputValue = document.getElementById(id).value;
	const inputNumber = parseFloat(inputValue);
	return inputNumber;
}


function getTextFieldValueById(id) {
	const textValue = document.getElementById(id).innerText;
	const textNumber = parseFloat(textValue);
	return textNumber;
}


function showBtn(id) {
	// hide
	document.getElementById('history').classList.add('hidden');
	document.getElementById('donation').classList.add('hidden');
	// show
	document.getElementById(id).classList.remove('hidden');
}