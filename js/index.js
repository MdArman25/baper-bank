document.getElementById('btn-submit').addEventListener('click',function(){
  const email = document.getElementById ('email')
  const password = document.getElementById('password')
  const emailValue = email.value
  const passwordValue = password.value
  if(emailValue === 'sarkerarman25@gmail.com' && passwordValue === 'secret'){
window.location.href= 'bank.html'
  }
  else{
alert("your r not user in this account")

  }
});