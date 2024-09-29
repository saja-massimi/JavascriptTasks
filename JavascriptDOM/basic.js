"use strict";
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const registerBtn = document.getElementById("submit");

const regForm = document.getElementById("regForm");

const label1 = document.createElement("label");
label1.setAttribute("for", "username");
label1.textContent = "Username";

const label2 = document.createElement("label");
label2.setAttribute("for", "password");
label2.textContent = "Password";

const label3 = document.createElement("label");
label3.setAttribute("for", "confirmpassword");
label3.textContent = "Confirm Password";



username.parentNode.insertBefore(label1, username);
password.parentNode.insertBefore(label2, password);
confirmPassword.parentNode.insertBefore(label3, confirmPassword);

function validateForm() {
    let isValid = true;


    if (username.value === '') {
        document.getElementById('UserErrorMessage').innerHTML = 'Username is required';
        isValid = false;
    } else {
        document.getElementById('UserErrorMessage').innerHTML = '';
    }


    if (password.value === "") {
        document.getElementById("PasswordErrorMessage").innerHTML = "Password is required";
        isValid = false;
    } else {
        document.getElementById("PasswordErrorMessage").innerHTML = '';
    }


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