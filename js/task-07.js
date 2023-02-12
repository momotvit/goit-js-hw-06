

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function playWithMySize() { 
    textEl.style.fontSize = inputEl.value + "px";

}
inputEl.addEventListener("input", playWithMySize);