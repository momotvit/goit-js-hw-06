const decrementBtnEl = document.querySelector('[data-action = "decrement"]');
const spanValueEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
 let counterValue = Number(spanValueEl.textContent);
decrementBtnEl.addEventListener('click', () => {
    spanValueEl.textContent = (counterValue -= 1);
})

incrementBtnEl.addEventListener('click', () => {
    spanValueEl.textContent = (counterValue += 1);
})