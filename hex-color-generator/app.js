const showColor = document.querySelector('.color')
const boton = document.querySelector('.change')

function generateColor() {
  
    let caracteres = 'abcdef0123456789'
    let hexColor = '#'
    
    while (hexColor.length < 7) {
      let randomIndex = Math.floor(Math.random() * 16)
      hexColor = hexColor + caracteres[randomIndex]
    }
    
    return hexColor
    
}

boton.addEventListener('click', () => {

    let finalColor = generateColor()
    showColor.innerText = finalColor
    document.body.style.background = finalColor

}) 