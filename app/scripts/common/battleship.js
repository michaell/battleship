var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
console.log(randomLoc);
var location2 = randomLoc + 1;
var location3 = randomLoc + 2;

var alreadyHit1 = false;
var alreadyHit2 = false;
var alreadyHit3 = false;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

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

var stats = "You took " + guesses + " guesses to sink the battleship, " + "accuracy was " + Math.floor((3/guesses)*100) + "%";
alert(stats);


