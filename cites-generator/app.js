import { citas } from './citas.js';

const showCite = document.querySelector(".cita");
const showAuthor = document.querySelector(".autor");
const button = document.querySelector('.generate');

console.log( button )

const generateCite = () => {

   let randomIndex = Math.floor( Math.random() * citas.length + 1 );
   showAuthor.innerText = citas[randomIndex]["autor"];
   showCite.innerText = citas[randomIndex]["cita"];

};

button.addEventListener('click', generateCite);