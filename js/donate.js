document.getElementById('first-donate-btn').addEventListener('click', function () {


	const addMoney = getInputFieldValueById('input-field');

	const balance = getTextFieldValueById('first-amount');
	const newBalance = balance + addMoney;
	document.getElementById('first-amount').innerText = newBalance;

	const totalAmount = getTextFieldValueById('total-balance');
	const decreaseBalance = totalAmount - addMoney;
	document.getElementById('total-balance').innerText = decreaseBalance;



});