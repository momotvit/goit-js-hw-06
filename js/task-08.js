

let usersInfoObject = {};


const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;  
    const customerEmail = elements.email.value;
    const customerPassword = elements.password.value;

    if (customerEmail === "" || customerPassword === "") {
        alert ("Please enter your information")  
    }

    usersInfoObject.email = customerEmail;
    usersInfoObject.password = customerPassword;
    console.log(usersInfoObject);
    event.currentTarget.reset();
  
}


