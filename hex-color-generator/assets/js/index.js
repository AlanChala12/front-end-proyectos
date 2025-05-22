
const color1 = document.querySelector('.color-1'),
      color2 = document.querySelector('.color-2'),
      color3 = document.querySelector('.color-3'),
      color4 = document.querySelector('.color-4'),
      color5 = document.querySelector('.color-5'),
      colorShow1 = document.querySelector('.color-show-1'),
      colorShow2 = document.querySelector('.color-show-2'),
      colorShow3 = document.querySelector('.color-show-3'),
      colorShow4 = document.querySelector('.color-show-4'),
      colorShow5 = document.querySelector('.color-show-5'),
      btnGenerateColor = document.querySelector('button');

function randomColor() {

   let characteres = '0123456789abcdef';
   let color = '#';

   while ( color.length < 7 ) {
      let randomIndex = Math.floor( Math.random() * characteres.length );
      color += characteres[ randomIndex ];
   }

   return color;

}

function showAndGenerateColors() {

   let randomColor1 = randomColor();
   let randomColor2 = randomColor();
   let randomColor3 = randomColor();
   let randomColor4 = randomColor();
   let randomColor5 = randomColor();

   color1.innerHTML = `${ randomColor1 }`;
   colorShow1.style.background =  `${ randomColor1 }`;

   color2.innerHTML = `${ randomColor2 }`;
   colorShow2.style.background =  `${ randomColor2 }`;

   color3.innerHTML = `${ randomColor3 }`;
   colorShow3.style.background =  `${ randomColor3 }`;

   color4.innerHTML = `${ randomColor4 }`;
   colorShow4.style.background =  `${ randomColor4 }`;

   color5.innerHTML = `${ randomColor5 }`;
   colorShow5.style.background =  `${ randomColor5 }`;

}

btnGenerateColor.addEventListener('click', showAndGenerateColors );
document.addEventListener('DOMContentLoaded', showAndGenerateColors)

const copyColor = document.querySelectorAll('.show-color')

copyColor.forEach( color => {

   color.addEventListener('click', ({target}) => {
      navigator.clipboard.writeText( target.innerHTML );

      document.querySelector('.copy').classList.add('show');

      setTimeout(() => {
         document.querySelector('.copy').classList.remove('show');
      }, 2000)
   })

})