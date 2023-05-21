let inputElements = document.getElementsByTagName("input");
let emailspan = document.getElementById("emailspan");
let passwordspan = document.getElementById("passwordspan");
let popup = document.getElementById("popUp");
let signinBox = document.getElementById("signinBox");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(inputElements);

// function to validate input forms

function validateSignin() {
    
    emailspan.innerHTML = "";
    passwordspan.innerHTML = "";
    let invalidInputCount = 0;

    if (inputElements[0].value == "" || ! emailRegex.test(inputElements[0].value)) {
        emailspan.innerHTML = "enter a valid email"
        invalidInputCount++;
    }
    if (inputElements[1].value == "" || inputElements[1].value.length < 8) {
        console.log("please enter a valid password");
        passwordspan.innerHTML = "enter a valid password"
        invalidInputCount++;
    }

    // if there is no error display popup box

    if (invalidInputCount == 0) {
        openPopup();
    }
}

function openPopup() {
    popup.style.transform = "scale(1)";
    popup.style.transition = "transform 1s";
    signinBox.style.visibility = "hidden";

}

function closePopup() {
    popup.style.transform = "scale(0)";
    popup.style.transition = "transform 1s"
    signinBox.style.visibility = "visible"
    inputElements[0].value = "";
    inputElements[1].value = "";
}
