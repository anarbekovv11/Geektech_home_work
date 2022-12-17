// 1) Создать некий счетчик. В HTML две кнопки (increment, decrement) или ("-", "+")
// и отобразить в HTML переменную внутри которой 0. 
// При нажатии на эти кнопки должно меняться значение +1 или -1 
// нажатии на соответствующую кнопку. При нажатии на плюс отображаемая
// цифра должна менять цвет на зеленый, а при нажатии на минус в красный.
// Нельзя уменьшать значение ниже нуля.


// 2) Создать блок 500 на 500 с бордером. 
// Внутри которого будет отлавливаться координаты курсора как на уроке. 


// 3) Сверстать Светофор используя  HTML, CSS
// в JS сделать такой функционал:  если ввести в диалоговое окно 
// "Красный" на светофоре загорается красный цвет и выводится 
// текст “STOP” или же Зеленый то “GO”



//      Задание  1


// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const rez = document.getElementById('count')
// let m = 0
// plus.onclick = (e) => {
//   m++;
//   rez.innerText = m
//   rez.style.color = 'green'
// }
// minus.onclick = (e) => {
//   if (m > 0) {
//     m--;
//     rez.innerText = m
//     rez.style.color = 'red'
//   }
// }


// Дз-2
const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
const block = document.querySelector('.cursor')
block.onmousemove = e => {
  posX.innerHTML = e.screenX
  posY.innerHTML = e.screenY
}

// Дз-3

// let color = prompt('Введите цвет светофора:').toLowerCase();
// const red = document.getElementById('red')
// const yellow = document.getElementById('yellow')
// const green = document.getElementById('green')
// if (color === 'красный') {
//   red.style.backgroundColor = 'red'
//   red.innerText = 'STOP!'
// }
// else if (color === 'жёлтый' || color === 'желтый') {
//   yellow.style.backgroundColor = 'yellow'
//   yellow.innerText = 'WAIT!'
// }
// else if (color === 'зелёный' || color === 'зеленый' || color === 'зелённый') {
//   green.style.backgroundColor = 'green'
//   green.innerText = 'G0!'
// }
// else alert('Вы должны ввести цвет светофора: красный, желтый или зелёный')

















// const redButton = document.getElementsByClassName('red') 
// for(let red of redButton){
//     red.addEventListener('click',(e)=>{
//         document.body.style.background = e.target.innerText
//     })
// }



// const greenButton = document.getElementsByClassName('green') 
// for(let green of greenButton){
//     green.addEventListener('click',(e)=>{
//         document.body.style.background = e.target.innerText
//     })
// }