const showNumber = document.querySelector('.show')
const buttonAdd = document.querySelector('.click')
const buttonDecrease = document.querySelector('.minus')
const buttonReset = document.querySelector('.reset')

let count = 0

buttonAdd.addEventListener('click', () => {
    count += 1
    showNumber.innerText = `${count}`
})

buttonDecrease.addEventListener('click', () => {
    count -= 1
    showNumber.innerText = `${count}`
})

buttonReset.addEventListener('click', () => {
    count = 0
    showNumber.innerText = `${count}`
})