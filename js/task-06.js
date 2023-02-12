
const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.dataset.length);


function borderColorChangeOnBlur() {
    if (inputEl.value.trim().length === dataLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
        
    }
}


inputEl.addEventListener("blur", borderColorChangeOnBlur);
        




