const form = document.querySelector('form'),
submit = document.querySelector('#submit'),
option = document.querySelectorAll('option'),
chooseDays = document.querySelector('.chooseDays'),
days= document.querySelector('#days');



form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

days.addEventListener('input',(e)=>{
    if(days.value == 'others'){
        chooseDays.style.display = 'block'
    }else{
        chooseDays.style.display = 'none'
    }
})