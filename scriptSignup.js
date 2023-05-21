let inputElements = document.getElementsByClassName("input");
let genderElements = document.getElementsByName("gender");
let popup = document.getElementById("popup");
let signupBox = document.getElementById("signupBox");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(genderElements);
console.log(inputElements);

/* function to validate input forms . used for loop to check empty values
and if conditions for special validations like email , phone number ...*/

function validateSignup() {

    let invalidInputCount = 0;

    for (let i = 0; i < 14; i++) {
        if (invalidInputCount >= 2) {
            alert("please fill all the required fields");
            break
        } else {

            if (i === 3 && ! genderElements[0].checked && ! genderElements[1].checked) {
                alert("Please choose a gender");
                invalidInputCount++;
            } else if (i === 6 && inputElements[6].value.length !== 10) {
                alert("Please enter a 10-digit mobile number");
                invalidInputCount++;
            }
            else if(i == 7 && !emailRegex.test(inputElements[i].value)) 
            {
                alert("please enter a valid email");
            }
            else if (i === 12) {
                if (inputElements[12].value === "") {
                    alert("Please enter your passcode");
                    invalidInputCount++;
                } else if (inputElements[12].value.length < 8) {
                    alert("Password must contain at least 8 digits");
                    invalidInputCount++;
                } else if (inputElements[12].value !== inputElements[13].value) {
                    alert("Please enter matching passwords");
                    invalidInputCount++;
                }
            } else if (i !== 4 && i !== 5 && inputElements[i].value === "") {
                invalidInputCount++;
                {
                    alert("Please enter a valid " + inputElements[i].id);
                    inputElements[i].style.border = "3px solid red";
                }
            }
        }
    }
    console.log(invalidInputCount);

    // if there is no error display popup box

    if (invalidInputCount == 0) {
        openPopup();
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
