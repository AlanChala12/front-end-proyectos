const showPass = document.querySelector('.show input');
const generateBtn = document.querySelector('.generate');
const copyBtn = document.querySelector('.copy-btn')


const generatePassword = () => {

  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
  let pass = '';

  while ( pass.length < 8 ) {
    let index = Math.floor( Math.random() * caracteres.length );
    pass = pass + caracteres[index]
  }

  return pass

}

generateBtn.addEventListener('click', () => {

  let finalPass = generatePassword()
  showPass.value = finalPass

})

copyBtn.addEventListener('click', () => {

  if ( showPass.value ) {
    navigator.clipboard.writeText( showPass.value ) 
    copyBtn.classList.add('change-color')
  
    setTimeout(() => {
      copyBtn.classList.remove('change-color')
    }, 1500 )
  }

})