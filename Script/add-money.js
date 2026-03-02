document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyAmount = document.getElementById('amount').value;
    const convertedAddMoneyAmount = parseFloat(addMoneyAmount);

    const addMoneyAccountNumber = document.getElementById('add-money-account-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    let mainBalance = document.getElementById('main-balance').innerText;

    const convertedMainBalance = parseFloat(mainBalance);

    const selectedBank = document.getElementById('allBank').value;
    console.log(selectedBank);
    

    if(addMoneyAmount < 0){
        alert("Added Valid Amount")
        return;
    }
    if (addMoneyAccountNumber.length === 11) {
        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAddMoneyAmount;
            document.getElementById('main-balance').innerText = sum;

            //Added Money From this Account Message Show in Transaction 
            const transactionContainer = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.classList.add("bg-green-400")
            div.innerHTML =`
            <h1 class ="bg-cyan-300"> Added Money From ${selectedBank}</h1>
            <h3 class = "text-3xl text-white">$ ${convertedAddMoneyAmount}</h3>
            <p class="btn">Account Number: ${addMoneyAccountNumber}</p>
            `
            transactionContainer.appendChild(div);

        }
        else {
            alert("Pin is Wrong");

        }
    }
    else {
        alert("Account Is Wrong")
    }
})