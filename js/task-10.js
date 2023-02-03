const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
  input: document.querySelector('#controls input[type="number"]'),
};

refs.btnCreate.addEventListener('click', onBtnCreateClick);
refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnCreateClick() {
  createBoxes(Number(refs.input.value));
}

function onBtnDestroyClick() {
  refs.boxEl.innerHTML = '';
}

function createBoxes(amount) {
  const boxes = [];
  for (let number = 0; number < amount; number += 1) {
    let size = 30 + number * 10;
    const color = getRandomHexColor();
    boxes.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
  }

  refs.boxEl.innerHTML = boxes.join('');
}
