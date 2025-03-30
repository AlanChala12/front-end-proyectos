const input = document.querySelector('input'),
      form = document.querySelector('form')
      showTask = document.querySelector('.show-tasks')


form.addEventListener('submit', ( e ) => {

   e.preventDefault();

   if ( !input.value ) {
      alert('Por favor, ingresa texto en el campo de entrada');
      return;
   }

   CreateTaskApp( input.value );
   input.value = '';

})


const CreateTaskApp = ( userText ) => {

   let newTask = document.createElement('div')
   newTask.innerHTML = `${ userText }`
   newTask.setAttribute('class', 'task')

   let newTrash = document.createElement('i')
   newTrash.setAttribute('class', 'bx bx-trash');
   newTask.appendChild( newTrash )

   showTask.appendChild(newTask)

   newTrash.addEventListener('click', ({ target }) => {
      target.parentNode.remove() 
   })

   newTask.addEventListener('click', (e) => {
      e.target.classList.toggle('complete')
   })

   saveInfo()

}

function saveInfo() {
   localStorage.setItem( 'info', showTask.innerHTML )
}

function setInfo() {
   showTask.innerHTML = localStorage.getItem( 'info', showTask.innerHTML )
   document.querySelectorAll('i').forEach(element => {
      element.addEventListener('click', ({ target }) => {
         target.parentNode.remove() 
         saveInfo()
      })
   })

   document.querySelectorAll('.task').forEach(task => {
      task.addEventListener('click', ({target}) => {
         target.classList.toggle('complete')
         saveInfo()
      })
   })
}

setInfo()
