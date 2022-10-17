/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// FUNCTIONS
/**
 * Description
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/**
 * Description
 * @param {number} numberToCheck
 * @returns {string} "pari" se pari, "dispari" se dispari
 */
function isOddOrEven(numberToCheck){
    let result = "dispari"
    if(numberToCheck % 2 === 0){
        result = "pari"
    } else {
        result = "dispari"
    }
}


const userNum = parseInt(prompt("Dimmi un numero tra 1 e 5"));
console.log(userNum);
const userChoice = prompt("scegli pari o dispari");
console.log(userChoice);
const computerNum = parseInt(getRndInteger (1,5));

const resultSum = userNum + computerNum;
console.log(resultSum);
const resultCheck = isOddOrEven(resultSum);
console.log(resultCheck);

if (resultCheck === userChoice){
    alert("Hai vinto")
} else {
    alert ("Hai perso")
}
