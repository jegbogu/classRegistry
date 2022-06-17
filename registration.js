const password = document.querySelector('#validationCustomUsername'),
username = document.querySelector('#name'),
email = document.querySelector('#email'),
nameErrorMsg = document.querySelector('.nameErrorMsg'),
emailErrorMsg = document.querySelector('.emailErrorMsg'),
passwordErrorMsg = document.querySelector('.passwordErrorMsg'),
form = document.querySelector('form'),
register = document.querySelector('#register'),
 
showPass = document.querySelector('.input-group-text');

//validation starts

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

// checking for empty fields when the submit button is clicked
register.addEventListener('click', ()=>{
    const allInput = document.querySelectorAll('input')
 
    allInput.forEach((input)=>{
        if(input.value.trim() == ""){
          
            return inputTagname(input)
        } else{
          return  successMsg(input)
        
        }
    })

    
})

function inputTagname(input){
 input.classList.add('errDisplay')
  
 }
 
function successMsg(input){
    input.classList.remove('errDisplay')
     input.classList.add('successMsg')
     if(username.value.trim().length<8){
        nameErrorMsg.innerHTML = 'Username should be more than 8 characters'
     }else if(email.value.trim().length<6 || email.value.trim().indexOf(' ')!==-1 ){
        emailErrorMsg.innerHTML = 'Email should be more than 6 characters and must not have space'
     }else if(password.value.trim().length<8 || password.value.trim().indexOf(' ')!==-1){
        passwordErrorMsg.innerHTML = 'Password should be more than 8 characters and must not have space '
     }
}

//validation ends

//password toggle starts
 
const passwordDisplay = () =>{
    if(password.getAttribute('type')=="password"){
        password.setAttribute('type', 'text')
        showPass.innerHTML = 'Hide'
    }else{
        password.setAttribute('type', 'password')
        showPass.innerHTML = 'Show'
    }
}

 
showPass.addEventListener('click',passwordDisplay)

//password toggle ends