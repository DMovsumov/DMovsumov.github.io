let _left = '.slider__button__left'
let _right = '.slider__button__rigth'

let button_left = document.querySelector(_left)
let button_right = document.querySelector(_right)

let slider_img = document.querySelector('.slider__img')


button_left.addEventListener('click', () => {
    console.log('left')
})

button_right.addEventListener('click', () => {
    console.log('rigth')
})