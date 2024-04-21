document.addEventListener('DOMContentLoaded', function() {
  var nextButton = document.getElementById('next-button');
  var nameContainer = document.querySelector('.name-container');
  var emailContainer = document.querySelector('.email-container');
  var passwordContainer = document.querySelector('.password-container');
  var firstNameInput = document.querySelector('input[name="firstName"]');
  var lastNameInput = document.querySelector('input[name="lastName"]');
  var emailInput = document.querySelector('input[name="email"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var eyeIcon = document.getElementById('eye');
  var currentStep = 0;

  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function togglePasswordVisibility() {
      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          eyeIcon.classList.add('fa-eye-slash');
          eyeIcon.classList.remove('fa-eye');
      } else {
          passwordInput.type = 'password';
          eyeIcon.classList.add('fa-eye');
          eyeIcon.classList.remove('fa-eye-slash');
      }
  }

  function validateAndProceed() {
      if (currentStep === 0) {
          if (!firstNameInput.value.trim() || !lastNameInput.value.trim()) {
              alert('Please fill out all name fields.');
              return;
          }
          nameContainer.style.display = 'none';
          emailContainer.style.display = 'block';
          currentStep++;
      } else if (currentStep === 1) {
          if (!isValidEmail(emailInput.value.trim())) {
              alert('Please enter a valid email.');
              return;
          }
          emailContainer.style.display = 'none';
          passwordContainer.style.display = 'block';
          nextButton.textContent = 'Submit';
          currentStep++;
      } else {
          submitForm();
      }
  }

  function submitForm() {
      var formData = {
          firstName: firstNameInput.value.trim(),
          lastName: lastNameInput.value.trim(),
          email: emailInput.value.trim(),
          password: passwordInput.value.trim()
      };

      fetch('/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.text())
      .then(data => {
          alert(data);
          // Reset form and UI after submission
          firstNameInput.value = '';
          lastNameInput.value = '';
          emailInput.value = '';
          passwordInput.value = '';
          nameContainer.style.display = 'block';
          emailContainer.style.display = 'none';
          passwordContainer.style.display = 'none';
          nextButton.textContent = 'Next';
          currentStep = 0;
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to submit form.');
      });
  }

  nextButton.addEventListener('click', validateAndProceed);

  eyeIcon.addEventListener('click', togglePasswordVisibility);

  [firstNameInput, lastNameInput, emailInput, passwordInput].forEach(input => {
      input.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
              validateAndProceed();
              event.preventDefault();
          }
      });
  });
});
function goToSignin() {
  window.location.href = "/signin";
}