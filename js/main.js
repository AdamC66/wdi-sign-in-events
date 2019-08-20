document.addEventListener('DOMContentLoaded', function(){
    let signInButton = document.querySelector('.signin')
    let signInForm = document.querySelector('.modal')
    let closeButton = document.querySelector('.close')
    signInButton.addEventListener('click', function(){
        if(signInForm.style.display=== 'none'){
            signInForm.style.display = "block"
        }else{
            signInForm.style.display = 'none'
        }
    })
    closeButton.addEventListener('click', function(){
        console.log("I HAVE BEEN CLICKED!")
        signInForm.style.display = 'none'
    })



    let submitButton = document.querySelector('.submit')
    let userField = document.querySelector('#user')
    let passField = document.querySelector('#pass')
    submitButton.addEventListener('click', function(){
        if(!userField.classList.contains('error')){
            userField.classList.add('error')
            passField.classList.add('error')
        }
    })
    userField.addEventListener('focus', function(){
        this.classList.remove('error')
    })
    passField.addEventListener('focus', function(){
        this.classList.remove('error')
    })

})