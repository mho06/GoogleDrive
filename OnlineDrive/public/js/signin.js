document.addEventListener("DOMContentLoaded", function() {
    var nextButton = document.querySelector('#next-button');
    var passwordContainer = document.querySelector('.password-container');
    var emailInput = document.querySelector('.form-field[type="email"]');
    var passwordInput = document.querySelector('#password');
    var invalidEmailText = document.getElementById('emailNotValid');
    var invalidPasswordText = document.getElementById('passwordNotValid');

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[cC][oO][mM]$/.test(email);
    }

    function handleNextButtonClick() {
        if (passwordContainer.style.display === 'none') {
            // check if email is available on the sql sheet
            if (isValidEmail(emailInput.value)) {
                passwordContainer.style.display = 'block';
                invalidEmailText.style.display = 'none';
            } else {
                invalidEmailText.style.display = 'block';
            }
        } else {
            // check if password matches the password on the sql sheet
            if (passwordInput.value.length >= 5) {
                // redirect to the home page
                window.location.href = 'https://www.example.com'; 
            } else {
                invalidPasswordText.style.display = 'block';
            }
        }
    }

    nextButton.addEventListener('click', handleNextButtonClick);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleNextButtonClick();
        }
    });
});

function show(){

    var eye = document.getElementById('eye');
    var passwordInput = document.getElementById('password');

    
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eye.classList.remove('fa-eye-slash');
            eye.classList.add('fa-eye');
        }
}

