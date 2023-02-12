

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    }`;
}
const spanTextEl = document.querySelector(".color");
const changeColorBtnEL = document.querySelector(".change-color");
const bodyBgColor = document.querySelector("body");


changeColorBtnEL.addEventListener("click", bgColorChange);



function bgColorChange(){
    bodyBgColor.style.backgroundColor = getRandomHexColor();
    spanTextEl.textContent = bodyBgColor.style.backgroundColor;
    return;
}





