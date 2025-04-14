
const btnFlip = document.querySelector('.button button'),
      showCoin = document.querySelector('.img img'),
      coinState = document.querySelector('.coin-state p'),
      coinOptions = [ 'Head', 'Tail' ]

function randomIndex() {
   return Math.floor( Math.random() * 2 );
}

btnFlip.addEventListener('click', () => {

   let index = randomIndex();

   if ( index === 0 ) {
      showCoin.src = './resources/heads.svg';
      coinState.innerHTML = 'Heads';
   }
   else if ( index === 1 ) {
      showCoin.src = './resources/tails.svg';
      coinState.innerHTML = 'Tails';
   }

})

