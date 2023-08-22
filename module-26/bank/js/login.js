// step 1: add click event hendler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button check')

    // step 2: get email address inside the email input field 
    // always remember to use value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password 
    // 3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Danger : Do not verify email password on the client side 
    // step 4: varify email and password 
    if(email === 'sontan@bap.com' && password === 'secret'){
        // console.log('valid user')
        window.location.href = 'bank.html';
    }
    else{
        console.log('invalid user')
    }

})