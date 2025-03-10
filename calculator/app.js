const btns = document.querySelectorAll('.buttons button'),
      input = document.querySelector('.show')

btns.forEach(btn => {
   btn.addEventListener('click', () => {
      input.value += `${ btn.value }`;
   })
})

function equal() {
   input.value = eval( input.value );
}

function delet() {
   input.value = '';
}

function delLastDig() {
   input.value = input.value.slice(0, -1);
}