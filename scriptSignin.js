let email = document.getElementById("email");
let password = document.getElementById("password");
let errorMessage = document.getElementsByTagName("small");
let popup = document.getElementById("popUp");
let signinBox = document.getElementById("signinBox");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let flag1 , flag2;
let btnSignin = document.getElementById("btnSignin");

// function to validate input forms

function validateSignin(name) {
    if (name === "email" )
     {
        flag1 = 0;
        if (email.value == "" || ! emailRegex.test(email.value)) 
        {
            errorMessage[0].innerHTML = "enter a valid email"
            email.style.border = "3px solid red";
        }
    else
    {
        flag1 = 1;
        errorMessage[0].innerHTML = ""
        email.style.border = "none";
    }
    }
    else if (name === "password") {
        flag2 = 0;
    if (password.value == "" || password.value.length < 8) 
    {
        errorMessage[1].innerHTML = "Enter a valid password";
        password.style.border = "3px solid red";
    
    }

    else
    {
        flag2 = 1;
        errorMessage[1].innerHTML = "";
        password.style.border = "none"
    }
    
    }
    
    // if there is no error display popup box
    if (flag1 && flag2 ) {
        btnSignin.disabled = false;
    }
    else{
        btnSignin.disabled = true;
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
    email.value = "";
    password.value = "";   
    btnSignin.disabled = true;
}
