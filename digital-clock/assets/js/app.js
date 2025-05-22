const showHour = document.querySelector('.hour'),
      showMinute = document.querySelector('.minute'),
      showSecond = document.querySelector('.second');

const displayTime = () => {

   let date = new Date();

   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();

   showHour.innerText = hours < 10 ? `0${hours}`: `${hours}`;
   showMinute.innerText = minutes < 10 ? `0${minutes}`: `${minutes}`;
   showSecond.innerText = seconds < 10 ? `0${seconds}`: `${seconds}`;

}

setInterval( displayTime, 1000 );