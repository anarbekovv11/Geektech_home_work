// 1) Написать функцию, которая принимает 2 параметра (числа) и возвращает в консоли самый минимальный из них.
// 2) Написать функцию которая принимает 1 параметр в который попадает promt() и вернуть длину строки в консоли.
// 3) Написать простой калькулятор при помощи функции и его параметров. Функция должна уметь вычислять: деление
// "/",  умножение "*", вычитание "-", сложение "+"

//       Задания N1


// let test = (a, b) => console.log('Меньше число=',Math.min(a, b))
// let a = Number(prompt('первое число'))
// let b = Number(prompt('второе число'))
// if(isNaN(a)||isNaN(b)){
//     alert('вы должны ввести числа!')
//     console.log('Надо было ввести числа!')
// }
// else test(a, b)


//       Задания N2



// let stringLength = () =>{
//     let len = prompt('Вычислять длину строку')
//     console.log('Длина строку равно : '+len.length+' Знаком')
// }
// stringLength()






//       Задания N3



// let num1 = Number(prompt('первое число'))
//
// let num2 = Number(prompt('второе число'))
//
// let operator = prompt('оператор (/,+,*,-,)')
//
// function calc() {
//     if (num1 === Number(num1) && num2 === Number(num2)) {
//         if ('+' === operator) {
//             alert(num1 + num2)
//         } else if ('-' === operator) {
//             alert(num1 - num2)
//         } else if ('*' === operator) {
//             alert(num1 * num2)
//         } else if ('/' === operator)
//             if (num2 === 0) {
//                 alert('Делить на 0 нельзя')
//             } else {
//                 alert(num1 / num2)
//             } else {
//             alert('Напишите число!')
//         }
//     } else {
//         alert('Введите цифру')
//     }
// }
//
// calc()