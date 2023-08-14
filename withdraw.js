// step 1: add even handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step 2: get the withdraw amount from the deposit input field
    // for input field use .value to the value inside the input field 
        const withdrawField = document.getElementById('input-withdraw');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountString);
        console.log(newWithdrawAmount);
    
    // step 7: clear the withdraw field
    withdrawField.value = '';
    
        if(isNaN(newWithdrawAmount)){
            alert('please provide a valid number');
            return;
        }
    
    // step 3: get the current withdraw total
    // for non-input(element other than input, textarea) use innerText to get the text
        const WithdrawTotalElement = document.getElementById('withdraw-total');
        const previousWithdrawTotalString = WithdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step 4 add numbers to set the total withdraw
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the deposit total 
        WithdrawTotalElement.innerText = currentWithdrawTotal;
    
    //step 5: get balance current total
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
        if(newWithdrawAmount > previousBalanceTotal){
            alert('insufficient balance');
            return;
        }
    
    // step 6 calculate current total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    })