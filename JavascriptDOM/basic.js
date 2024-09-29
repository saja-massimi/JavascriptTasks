"use strict";
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const registerBtn = document.getElementById("submit");

function validateForm() {
    let isValid = true;

    // Validate username
    if (username.value === '') {
        document.getElementById('UserErrorMessage').innerHTML = 'Username is required';
        isValid = false;
    } else {
        document.getElementById('UserErrorMessage').innerHTML = '';
    }

    // Validate password
    if (password.value === "") {
        document.getElementById("PasswordErrorMessage").innerHTML = "Password is required";
        isValid = false;
    } else {
        document.getElementById("PasswordErrorMessage").innerHTML = '';
    }

    // Validate confirm password
    if (confirmPassword.value === "") {
        document.getElementById("ConfirmPasswordErrorsMessage").innerHTML = "Confirm password is required";
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        document.getElementById("ConfirmPasswordErrorsMessage").innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("ConfirmPasswordErrorsMessage").innerHTML = '';
    }

    registerBtn.disabled = !isValid;
}


username.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);


registerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!registerBtn.disabled) {
        alert("Registration Successful");
    }
});