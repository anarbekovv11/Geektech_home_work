///dz1_ES6
// let number = prompt('поставьте оценку 1 до 10');

// if(number > 10){
//     console.log('введите число от 1 до 10')
// }else if (number >  5){
//     console.log('спасибо за высокую оценку')
// }else if (number < 5){
//     console.log('Мы рабоатем над улучшением сайта')
// }else if (number.isNaN){
//     console.log('number')
// }else{
//     console.log('error')
// }

// dz2_ES6


// let color = prompt("Напишите Цвет\nкрасный\nжелтый\nзеленый").toLowerCase().trim()

// if (color === "красный"){
//     console.log("СТОЙ!")
// }else if (color === "желтый"){
//     console.log("Подожди")
// }else if (color === "зеленый"){
//     console.log("Иди")
// }else{
//     console.log("Пишите : Красный - Желтый - Зеленый")
// }

// //task-2

// for (let num = 20; num >= 0; num--) {
//     console.log()
// }
// //task-1

// let massiv = []

// for (let i = 0; i < 11; i++){
//     massiv.push(i)
// }
// console.log(massiv)


// // dz3_ES6

// let a = prompt ('Введите первое число')
// let b = prompt ('Введите второе число')


// function alfa (a,b) {
//     if (isNaN(a) || isNaN(b)) {
//         alert('Введите число!!!')
//         return;
//     }
//     console.log(Math.min(a,b))
// }
// alfa (a,b)

// // 2 part
// const word = prompt("Что-нибудь напишите, пожалуйста");
// function returnFunction(word) {
//     console.log(`Длина строки равна ${word.length}`)
// }
// returnFunction(word)

// // 3 part
// function calculator(a, b) {
//     let number1 = Number(prompt('Введите первое число').trim())
//     let operation = prompt('Выберите действие\n+\n-\n/\n*')
//     let number2 = Number(prompt('Введите второе число').trim())

//     switch (operation) {
//         case'+':
//             alert(number1 + number2)
//             break;
//         case'-':
//             alert(number1 - number2)
//             break;
//         case'/':
//             if (number2 === 0) {
//                 alert('На ноль делить нельзя')
//             } else {
//                 alert(number1 / number2)
//             }
//             break;
//         case'*':
//             alert(number1 * number2)
//             break;
//         default:
//             alert('Введите только числа')
//     }
// }
// calculator()

// // dz4_ES6

// //task 1
// const plus = document.querySelector('#increment')
// const  minus = document.querySelector('#decrement')
// const  reset = document.querySelector('#reset')
// const  num = document.querySelector('.number')


// let number = 0

// plus.addEventListener('click', () => {
//     number ++
//     num.innerText = number
//     num.style.color = "green"
// })

// minus.addEventListener('click', () => {
//     number --
//     if (number < 1 ){
//         number = 0
//     }
//     num.innerText = number
//     num.style.color = "red"
// })

// reset.addEventListener('click', () => {
//     number = 0
//     num.innerText = number
//     num.style.color = "gray"
// })

// // task 2
// // светофор
// const color = prompt('Введите цвет \nКрасный, \nЖелтый, \nЗеленый :').trim().toLowerCase()
// const Red = document.getElementsByClassName('red')
// const Yellow = document.getElementsByClassName('yellow')
// const Green = document.getElementsByClassName('green')


// switch (color) {
//     case 'красный':
//         Red[0].style.background = 'red'
//         Red[0].innerHTML = 'Stop'
//         break;
//     case 'желтый':
//         Yellow[0].style.background = 'yellow'
//         Yellow[0].innerHTML = 'Wait'
//         break;
//     case 'зеленый':
//         Green[0].style.background = 'green'
//         Green[0].innerHTML = 'GO'
//         break;
//     default:
//         Red[0].style.background = 'red'
//         Yellow[0].style.background = 'yellow'
//         Green[0].style.background = 'green'
//         Red[0].innerHTML = "Эу пиши "
//         Yellow[0].innerHTML = "Цвета"
//         Green[0].innerHTML = "СВЕТОФОРА!!!!!"
// }


// //task3

// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
// window.addEventListener('mousemove',(event) => {
//     let x =event.screenX
//     let y = event.screenY

//     posX.innerText = x
//     posY.innerText = y
// })

// // dz5_ES6

// const input = document.getElementById('input')
// const createButton = document.getElementById('create_button')
// const todoList = document.getElementById('todo_list')

// function createTodo () {
//     if (input.value.trim() === '') {
//         return false
//     } else {
//         const div = document.createElement('div')
//         const text = document.createElement('h3')
//         const buttonsDiv = document.createElement('div')
//         const deleteButton = document.createElement('button')
//         const editButton = document.createElement('button')

//         div.setAttribute('class', 'block_text')
//         buttonsDiv.setAttribute('class', 'buttons_div')
//         deleteButton.setAttribute('class', 'delete_button')
//         editButton.setAttribute('class', 'edit_button')

//         text.innerText = input.value
//         deleteButton.innerText = 'delete'
//         editButton.innerText = 'edit'

//         todoList.append(div)
//         buttonsDiv.append(deleteButton, editButton)
//         div.append(text, buttonsDiv)

//         deleteButton.onclick = () => div.remove()
//         editButton.onclick = () => {
//             let editText = prompt(`Edit: ${text.innerText}`).trim()
//             editText === '' ? text.innerText : text.innerText = editText
//         }
//     }
//     input.value = ''
// }

// createButton.addEventListener('click', createTodo)
// input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)

// //dz6_ES6

//task-1
const inputText = document.getElementById('inputType');
const reverseText = document.getElementById('reverseType');
const btnReverse = document.getElementById('btnReverse')
const persons = [
    {name: 'Nurdin', age: 19},
    {name: 'Kairat', age: 20},
    {name: 'Ivan', age: 17},
    {name: 'Aida', age: 20},
    {name: 'Milana', age: 15},
    {name: 'Ahmad', age: 19},
]


function func(str) {
    persons.forEach(person => {
    const h1 = document.createElement('h1')
    document.body.append(h1)
    h1.append(`Name: ${person.name}, Age: ${person.age}`)
})
        return str.split('').reverse().join('')
}


btnReverse.addEventListener('click', () => {
    reverseText.textContent =  func(inputText.value)
    }
)
//task-2