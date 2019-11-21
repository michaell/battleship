// 'use strict';

// let age = 20; // присвоим для примера 16

// if (age < 18) {
//   welcome();               // \   (выполнится)
//                            //  |
//   function welcome() {     //  |
//     console.log("Привет!");      //  |  Function Declaration доступно
//   }                        //  |  во всём блоке кода, в котором объявлено
//                            //  |
//   welcome();               // /   (выполнится)
//   welcome();               // /   (выполнится)
//   welcome();               // /   (выполнится)

// } else {
//     welcome();
//   function welcome() {
//     alert("Здравствуйте!");
//   }
// }

// // здесь фигурная скобка закрывается,
// // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

//  // Ошибка: welcome is not defined

// let arr = ['apple', 'orange', 'melon'];

// arr.age = 25;
// console.log(arr);

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// console.log(( fruits.length )); // 4

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл'); //Джаз', 'Блюз', 'Рок-н-ролл'
// styles[1] = 'Классика'; //Джаз', 'Классика', 'Рок-н-ролл'
// console.log(styles.shift()); //'Классика', 'Рок-н-ролл'
// styles.unshift('Рэп', 'Регги'); //Рэп', 'Регги', 'Классика', 'Рок-н-ролл'
// console.log(styles);

// let arr = ["a", "b", 1, 'asss', 'misha', true, null];

// arr.forEach((item, index, arr) => {
//     console.log(`item is ${item}, index is ${index}, array is ${arr}`);
// })

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // ?


