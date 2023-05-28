let inputElements = document.getElementsByClassName("input");
let genderElements = document.getElementsByName("gender");
let errorMessage = document.getElementsByTagName("small");
let popup = document.getElementById("popup");
let signupBox = document.getElementById("signupBox");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isValid;

console.log(genderElements);
console.log(inputElements);
console.log(errorMessage);

function validateFirstName() {

    if (inputElements[0].value == "") {
        setError(0,"please enter your frist name");
        isValid = false;
    } else {
        setSuccess(0);
        isValid = true;
    }

}
function validateSecondName() {

    if (inputElements[1].value == "") {
        setError(1,"please enter your seonc name");
        isValid = false;
    } else {
        setSuccess(1);
        isValid = true;
    }

}

function validateDateOfBirth() {

    if (inputElements[2].value == "") {
        setError(2,"please enter your date of  birth name");
        isValid = false;
    } else {
        setSuccess(2);
        isValid = true;
    }

}


function validateGender() {

    if (!genderElements[0].checked && !genderElements[1].checked) {
        setError(5,"please choose a gender");
        isValid = false;
    } else {
        setSuccess(5);
        isValid = true;
    }

}


function validatePhoneNumber() {

    if (inputElements[6].value == "" || inputElements[6].value.length != 10) {
        setError(6,"please enter a 10 digit phone number");
        isValid = false;
    } else {
        setSuccess(6);
        isValid = true;
    }

}

function validateEmail() {

    if (inputElements[7].value == "" || ! emailRegex.test(inputElements[7].value)) {
        setError(7,"please enter a valid email address");
        isValid = false;
    } else {
        setSuccess(7);
        isValid = true;
    }

}

function validateAddress() {

    if (inputElements[8].value == "") {
        setError(8,"please enter a valid address");
        isValid = false;
    } else {
        setSuccess(8);
        isValid = true;
    }

}

function validateState() {

    if (inputElements[9].value == "") {
        setError(9,"please select your state");
        isValid = false;
    } else {
        setSuccess(9);
        isValid = true;
    }

}

function validateCity() {

    if (inputElements[10].value == "") {
        setError(10,"please enter your city name");
        isValid = false;
    } else {
        setSuccess(10);
        isValid = true;
    }

}

function validateUsername() {

    if (inputElements[11].value == "") {
        setError(11,"please enter your useername");
        isValid = false;
    } else {
        setSuccess(11);
        isValid = true;
    }

}

function validatePassword() {

    if (inputElements[12].value == "") {
        setError(12,"please enter your password");
        isValid = false;
    } else if (inputElements[12].value.length < 8) {
        setError(12,"Password must be minimum of 8 charcacters");
        isValid = false;
    } else {
        setSuccess(12);
        isValid = true;
    }

}

function validateConfirmPassword() {

    if (inputElements[13].value == "") {
        setError(13,"please confirm your password");
        isValid = false;
    } else if (inputElements[12].value != inputElements[13].value) {
        setError(13,"please enter matching password");
        isValid = false;
    } else {
        setSuccess(13);
        isValid = true;
    }

}


function openPopup() {
    popup.style.transform = "scale(1)";
    popup.style.transition = "transform 1s";
    signupBox.style.visibility = "hidden";
}

function closePopup() {
    popup.style.transform = "scale(0)";
    popup.style.transition = "transform 1s"
    signupBox.style.visibility = "visible"
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";

    }
}

function setError(index,message)
{
    inputElements[index].style.border = "3px solid red";
    errorMessage[index].innerHTML = message;
}

function setSuccess(index)
{
    inputElements[index].style.border = "none";
    errorMessage[index].innerHTML = "";
}

function ValidateSignup() {
    validateFirstName();
    validateSecondName();
    validateDateOfBirth();
    validateGender();
    validatePhoneNumber();
    validateEmail();
    validateAddress();
    validateState();
    validateCity();
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    if (isValid) {
        openPopup();
    }
}
