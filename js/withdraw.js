document.getElementById("btn-withdraw").addEventListener('click',function(){
    const withdrawfiled= document.getElementById('Withdraw-field')
     const newtotalWithdraw = parseFloat(withdrawfiled.value);
     withdrawfiled.value=''
if(isNaN(newtotalWithdraw)){
    alert ('provit a valid number')
    return;
}

const withdraw = document.getElementById('total-withdraw')
const  previusewithdraw =parseFloat(withdraw.innerText)


const balance= document.getElementById('total-balance')

const balanceValue= parseFloat(balance.innerText)


if(newtotalWithdraw>balanceValue){
    alert('tor baper bank e eto tk nai')
    return;
}

const carentwithdraw =previusewithdraw+newtotalWithdraw;

withdraw.innerText =carentwithdraw

const carentbalance = balanceValue - newtotalWithdraw;
balance.innerText = carentbalance


})