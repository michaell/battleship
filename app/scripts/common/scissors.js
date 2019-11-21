// const getUserChoice = userInput => {
  
// userInput = userInput.toLowerCase();
    
//     switch (userInput) {
//       case 'rock':
//         return userInput;
//       case 'paper':
//         return userInput;
//       case 'scissors':
//         return userInput;
//     case 'bomb':
//         return userInput;
//       default:
//        console.log('Wrong input!') 
//     }; 
// }
  
// function getComputerChoice() {
    
//     let randomNumber = Math.floor(Math.random() * 3);

//     switch (randomNumber) {
//         case 0:
//             // console.log(`${randomNumber} - rock`);
//             return 'rock';
//         case 1:
//             // console.log(`${randomNumber} - paper`);
//             return 'paper';
//         case 2:
//             // console.log(`${randomNumber} - scissors`);
//             return 'scissors';
//     }
// }

// function determineWinner(userChoice, computerChoice) {
//   if (userChoice === computerChoice) {

//       console.log(`user choice - ${userChoice}`);
//       console.log(`computer choice - ${computerChoice}`);

//       return 'Game is a tie';
//     } else if (userChoice === 'rock') {
//         if (computerChoice === 'paper') {
//             console.log(`user choice - ${userChoice}`);
//             console.log(`computer choice - ${computerChoice}`);
//             return 'User won!';
//         } else {
//             console.log(`user choice - ${userChoice}`);
//             console.log(`computer choice - ${computerChoice}`);
//             return 'Computer won';
//         }
//     } else if (userChoice === 'paper') {
//         if (computerChoice === 'scissors') {
//             console.log(`user choice - ${userChoice}`);
//             console.log(`computer choice - ${computerChoice}`);
//             return 'Computer won';
//         } else {
//             console.log(`user choice - ${userChoice}`);
//             console.log(`computer choice - ${computerChoice}`);
//             return 'User won';
//         }
//     } else if (userChoice === 'scissors') {
//         if (computerChoice === 'rock') {
//             console.log(`user choice - ${userChoice}`);
//             console.log(`computer choice - ${computerChoice}`);
//             return 'Computer won';
//         } else {
//             console.log(`user choice - ${userChoice}`);
//             console.log(`computer choice - ${computerChoice}`);
//             return 'User won';
//         }
//     } else if (userChoice === 'bomb') {
//         console.log(`user choice - ${userChoice}`);
//         console.log(`computer choice - ${computerChoice}`);
//         return 'Total win of the user';
//     }
// }

// // console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
    

// function playGame() {
//     // let userChoice = getUserChoice('scissors');
//     // let computerChoice = getComputerChoice();
//     // console.log(userChoice);
//     // console.log(computerChoice);

//     // determineWinner(getUserChoice('rock'), getComputerChoice());
//     // console.log(determineWinner());
//     // determineWinner('rock', 'rock');
//     // console.log(determineWinner());



    
//     console.log(determineWinner(getUserChoice('BOMB'), getComputerChoice()));
// }

// playGame();


// // console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));



  
