const form = document.querySelector('.search')
const sendBtn = document.querySelector('.search button');
const inputCity = document.querySelector('.search input');
const imgWheater = document.querySelector('.showImg');

sendBtn.addEventListener('click', () => {
      ShowInfo( inputCity.value );
})

form.addEventListener('submit', (e) => {
      e.preventDefault();
      ShowInfo( inputCity.value );
})

let apiKey = "9e0c292d84630d0bfd69e535fa17ae7d";

const ShowInfo = async( city ) => {

   let apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
   let data = await apiUrl.json();

   if ( apiUrl.status === 404 ) {
      console.error( 'Por favor, ingresa un sitio existente' )
      document.querySelector('.principal').style.display = 'none';
      document.querySelector('.warning').style.display = 'block';
   } 
   else {
      document.querySelector('.principal').style.display = 'block';
      document.querySelector('.warning').style.display = 'none'; 

      document.getElementById('city').innerText = `${ data.name }`;
      document.getElementById('temper').innerText = ` ${Math.floor(data.main.temp / 10)}°c `;
      document.getElementById('humi').innerText = `${ data.main.humidity }%`;
      document.getElementById('wind').innerText = `${ data.wind.speed }km/h`;

      if ( data.weather[0].main === 'Clear' ) {
         imgWheater.src = './images/clear.png'; 
      }
      else if ( data.weather[0].main === 'Clouds' ) {
         imgWheater.src = './images/clouds.png'; 
      }
      else if ( data.weather[0].main === 'Drizzle' ) {
         imgWheater.src = './images/drizzle.png'; 
      }
      else if ( data.weather[0].main === 'Mist' ) {
         imgWheater.src = './images/mist.png'; 
      }
      else if ( data.weather[0].main === 'Rain' ) {
         imgWheater.src = './images/rain.png'; 
      }
      else if ( data.weather[0].main === 'Snow' ) {
         imgWheater.src = './images/snow.png'; 
      }
   }
}

document.addEventListener('DOMContentLoaded', ShowInfo( 'medellin' ));