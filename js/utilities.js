
function getInputFieldValueById(id) {
	const inputValue = document.getElementById(id);
	const inputNumber = parseFloat(inputValue.value);
	return inputNumber;
};


function getTextFieldValueById(id) {
	const textValue = document.getElementById(id).innerText;
	return textValue;
};

// history button

function showBtn(id) {
	document.getElementById('history').classlist.add('hidden');
	document.getElementById('donation').classList.add('hidden');

	document.getElementById(id).classList.remove('hidden');
};

document.getElementById('donation-add-btn').classList.add('bg-lime-300');
function showBtnColor(id) {
	document.getElementById('history-add-btn').classList.remove('bg-lime-300');
	document.getElementById('donation-add-btn').classList.remove('bg-lime-300');

	document.getElementById(id).classList.add('bg-lime-300');
};


