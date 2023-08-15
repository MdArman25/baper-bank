document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposit = document.getElementById('deposit-field')
    const newdepositeValue = parseFloat(deposit.value)
deposit.value=''
if(isNaN(newdepositeValue)){
    alert ('provit a valid number')
    return;
}

const totaldeoposit = document.getElementById('total-deposit')
const previoustotal= parseFloat(totaldeoposit.innerText)

const carentdeposit=previoustotal+newdepositeValue;
totaldeoposit.innerText=carentdeposit;

const balanceElement = document.getElementById('total-balance')
const balanceString = balanceElement.innerText;

const balancevalue = parseInt(balanceString)

const carentbalance= balancevalue+newdepositeValue;

    balanceElement.innerText= carentbalance



})
console.log('ami toke valuvasechilam');


