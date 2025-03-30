const boxes = document.querySelectorAll('.item'),
      showTurn = document.querySelector('.show-turn'),
      showGameState = document.querySelector('.show-state')

let turn = 'X';
const winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8]
];


boxes.forEach( box => {

   box.addEventListener('click', () => {

      if ( box.innerHTML !== '' ) return;

      if ( turn === 'X' ) {
         box.innerHTML = `${ turn }`;
         showTurn.classList.add('change');
         turn = 'O';
      } 
      else {
         box.innerHTML = `${ turn }`;
         showTurn.classList.remove('change');
         turn = 'X';
      }

      checkWinner()

   })

})

const checkWinner = () => {

   let hasWin = false;

   for ( let pattern of winPatterns ) {

       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;

       if (pos1 !== "" && pos2 !=="" && pos3 !=="" && pos1 === pos2 && pos2 === pos3) {
           showGameState.innerHTML = `Ganador: ${ pos1 }`;
           hasWin = true;
           return;
      }
   }

   if ( !hasWin ) {
       const allBoxes = [...boxes].every(( box ) => box.innerText !== "");
       if ( allBoxes ) {
         showGameState.innerHTML = `Empate`;
      }
   }
};

function resetGame() {

   showTurn.classList.remove('change');
   showGameState.innerHTML = ''
   turn = 'X'

   boxes.forEach( box => {
      if ( box.innerHTML ) {
         box.innerHTML = ''
      }
   })

}
