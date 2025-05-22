const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const showWatch = document.querySelector('.watch');
let interval = null;

let [ hours, minutes, seconds ] = [ 0, 0, 0 ];

const watch = () => {
   seconds++;

   if ( seconds  === 60 ) {
      seconds = 0;
      minutes++;
   } 
   
   if ( minutes === 60 ) {
      minutes = 0;
      hours++;
   }

   showWatch.innerText = `${formatTime( hours )}:${formatTime( minutes )}:${formatTime( seconds )}`;
}

const formatTime = (time) => (time < 10 ? `0${time}` : time);

startBtn.addEventListener('click', () => {
   if (!interval) {
       interval = setInterval(watch, 1000);
   }
});

stopBtn.addEventListener('click', () => {
   clearInterval(interval);
   interval = null; 
});

resetBtn.addEventListener('click', () => {
   clearInterval(interval);
   interval = null; 
   [hours, minutes, seconds] = [0, 0, 0];
   showWatch.innerText = '00:00:00';
});