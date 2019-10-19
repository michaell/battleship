let money = +prompt("What is your mounthly budget?", ''),
	time = prompt("Enter a date in YYYY-MM-DD format", '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

// let i = 0;
// while (i < 2) {
// 	i++;
// 	console.log("beginning of the cycle, i = " + i);
// 	let a = prompt("Enter the neccessary expense item for this month", ''),
// 		b = +prompt("How much will it be?", '');	
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 		console.log("success, i = " + i);
// 	} else {
// 		i--;
// 		console.log("wrong, i = " + i);
// 	}
// }

// let i = 0;
// do {
// 	i++;
// 	console.log("beginning of the cycle, i = " + i);
// 	let a = prompt("Enter the neccessary expense item for this month", ''),
// 		b = +prompt("How much will it be?", '');
	
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		appData.expenses[a] = b;
// 		console.log(appData.expenses);
// 		console.log("success, i = " + i);
// 	} else {
// 		i--;
// 		console.log("wrong, i = " + i);
// 	}	
// }
// while (i < 2);

for (let i = 0; i < 2; i++) {
	console.log("beginning of the cycle, i = " + i);
	let a = prompt("Enter the neccessary expense item for this month", ''),
		b = +prompt("How much will it be?", '');
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
		appData.expenses[a] = b;
		console.log(appData.expenses);
		console.log("success, i = " + i);
	} else {
		i--;
		console.log("wrong, i = " + i);
	}	
};

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay < 100) {
	console.log("You have minimum dayly income");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("You yave average daily income");
} else if (appData.moneyPerDay > 2000) {
	console.log("You have high dayly income");
} else {
	console.log("Smth went wrong");
}

console.log("Dayly budget: " + appData.moneyPerDay);
console.log(appData);
  