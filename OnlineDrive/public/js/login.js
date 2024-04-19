document.addEventListener("DOMContentLoaded", function() {
    var nextButton = document.querySelector('#next-button');
    var passwordContainer = document.querySelector('.password-container');
    var emailInput = document.querySelector('.form-field[type="email"]');
    var passwordInput = document.querySelector('#password');
    var invalidEmailText = document.querySelector('.invalid-email');
    var invalidPasswordText = document.querySelector('.invalid-password');

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[cC][oO][mM]$/.test(email);
    }

    function handleNextButtonClick() {
        if (passwordContainer.style.display === 'none') {
            if (isValidEmail(emailInput.value)) {
                passwordContainer.style.display = 'block';
                invalidEmailText.style.display = 'none';
            } else {
                invalidEmailText.style.display = 'block';
            }
        } else {
            if (passwordInput.value.length >= 5) {
                // Assuming your server-side authentication endpoint is correct
                window.location.href = '/homepage'; // Redirect to homepage
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

