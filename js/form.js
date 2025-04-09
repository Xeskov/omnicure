document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit-button');
    const emailError = document.getElementById('email-error');
  
    // Регулярное выражение для проверки email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  

    function validateEmail() {
      const emailValue = emailInput.value.trim();
  
      if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('error');
        emailError.textContent = 'Please enter a valid email address.';
        return false;
      } else {
        emailInput.classList.remove('error');
        emailError.textContent = '';
        return true;
      }
    }
  
  
    function toggleSubmitButton() {
      submitButton.disabled = !validateEmail();
    }
  
 
    emailInput.addEventListener('input', () => {
      validateEmail();
      toggleSubmitButton();
    });
  

    form.addEventListener('submit', (event) => {
      if (!validateEmail()) {
        event.preventDefault();
      }
    });
  });
  