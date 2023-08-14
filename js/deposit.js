document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositFiled = document.getElementById('deposit-field');
    const depositAmount = depositFiled.value;

    
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})