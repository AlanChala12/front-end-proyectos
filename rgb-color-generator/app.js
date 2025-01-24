const showColor = document.querySelector('.show-color'),
      generatorColor = document.querySelector('.generator')


function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    
    let randomColor = `rgb(${red}, ${green}, ${blue})`
    
    return randomColor
}
             

generatorColor.addEventListener('click', () => {

    let finalColor = randomColor()
    document.body.style.background = finalColor 
    showColor.innerText = finalColor

})