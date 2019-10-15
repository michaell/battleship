let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
console.log(randomLoc);
let location2 = randomLoc + 1;
let location3 = randomLoc + 2;

let alreadyHit1 = false;
let alreadyHit2 = false;
let alreadyHit3 = false;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
    guess = prompt("Enter a number 0-6");
    if (guess < 0 || guess > 6) {
        alert("Enter a valid value");
    } else {
        guesses = guesses + 1;
            if (guess == location1) {
                if (alreadyHit1 == true) {
                    alert("Already shoot there");
                } else {
                    hits = hits + 1;
                    alreadyHit1 = true;
                    alert("HIT");
                    alert("it was shoot number" + guesses);
                    if (hits == 3) {
                        isSunk = true;
                        alert("You've sunk my battleship");
                    }
                } 
            } else if (guess == location2) {
                if (alreadyHit2 == true) {
                    alert("Already shoot there");
                } else {
                    hits = hits + 1;
                    alreadyHit2 = true;
                    alert("HIT");
                    alert("it was shoot number" + guesses);
                    if (hits == 3) {
                        isSunk = true;
                        alert("You've sunk my battleship");
                    }
                }
            } else if (guess == location3) {
                if (alreadyHit3 == true) {
                    alert("Already shoot there");
                } else {
                    hits = hits + 1;
                    alreadyHit3 = true;
                    alert("HIT");
                    alert("it was shoot number" + guesses);
                    if (hits == 3) {
                        isSunk = true;
                        alert("You've sunk my battleship");
                    }
                }   
            } else {
                alert("Miss");
                alert("it was shoot number" + guesses);
            }             
        }
    }

let stats = "You took " + guesses + " guesses to sink the battleship, " + "accuracy was " + Math.floor((3/guesses)*100) + "%";
alert(stats);


