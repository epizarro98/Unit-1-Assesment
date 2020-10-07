let add = document.querySelector('.add')
let subtract = document.querySelector('.subtract')
let status = document.querySelector('#status')
let int = document.querySelector('.number')
let number = 0

// const addOne = () => {
//     number +=10
//     status.innerHTML = number
//     if(status > 10){
//         status.style.color= 'red'
//     }
// }

// const subtractOne = () => {
//     number -=10
//     status.innerHTML = number
// }

add.addEventListener('click', addOne)
subtract.addEventListener('click', subtractOne)