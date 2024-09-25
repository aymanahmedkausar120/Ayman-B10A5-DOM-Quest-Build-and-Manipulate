document
	.getElementById("first-donate-btn")
	.addEventListener("click", function () {
		const addMoney = getInputFieldValueById("first-input-field");
		const balance = parseFloat(getTextFieldValueById("first-amount"));
		const totalAmount = parseFloat(getTextFieldValueById("total-balance"));

		const newBalance = balance + addMoney;
		document.getElementById("first-amount").innerText = newBalance;

		const decreaseBalance = totalAmount - addMoney;
		document.getElementById("total-balance").innerText = decreaseBalance;

		if (isNaN(addMoney) || addMoney <= 0) {
			alert("Invalid Donation Amount");
			return;
		} else if (addMoney > totalAmount) {
			alert("Donation exceeds available balance");
			return;
		} else {
			const myModal = document.getElementById("my_modal_1");
			myModal.showModal();
		}

		// History
		const inputField = getInputFieldValueById("first-input-field");
		const donationTime = new Date();
		const donationPlace = getTextFieldValueById("first-place-name");
		const transcation = document.getElementById("history");
		transcation.innerHTML += `
   <div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
   <p class='font-bold text-xl'>${inputField} Taka is  ${donationPlace}</p>
   <p class='text-sm text-gray-600 mt-2'>Date: ${donationTime}</p>
   </div>
   `;
	});

document
	.getElementById("second-donate-btn")
	.addEventListener("click", function () {
		const addMoney = getInputFieldValueById("second-input-field");
		const balance = parseFloat(getTextFieldValueById("second-balance"));
		console.log(balance);
		const totalAmount = parseFloat(getTextFieldValueById("total-balance"));
		console.log(totalAmount);
		const newBalance = balance + addMoney;
		document.getElementById("second-balance").innerText = newBalance;

		const decreaseBalance = totalAmount - addMoney;
		document.getElementById("total-balance").innerText = decreaseBalance;

		if (isNaN(addMoney) || addMoney <= 0) {
			alert("Invalid Donation Amount");
			return;
		} else if (addMoney > totalAmount) {
			alert("Donation exceeds available balance");
			return;
		} else {
			const myModal = document.getElementById("my_modal_1");
			myModal.showModal();
		}

		// History
		const inputField = getInputFieldValueById("second-input-field");
		const donationTime = new Date();
		const donationPlace = getTextFieldValueById("second-place-name");
		const transcation = document.getElementById("history");
		transcation.innerHTML += `
   <div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
   <p class='font-bold text-xl'>${inputField} Taka is  ${donationPlace}</p>
   <p class='text-sm text-gray-600 mt-2'>Date: ${donationTime}</p>
   </div>
   `;
	});

document
	.getElementById("third-donate-btn")
	.addEventListener("click", function () {
		const addMoney = getInputFieldValueById("third-input-field");
		const balance = parseFloat(getTextFieldValueById("third-balance"));
		const totalAmount = parseFloat(getTextFieldValueById("total-balance"));

		const newBalance = balance + addMoney;
		document.getElementById("third-balance").innerText = newBalance;

		const decreaseBalance = totalAmount - addMoney;
		document.getElementById("total-balance").innerText = decreaseBalance;

		if (isNaN(addMoney) || addMoney <= 0) {
			alert("Invalid Donation Amount");
			return;
		} else if (addMoney > totalAmount) {
			alert("Donation exceeds available balance");
			return;
		} else {
			const myModal = document.getElementById("my_modal_1");
			myModal.showModal();
		}

		// History
		const inputField = getInputFieldValueById("third-input-field");
		const donationTime = new Date();
		const donationPlace = getTextFieldValueById("thrid-place-name");
		const transcation = document.getElementById("history");
		transcation.innerHTML += `
   <div class="border p-5 rounded-xl lg:w-4/5 w-11/12 mx-auto">
   <p class='font-bold text-xl'>${inputField} Taka is  ${donationPlace}</p>
   <p class='text-sm text-gray-600 mt-2'>Date: ${donationTime}</p>
   </div>
   `;
	});

//   History Button

function showbtn(id) {
	document.getElementById("history").classList.add("hidden");
	document.getElementById("donation").classList.add("hidden");

	document.getElementById(id).classList.remove("hidden");
}
function showbtnColor(id) {
	document.getElementById("history-add-btn").classList.remove("bg-lime-300");
	document.getElementById("donation-add-btn").classList.remove("bg-lime-300");
	document.getElementById(id).classList.add("bg-lime-300");
}

document
	.getElementById("donation-add-btn")
	.addEventListener("click", function () {
		showbtn("donation");
		showbtnColor("donation-add-btn");
	});

document
	.getElementById("history-add-btn")
	.addEventListener("click", function () {
		showbtn("history");
		showbtnColor("history-add-btn");
	});