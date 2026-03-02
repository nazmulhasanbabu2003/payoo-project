document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();

    const pin = document.getElementById('cash-out-pin').value;
    const convertedPin = parseInt(pin);
    const CashOutAccountNumber = document.getElementById('cash-out-account-number').value;
    const CashOutAmount = document.getElementById('cash-out-amount').value;
    const convertedCashOutAmount = parseFloat(CashOutAmount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance)
    if (CashOutAccountNumber.length === 11){
        if(convertedPin === 1234){
        const sum = convertedMainBalance - convertedCashOutAmount
        if(sum >= 0){
            document.getElementById('main-balance').innerText = sum;

            //Added Money From this Account Message Show in Transaction 
            const transactionContainer = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.classList.add("bg-red-400");
            div.innerHTML =`
            <h1 class ="text-yellow-300"> CashOut Money</h1>
            <h3 class = "text-3xl text-white">$ ${convertedCashOutAmount}</h3>
            <p class="btn">Account Number: ${CashOutAccountNumber}</p>
            `
           transactionContainer.appendChild(div);
        }
        else{
            alert("Not Enough Money")
        }
        
    }
    }
    else
    {
        alert("Enter Valid Pin")
    }

})