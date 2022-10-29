document.getElementById('submit-button').addEventListener('click', function(){
    // get userEmail
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail)

    // get userPassword
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);


    // window.location.href = 'banking.html';
     
    if(userEmail == 'abc@gmail.com' && userPassword == 1234){
        window.location.href = 'banking.html';
    }
})

