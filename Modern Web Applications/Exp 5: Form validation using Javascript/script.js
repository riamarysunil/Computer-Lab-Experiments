function validateForm() {
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    var country = document.getElementById('country').value;
    var zipCode = document.getElementById('zipCode').value;
    var sex = document.querySelector('input[name="sex"]:checked');
    var language = document.querySelectorAll('input[name="language"]:checked');
    
    var userIdError = document.getElementById('userIdError');
    var passwordError = document.getElementById('passwordError');
    var nameError = document.getElementById('nameError');
    var countryError = document.getElementById('countryError');
    var zipCodeError = document.getElementById('zipCodeError');
    var sexError = document.getElementById('sexError');
    var languageError = document.getElementById('languageError');
    
    userIdError.textContent = "";
    passwordError.textContent = "";
    nameError.textContent = "";
    countryError.textContent = "";
    zipCodeError.textContent = "";
    sexError.textContent = "";
    languageError.textContent = "";
    
    var isValid = true;
    
    if (userId.length < 5 || userId.length > 12) {
      userIdError.textContent = "User ID must be between 5 and 12 characters.";
      isValid = false;
    }
    
    if (password.length < 7 || password.length > 12) {
      passwordError.textContent = "Password must be between 7 and 12 characters.";
      isValid = false;
    }
    
    if (!/^[A-Za-z ]+$/.test(name)) {
      nameError.textContent = "Name must contain only alphabets.";
      isValid = false;
    }
    
    if (country === "") {
      countryError.textContent = "Please select a country.";
      isValid = false;
    }
    
    if (!/^\d+$/.test(zipCode)) {
      zipCodeError.textContent = "ZIP Code must contain only numbers.";
      isValid = false;
    }
    
    if (!sex) {
      sexError.textContent = "Please select a gender.";
      isValid = false;
    }
    
    if (language.length === 0) {
      languageError.textContent = "Please select at least one language.";
      isValid = false;
    }
    
    if (isValid) {
      // Display submission message using alert
      alert("Form submitted successfully!");
    }
    
    return isValid;
  }
  
