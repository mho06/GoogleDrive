document.addEventListener('DOMContentLoaded', function() {
  var nextButton = document.getElementById('next-button');
  var firstNameInput = document.querySelector('input[placeholder="First Name"]');
  var lastNameInput = document.querySelector('input[placeholder="Last Name"]');
  var emailContainer = document.querySelector('.email-container');
  var passwordContainer = document.querySelector('.password-container');
  var nameContainer = document.querySelector('.name-container');
  var invalidFirstName = document.getElementById('invalidFirstName');
  var invalidLastName = document.getElementById('invalidLastName');
  var emailInput = document.querySelector('.form-field[type="email"]');
  var invalidEmail = document.getElementById('invalidEmail');
  var passwordInput = document.getElementById('password');
  var eyeIcon = document.getElementById('eye');
  var invalidPassword = document.getElementById('invalidPassword');
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[cC][oO][mM]$/.test(email);
  }

  function validateAndProceed() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (nameContainer.style.display !== 'none') {
      // add the saved first name and last name to sql file code
      if (firstName && lastName) {
        emailContainer.style.display = 'block';
        nameContainer.style.display = 'none';
        invalidFirstName.style.display = 'none';
        invalidLastName.style.display = 'none';
      } else {
        invalidFirstName.style.display = !firstName ? 'block' : 'none';
        invalidLastName.style.display = !lastName ? 'block' : 'none';
      }
    } else if (emailContainer.style.display !== 'none') {
      // add the saved email to sql file code
      if (isValidEmail(emailInput.value)) {
        emailContainer.style.display = 'none';
        passwordContainer.style.display = 'block';
        invalidEmail.style.display = 'none';
      } else {
        invalidEmail.style.display = 'block';
      }
    } else if (passwordContainer.style.display !== 'none') {
      // add the saved password to sql file code
      if (passwordInput.value.length > 5) {
        // redirect to the login page
        window.location.href = 'https://www.example.com'; 
        invalidPassword.style.display = 'none';
      } else {
        invalidPassword.style.display = 'block';
      }
    }
  }

  nextButton.addEventListener('click', function(event) {
    validateAndProceed();
    event.preventDefault();
  });

  [firstNameInput, lastNameInput, emailInput].forEach(input => {
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        validateAndProceed();
        event.preventDefault();
      }
    });
  });

  eyeIcon.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
  });
});
