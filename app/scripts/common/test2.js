"use strict";
 
// console.log('test2');

// let answer = +prompt("How old are you? :");

// console.log(answer);
// console.log(typeof answer);

// let incr = 10,
// 	decr = 10;


// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

// let tr = true,
// 	fl = false;

// 	console.log(tr && fl);

// 	let a = 1,
// 		b = 2,
// 		c = 3,
// 		d = 4;

// console.log(a > b && c > d);
// console.log(a > b && c < d);
// console.log(a < b || c > d);

// let test4 = 3/1;
// console.log(test4);
// console.log(typeof test4);

// if (isNaN(test4)) {
//     console.log("it is really NaN");
// } else {
//     console.log("I'm a normal number");
// }


// switch (num) {
// 	case num < 49:
// 		console.log("wrong");
// 		break;
// 	case num > 100:
// 		console.log("too much");
// 		break;
// 	case num = 50:
// 		console.log("right");
// 		break;
// 	default:
// 		console.log("nothing");
// }

// let num = 51;
// // while (num <= 55) {
// // 	console.log(num);
// // 	num++;
// // }

// // do {
// // 	console.log(num);
// // 	num++;
// // }
// // while (num <= 55);

// for (; num < 55; num++) {
// 	console.log(num);
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

	// for (let i = 0; i < 3; i++) {
	// 	console.log(`i= ${i}`);

	// 	for (let j = 0; j < 3; j++) {
	// 		console.log(`j= ${j}`);
	
	// 	console.log(`Значение на координатах (${i},${j})`, '');
	
	// 	// Что если мы захотим перейти к Готово (ниже) прямо отсюда?
	
	// 	}
	// }
	
	// console.log('Готово!');

// let i = 0;
// while (++i < 5) console.log( i );

// for (let i = 0; i < 5; ++i) console.log( i );

// let a = 1;
// console.log(++a);
// console.log(a);

// for (let i = 0; i < 3; i++) {
// 	console.log(`number ${i}!`);
// }

// let a = 0;
// while (a < 3) {
// 	console.log(`number ${a}!`);
// 	a++;
// }

// for (; ; ) {
// 	let num = +prompt("enter a number larger than 100");
// 	if (num != 100) {
// 		alert("it is not 100");
// 	} else {
// 		break;
// 	}
// }


// function calc(a, b) {
// 	// return (a + b);
// }

// console.log(calc(3, 4));

// console.log(typeof(true + false));
// console.log(4 + 5 + "px");

// function first() {
// 	setTimeout(function() {
// 		console.log(1);
// 	}, 5000 );
// }

// function second() {
// 	console.log(2);
// }

// first();
// second();

// let person = {
// 	name: "Misha",
// 	weight: 88,
// 	height: 182,
// 	sex: "male"
// }

// for (let i in person) {
// 	console.log(i + " " + person[i]);
// }

// console.log(person.name);

// let a = " \t \n 2" - 2; 
// console.log(a);
// console.log(typeof(a)); 

// let b = "1";
// console.log(typeof(b));
// console.log(+b);


	// let a = 2;
	// a++;
	// console.log(a);
	// // alert(a);

// let counter = 1;
// let a = counter++;

// console.log(counter);

// let a = (1 + 2, 3 + 4);
// console.log(a);

// let a = 1, b = 1;

// let c = ++a;
// let d = b++; 

// console.log(c);
// console.log(d);

// let a = 2;

// let x = 1 + (a *= 2);

// console.log(x);

// console.log(null === +"\n0\n");

// console.log(Number(null));

// let result = prompt("How old are you", "18");
// console.log(result);


// let age = prompt('Сколько вам лет?', '');

// let accessAllowed = (age > 18) ?  false : true;

// alert(accessAllowed);

// let guess = prompt('What\'s the "официальное название" JavaScript?', '');

// if (guess == "ECMAScript") {
// 	console.log('That is true');
// } else {
// 	console.log('You don\'t know? “ECMAScript”!');
// };

// let guess = prompt("insert the number");

// if (guess > 0) {
// 	console.log(1);
// } else if (guess < 0) {
// 	console.log(-1);
// } else {
// 	console.log(0);
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// 
// let message = (login == 'Сотрудник') ? message = 'Привет' : (login == 'Директор') ? message = 'Здравствуйте'

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// console.log('ggfgdgfgd' || true);

// console.log(Boolean(alert(1)));


// if (age <= 14 && age <= 90) {

// }

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// 

// let guess = prompt("Who's there?");
// if (guess == "admin") {
// 	alert("Hello!");
// } else if (guess == null || " ") {
// 	alert("cancelled");
// } else {
// 	alert("I dont know you!");
// };

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// outer: for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++) {
  
// 	  let input = prompt(`Значение на координатах (${i},${j})`, '');
// 	  if (!input) {break outer};
  
// 	}
// 	console.log(i);
// }

//   alert('Готово!');



// let i = 0;
// while (++i < 5) {
// 	console.log( i );
// }
// let i = 0;
// while (i++ < 5) {
// 	console.log( i );
// }



// let a = 0;
// console.log(a++);
// console.log(a);

// // for (let i = 0; i < 5; i++) console.log(i);

// // for (let i = 2; i <= 10; i++) {
// // 	if (i % 2 == 0) {
// // 		console.log(i);
// // 	}
// // }

// for (let i = 0; i < 3; i++) {
// 	console.log( `number ${i}!` );
//  }

// let i = 0;
// while (++i < 3) {
// 	console.log( `number ${i}!` );
// }

// for (; guess < 100;) {
// 	guess = +prompt("input a number larger than 100");
// }

// let guess = 0;
// while (guess < 100) {
// 	guess = +prompt("input a number larger than 100");
// }

// for (;;) {
// 	let guess =  prompt("input a number larger than 100");
// 	console.log(guess);
// 	if (guess == null || guess > 100) break;
// 	// if (guess >= 100 && guess == null) break;
// }


// switch (browser) {
// 	case 'Edge':
// 	  alert( "You've got the Edge!" );
// 	  break;
 
// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 	  alert( 'Okay we support these browsers too' );
// 	  break;
 
// 	default:
// 	  alert( 'We hope that this page looks ok!' );
// }

// if (browser == 'Edge') {
// 	alert( "You've got the Edge!" );
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
// 	alert( 'Okay we support these browsers too' );
// } else {
// 	alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// const number = +prompt('Введите число между 0 и 3', '');

// switch(number) {
// 	case 0:
// 		alert('Вы ввели число 0');
// 		break;
// 	case 1:
// 		alert('Вы ввели число 1');
// 		break;
// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3');
// 		break;
// }