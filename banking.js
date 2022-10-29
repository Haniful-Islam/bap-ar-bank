// handle depostit and withdraw ballance

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmountTxt = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositAmmountTxt);

    // get deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previoustdepositAmmount = depositTotal.innerText;

    const newDepositTotal = parseFloat(previoustdepositAmmount) + parseFloat(newDepositAmmount);

    depositTotal.innerText = newDepositTotal;

    // clear deposit input
    depositInput.value = '';

    // ubdate deposit balanec

    const balanecTotal = document.getElementById('balance-total');
    const balanceTotalText = balanecTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);

    const newBalanceTotal = balanceTotalAmmount + newDepositAmmount;
    console.log(newBalanceTotal);

    balanecTotal.innerText = newBalanceTotal;


});

// withdraw event  handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawAmmount = withdrawTotal.innerText;

    const neWwithdrawTotal = parseFloat(previouswithdrawAmmount) + parseFloat(newWithdrawAmmount);

    withdrawTotal.innerText = neWwithdrawTotal;

    // clear withdraw input
    withdrawInput.value = '';

    // ubdate withdraw balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;

    balanceTotal.innerText = newBalanceTotal;



}) 