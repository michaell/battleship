// // let i = 0;
// // while (i < 2) {
// // 	i++;
// // 	let a = prompt("Enter the neccessary expense item for this month", ''),
// // 		b = +prompt("How much will it be?", '');	
// // 	if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// // 		console.log("done");
// // 	} else {
// // 		i--;
// // 	}
// // }

// // let i = 0;
// // do {
// // 	i++;
// // 	let a = prompt("Enter the neccessary expense item for this month", ''),
// // 		b = +prompt("How much will it be?", '');
	
// // 	if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// // 		appData.expenses[a] = b;
// // 	} else {
// // 		i--;
// // 	}	
// // }
// // while (i < 2);

// let money,
// 	time;

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: true,
// 	optionalExpenses: {}
// };


// function start() {
// 	money = +prompt("What is your mounthly budget?", '');
// 	time = prompt("Enter a date in YYYY-MM-DD format", '');

// 	while (isNaN(money) || money == "" || money == null) {
// 		money = +prompt("What is your mounthly budget?", '');
// 	}

// 	appData.budget = money;
// };



// function chooseExpenses() {
// 	for (let i = 0; i < 2; i++) {
// 		let a = prompt("Enter the neccessary expense item for this month", ''),
// 			b = +prompt("How much will it be?", '');
		
// 		if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 			appData.expenses[a] = b;
// 		} else {
// 			i--;
// 		}
// 	}
// };


// function checkSavings() {
// 	if (appData.savings) {
// 		let save = +prompt("How much savings do you have?"),
// 			percent = +prompt("What is tha percent?");

// 	appData.monthIncome = save/100/12*percent;
// 	console.log(`You will earn ${(appData.monthIncome).toFixed()}`);
// 	}
// };


// function detectDayBudget() {
// 	console.log(appData.moneyPerDay = (appData.budget / 30).toFixed());
// }


// function detectLevel() {
// 	if (appData.moneyPerDay < 100) {
// 		console.log("You have minimum dayly income");
// 	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// 		console.log("You yave average daily income");
// 	} else if (appData.moneyPerDay > 2000) {
// 		console.log("You have high dayly income");
// 	} else {
// 		console.log("Smth went wrong");
// 	}
// };


// function chooseOptExpenses() {
// 	for (let i = 0; i < 3; i++) {
// 		let a = prompt("Enter the unneccessary expense item for this month", ''),
// 			b = +prompt("How much will it be?", '');
		
// 		if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 			appData.optionalExpenses[a] = b;
// 		} else {
// 			i--;
// 		}
// 	}
// }


// start();
// chooseExpenses();
// detectDayBudget();
// checkSavings();
// detectLevel();
// chooseOptExpenses();
