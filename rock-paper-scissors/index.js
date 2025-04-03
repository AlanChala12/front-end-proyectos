const selectField = document.querySelectorAll('.main-options button');
const showUserDecisition = document.querySelector('.user')
const showMachineDecisition = document.querySelector('.machine')
const showWinner = document.querySelector('.winner')
const showMachineScore = document.querySelector('.machineScore')
const showUserScore = document.querySelector('.userScore')
const resetBtn = document.querySelector('.reset-btn button')

let userScore = 0;
let machineScore = 0;

selectField.forEach( btn => {
   btn.addEventListener('click', ({ target }) => {
      showUserDecisition.innerHTML = `${ target.value }`
      startGame();
      setWinner();
   })
})


function machineDesition() {
   let options = [ 'Piedra', 'Papel', 'Tijeras' ];
   let i = Math.floor( Math.random() * options.length );
   return options[i];
}

function startGame() {

   let machine = machineDesition();
   showMachineDecisition.innerHTML = `${ machine }`;

}

function setWinner() {

   if ( showUserDecisition.innerHTML == 'Papel' && showMachineDecisition.innerHTML == 'Piedra' ) {
      userScore += 1
      showUserScore.innerHTML = `${ userScore }`
      showWinner.innerHTML = 'Usuario gana'
   }

   else if ( showUserDecisition.innerHTML == 'Tijeras' && showMachineDecisition.innerHTML == 'Papel' ) {
      userScore += 1
      showUserScore.innerHTML = `${ userScore }`
      showWinner.innerHTML = 'Usuario gana'
   }

   else if ( showUserDecisition.innerHTML == 'Piedra' && showMachineDecisition.innerHTML == 'Tijeras' ) {
      userScore += 1
      showUserScore.innerHTML = `${ userScore }`
      showWinner.innerHTML = 'Usuario gana'
   }

   else if ( showMachineDecisition.innerHTML == 'Papel' && showUserDecisition.innerHTML == 'Piedra' ) {
      machineScore += 1
      showMachineScore.innerHTML = `${ machineScore }`
      showWinner.innerHTML = 'Máquina gana'
   }

   else if ( showMachineDecisition.innerHTML == 'Tijeras' && showUserDecisition.innerHTML == 'Papel' ) {
      machineScore += 1
      showMachineScore.innerHTML = `${ machineScore }`
      showWinner.innerHTML = 'Máquina gana'
   }

   else if ( showMachineDecisition.innerHTML == 'Piedra' && showUserDecisition.innerHTML == 'Tijeras' ) {
      machineScore += 1
      showMachineScore.innerHTML = `${ machineScore }`
      showWinner.innerHTML = 'Máquina gana'
   }

   else {
      showWinner.innerHTML = 'Empate'
   }


}

resetBtn.addEventListener('click', resetGame )

function resetGame() {
   machineScore = 0
   userScore = 0
   showMachineScore.innerHTML = `${ machineScore }`
   showUserScore.innerHTML = `${ userScore }`
   showWinner.innerHTML = ''
   showUserDecisition.innerHTML = ''
   showMachineDecisition.innerHTML = ''
}