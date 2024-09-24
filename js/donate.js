document.getElementById('first-donate-btn').addEventListener('click', function () {


	const addMoney = getInputFieldValueById('first-input-field');
	const balance = getTextFieldValueById('first-amount');
	const totalAmount = getTextFieldValueById('total-balance')


	const newBalance = balance + addMoney;
	document.getElementById('first-amount').innerText = newBalance;

	const decreaseBalance = totalAmount - addMoney;
	document.getElementById('total-balance').innerText = decreaseBalance;



	if (isNaN(addMoney) || addMoney <= 0) {
		alert('Invalid Donation Amount');
		return;
	}
	else if (addMoney > totalAmount) {
		alert('Donation exceeds available balance');
		return;
	}
	else {
		const myModal = document.getElementById('my_modal_1')
		myModal.showModal();
	}

	// history

	const inputField = getInputFieldValueById('first-input-field');
	const donationTime = new Date();
	const donationPlace = getTextFieldValueById('first-place-name');
	const transaction = document.getElementById('history');
	transaction.innerHTML += `
	<div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
	<p class="font-bold text-xl">${inputField} Taka is ${donationPlace} </p>
	<p class="text-sm text-gray-600 mt-2">date:${donationTime}</p>
	</div>
	`
});

document.getElementById('second-donate-btn').addEventListener('click', function () {

	const addMoney = getInputFieldValueById('second-input-field');
	const balance = parseFloat(getTextFieldValueById('second-amount'));

	const totalAmount = parseFloat(getTextFieldValueById('total-balance'));

	const newBalance = balance + addMoney;
	document.getElementById('second-amount').onpointerenter = newBalance;

	const decreaseBalance = totalAmount - addMoney;
	Document.getElementById('total-balance').innerText = decreaseBalance;

	if (isNaN(addMoney) || addMoney <= 0) {
		alert('Invalid Donation Amount');
		return;
	}
	else if (addMoney > totalAmount) {
		alert('Donation exceeds available balance');
		return;
	}
	else {
		const myModal = document.getElementById('my_modal_1')
		myModal.showModal();
	}

	// history 2

	const inputField = getInputFieldValueById('second-input-field');
	const donationTime = new Date();
	const donationPlace = getTextFieldValueById('second-place-name');
	const transaction = document.getElementById('history');
	transaction.innerHTML += `
	<div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
	<p class="font-bold text-xl">${inputField} Taka is ${donationPlace} </p>
	<p class="text-sm text-gray-600 mt-2">date:${donationTime}</p>
	</div>
	`
});


document.getElementById('third-donate-btn"').addEventListener('click', function () {
	const addMoney = getInputFieldValueById('third-input-field');
	const balance = parseFloat(getTextFieldValueById('third-amount'));

	const totalAmount = parseFloat(getTextFieldValueById('total-balance'));

	const newBalance = balance + addMoney;
	document.getElementById('third-amount').onpointerenter = newBalance;

	const decreaseBalance = totalAmount - addMoney;
	Document.getElementById('total-balance').innerText = decreaseBalance;


	if (isNaN(addMoney) || addMoney <= 0) {
		alert('Invalid Donation Amount');
		return;
	}
	else if (addMoney > totalAmount) {
		alert('Donation exceeds available balance');
		return;
	}
	else {
		const myModal = document.getElementById('my_modal_1')
		myModal.showModal();
	}

	const inputField = getInputFieldValueById('third-input-field');
	const donationTime = new Date();
	const donationPlace = getTextFieldValueById('third-place-name');
	const transaction = document.getElementById('history');
	transaction.innerHTML += `
	<div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
	<p class="font-bold text-xl">${inputField} Taka is ${donationPlace} </p>
	<p class="text-sm text-gray-600 mt-2">date:${donationTime}</p>
	</div>
	`

});


// history btn

document.getElementById('donation-add-btn').addEventListener('click', function () {

	showbtn('donation');
	showbtnColor('donation-add-btn');
});

document.getElementById('donation-add-btn').addEventListener('click', function () {

	showbtn('history');
	showbtnColor('history-add-btn');
});
