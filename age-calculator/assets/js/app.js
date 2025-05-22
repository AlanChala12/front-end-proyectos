const input = document.getElementById('user-data'),
      btn = document.querySelector('.user-input button'),
      showYear = document.querySelector('.year'),
      showMonth = document.querySelector('.month'),
      showDay = document.querySelector('.day')

let userData = null;

const App = () => {

   if ( !input.value ) {
      alert('Ingresa una fecha');
      return;
   }

   calculateUserAge();

}

const calculateUserAge = () => {

   userData = input.value
   let userYear = Number(userData.slice( 0, 4 ));
   let userMonth = Number(userData.slice( 5, 7 ));
   let userDay = Number(userData.slice( 8, 10 ));

   let currentDate = new Date();

   let year = currentDate.getFullYear() - userYear;
   let month = currentDate.getMonth() - userMonth;
   let day = currentDate.getDate() - userDay;

   if (day < 0) {
      let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      day += previousMonth;
      month -= 1;
  }
  
   if (month < 0) {
      month += 12;
      year -= 1;
   }
  
   showYear.innerHTML = year < 9 ? '0' + year : year;
   showMonth.innerHTML = month < 9 ? '0' + month : month;
   showDay.innerHTML = day < 9 ? '0' + day : day;

}

btn.addEventListener( 'click', App );