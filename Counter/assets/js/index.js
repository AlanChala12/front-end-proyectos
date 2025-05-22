
const showValue = document.querySelector('h2'),
      incrementBtn = document.querySelector('.increment'),
      decrementBtn = document.querySelector('.decrement'),
      resetBtn = document.querySelector('.reset');

let value = 0;

incrementBtn.addEventListener('click', () => {
   value += 1;
   showValue.innerHTML = `${ value }`;
})

decrementBtn.addEventListener('click', () => {
   value -= 1;
   showValue.innerHTML = `${ value }`;
})

resetBtn.addEventListener('click', () => {
   value = 0;
   showValue.innerHTML = `${ value }`;
})