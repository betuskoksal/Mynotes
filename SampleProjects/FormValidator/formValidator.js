const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling || input.nextSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}

function success(input) {
    input.className = "form-control is-valid";
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (input.value.trim() === '') {
        error(input, "Email address is required");
    } else if (re.test(input.value)) {
        success(input);
    } else {
        error(input, "Invalid email address");
    }
}

function checkPasswordMatch(password, repassword) {
    if (password.value !== repassword.value) {
        error(repassword, "Passwords do not match");
    } else {
        success(repassword);
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} it must be at least {7} characters.`);
    }else if (input.value.length > max) {
        error(input, `${input.id} it must be at most {15} characters.`);
    }else {
        success(input);
    }
}

function checkPhone(input) {
    var exp= /^\d{10}$/;
    if (!exp.test(input.value))
    error(input, 'The phone number must be 10 characters long.')
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkPasswordMatch(password, repassword);
    checkPhone(phone);
});
