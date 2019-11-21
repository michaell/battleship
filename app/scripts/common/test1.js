'use strict'
// // // 3
// // let generateTarget = () => {
// //     return Math.floor(Math.random()*10);
// // }

// // //4
// // let compareGuesses = (userGuess, computerGuess, target) => {
// //     let userDiff = Math.abs(target - userGuess);
// //     let compDiff = Math.abs(target - computerGuess);

// //     if (userDiff < compDiff) {
// //         return true;
// //     } else if (userDiff > compDiff) {
// //         return false;
// //     } else if (userDiff === compDiff) {
// //         return true;
// //     }
// // }

// // //5
// // let updateScore = (winner) => {
// //     let humanScore = 0;
// //     let computerScore = 0;

// //     if (winner === 'human') {
// //         humanScore++;
// //         // console.log(`Human Score is ${humanScore}`);
// //     } else if (winner === 'computer') {
// //         computerScore++;
// //         // console.log(`Computer Score is ${computerScore}`);
// //     }
// // }

// // //6
// // let advanceRound = () => {
// //     let currentRoundNumber = currentRoundNumber++;
// // }



// // {
// //     let a = 10;
// // }
// // console.log(a);

// // {
// //     var b = 20;
// // }
// // console.log(b);

// // let num = 50;

// // const logNum = () => {
// //   let num = 100; // Take note of this line of code
// //   console.log(num);
// // };

// // logNum(); // Prints 100
// // console.log(num); // Prints 100

// const getTrainingDays = event => {

//     if (event === 'Marathon') {
//       let days = 50;
//     } else if (event === 'Triathlon') {
//       let days = 100;
//     } else if (event === 'Pentathlon') {
//       let days = 200;
//     }
  
//     return days;
// };

// getTrainingDays('Marathon');

// // let f = () => {
// //     let a =50;
// //     console.log(a);
// // }

// // f();



// // The scope of `random` is too loose 
// const random = Math.floor(Math.random() * 3);

// const getRandEvent = () => {
//   if (random === 0) {
//     return 'Marathon';
//   } else if (random === 1) {
//     return 'Triathlon';
//   } else if (random === 2) {
//     return 'Pentathlon';
//   }
// };

// // The scope of `days` is too tight 
// const getTrainingDays = event => {
//   let days;
//   if (event === 'Marathon') {
//     days = 50;
//   } else if (event === 'Triathlon') {
//     days = 100;
//   } else if (event === 'Pentathlon') {
//     days = 200;
//   }

//   return days;
// };

// // The scope of `name` is too tight 
// const logEvent = event => {
//   const name = 'Nala';
//   console.log(`${name}'s event is: ${event}`);
// };

// const logTime = days => {
//   const name = 'Nala';
//   console.log(`${name}'s time to train is: ${days} days`);
// };


// // 1 Создаем один из 3 ивентов
// const event = getRandEvent();

// // 2 Полученная строка передается во 2-ю функцию и получаем количество дней
// const days = getTrainingDays(event);
// // Define a `name` variable. Use it as an argument after updating logEvent and logTime 


// // 3 
// logEvent(event);
// logTime(days);

// const event2 = getRandEvent();
// const days2 = getTrainingDays(event2);
// const name2 = 'Warren';

// logEvent(name2, event2);
// logTime(name2, days2);

// const list = ['apples', 'oranges', 'bananas', 'fruits'];

// let a = list.slice(1, 3);
// console.log(a);
// console.log(list);


// const substitutesOfPaper = ['White Board', 'Black Board', 'LCD Writing Pad'];
// substitutesOfPaper.pop();
// console.log(substitutesOfPaper.pop());
// console.log(substitutesOfPaper);
// substitutesOfPaper.pop();
// console.log(substitutesOfPaper);

// console.log('100' < 'hello');


// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 2, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']


// let mon = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль']
// mon.splice(2, 3, 'ass');
// console.log(mon);


// let bobsFollowers = ['Ivan', 'Petr'];
// let tinasFollowers = ['Sidor', 'Petr', 'Sasha'];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   console.log(`i = ${i}`);
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     console.log(`j = ${j}`);
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//       console.log(`Mutual friend namber ${i} is ${bobsFollowers[i]}`);
//     }
//   }
// }

// console.log(mutualFollowers);


// let list1 = ['hot', 'bright', 'beautiful', 'handy'];
// let list2 = ['cold', 'dusk', 'ugly'];

// for (let i = 0; i < list1.length; i++) {
  
//     console.log(`At index ${[i]}: ${list1[i]} and ${list2[i]}`);
  
// }


// let countString = '';
// let i = 0;

// do {
//   countString = countString + i + ' ';
//   i++;
// } while (i < 5);

// console.log(countString);


// const firstMessage = 'I will print!';
// const secondMessage = 'I will not print!'; 

// // A do while with a stopping condition that evaluates to false
// do {
//  console.log(firstMessage)
// } while (true === false);

// // A while loop with a stopping condition that evaluates to false
// while (true === false){
//   console.log(secondMessage)
// };

// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// // Write your code below
// for (let i = 0; i < rapperArray.length; i++) {
//   console.log(rapperArray[i]);
//   if (rapperArray[i] === 'Notorious B.I.G.') {
//     break;
//   }
// }

// console.log('And if you don\'t know, now you know.');


// let list = ['abcc', 'df', 'ghk'];

// for (let i = list.length - 1; i >= 0; i--) {
//   let word = list[i];
//   let reverse = '';
//     for (let ir = word.length - 1; ir >=0; ir--) {
//       reverse = reverse + word[ir]; 
//     }
//     console.log(reverse);
// }

// console.log(0 > 0);

// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

// const letters = 'ABCxyz';

// for (let i = 0; i < 3; i++) {
//   for (let j = 3; j < 6; j++) {
//     console.log(`${letters[i]}${letters[j]}`)
//   }
// }

// for (let i = 0; i <=10; i+=2) {
//   console.log(i)
// }

// let i = 0;
// while(i <= 10) {
//   console.log(i)
//   i = i +2;
// }


// input = [1, 2, 3];
// for (let i = 0; i < input.length; i++) {
//   console.log(i);
// }

// let socialMedia = ['Instagram', 'Facebook', 'Twitter'];

// for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
// 	console.log(socialMedia[socialMediaIndex]);
// }


// let firstAttemot = 1;
// let secondAttemot = 3;

// function asad() {
//   return (firstAttemot === secondAttemot) ? firstAttemot : 'This function returned inconsistent results';
// }

// console.log(asad());



// const checkConsistentOutput = (func, val) => {
//   let firstAttemot = func(val);
//   let secondAttemot = func(val);

//   let result = (firstAttemot === secondAttemot) ? firstAttemot : 'This function returned inconsistent results';
// }

// let arr = ['a', 'b', 'c'];
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(groceryItem => console.log(`- ${groceryItem}`));

// const numbers = [1, 2, 3, 4, 5]; 

// const bigNumbers = numbers.map(u => {
//   return u * 2;
// });

// console.log(bigNumbers);

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// const secretMessage = animals.map(char => {
//   return char[0];
// });

// console.log(secretMessage);

// console.log(animals[0][0]);

// console.log([1, 2, 3, 4, 5].map(el => el * 5));

// const words = ['chairrrr', 'music', 'pillow', 'brick', 'pen', 'door']; 

// const shortWords = words.filter(function(word){
//   return word.length < 6;
// });
// console.log(shortWords);

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter(num => {
//   return randomNumbers.num < 250;
// });

// console.log(smallNumbers);



// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// // Call .filter() on favoriteWords below
// const longFavoriteWords = favoriteWords.filter(word => {
//   return word.length > 7;
// })

// console.log(longFavoriteWords);