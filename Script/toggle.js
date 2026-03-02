// Default
document.getElementById('addmoney').style.display = 'block';
document.getElementById('cashout').style.display = 'none';
document.getElementById('transaction-history').style.display ='none';


//  Add Money
 document.getElementById('add-money-box').addEventListener('click',function(){
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addmoney').style.display = 'block';
    document.getElementById('transaction-history').style.display ='none';
 })

//  CashOut
 document.getElementById('cash-out-box').addEventListener('click',function(){
    document.getElementById('addmoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';
    document.getElementById('transaction-history').style.display ='none';
 })

//  Transaction
document.getElementById('transaction-box').addEventListener('click',function(){
   document.getElementById('transaction-history').style.display ='block';
   document.getElementById('addmoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'none';
})