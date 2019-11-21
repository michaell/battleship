// const getSleepHours = day => {
//     switch (day) {
//         case 'Понедельник': 
//             return 8;
//         case 'Вторник': 
//             return 7;
//         case 'Среда': 
//             return 8;
//         case 'Четверг': 
//             return 7;
//         case 'Пятница': 
//             return 6;
//         case 'Суббота': 
//             return 10;
//         case 'Воскресенье': 
//             return 11;   
//     }
// }

// let getActualSleepHours = () => {
//     return getSleepHours('Понедельник') + 
//     getSleepHours('Вторник') +
//     getSleepHours('Среда') +
//     getSleepHours('Четверг') +
//     getSleepHours('Пятница') +
//     getSleepHours('Суббота') +
//     getSleepHours('Воскресенье');
// }

// let getIdealSleepHours = (idealHours) => {
//     return idealHours * 7;
// }

// let calculateSleepDebt = () => {
//     let actualSleepHours = getActualSleepHours();
//     let idealSleepHours = getIdealSleepHours(8);

//     if (actualSleepHours === idealSleepHours) {
//         console.log('perfect amount of sleep');
//     } else if (actualSleepHours > idealSleepHours) {
//         console.log('You slept too much');
//         console.log(`You slept extra ${actualSleepHours - idealSleepHours} hours`);
//     } else {
//         console.log('you should get some rest');
//         console.log(`You must sleep extra ${idealSleepHours - actualSleepHours} hours`);
//     }
// }

// calculateSleepDebt();