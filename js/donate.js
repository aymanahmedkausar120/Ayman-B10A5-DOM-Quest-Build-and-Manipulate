document.getElementById('first-donate-btn').addEventListener('click', function () {


	const addMoney = getInputFieldValueById('first-input-field', 'second-input-field', 'third-input-field');
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

	// history transaction

	const donationTime = new Date().toLocaleString();
	const addDonationPlace = document.getElementById('history-container').innerText;
	const div = document.createElement('div');
	div.classList.add('bg-yellow-a00');
	div.innerHTML = `
	<div>
	<h4 class="text-2xl font-bold">100tk is Donated for Donate for Flood at Noakhali, Bangladesh </h4>
	<p>${donationTime}</p>
	<p>${addDonationPlace}</p>
	<p>${addMoney}</p>

	</div>

	`
	document.getElementById('history-container').appendChild(div);


});

document.getElementById('donation-add-btn').addEventListener('click', function () {
	showbtn('donaiton');
});

document.getElementById('history-add-btn').addEventListener('click', function () {
	showbtn('history')
});