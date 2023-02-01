let counterValue = 0;

const updateCounter = () => {
  counterEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  updateCounter();
};

const increment = () => {
  counterValue += 1;
  updateCounter();
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', increment);
const counterEl = document.querySelector('#value');
