// 1. add event listener to the deposit button 

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount)
    // step 3:
    depositField.value = '';
    // step 4 
    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString);

    // step 5 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
// step 6 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString =balanceTotalElement.innerText;
const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
// step 7 
const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal;


})