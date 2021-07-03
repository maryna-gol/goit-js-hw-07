
/***/
let counterValue = document.querySelector('#value');
let incrementBtn = document.querySelector('[data-action="increment"]');
let decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementFunction = () =>
  (counterValue.textContent = Number(counterValue.textContent) + 1);
const decrementFunction = () =>
  (counterValue.textContent = Number(counterValue.textContent) - 1);
decrementBtn.addEventListener('click', decrementFunction);
incrementBtn.addEventListener('click', incrementFunction);
