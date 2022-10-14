/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma. */


const userName = prompt("Inserisci una parola");
const lowerUserName = userName.toLowerCase();

/**
 * Description
 * @param {string} lowerUserName
 * @returns {string}
 */

function checkPalindrome(lowerUserName) {
//CONVERTIAMO LA STRINGA IN ARRAY    
    const arrayName = lowerUserName.split("");
    console.log(arrayName);
//INVERTIAMO LE LETTERE DENTRO L'ARRAY    
    const reverseArreyName = arrayName.reverse("");
    console.log(reverseArreyName);
//RICONVERTIAMO L'ARRAY IN STRINGA    
    const reverseName = reverseArreyName.join("");
    console.log(reverseName);

//CONFRONTIAMO GLI OPPOSTI PER VEDERE SE COINCIDONO     
    if(lowerUserName === reverseName){
        console.log("La tua parola è palindroma");
    } else {
        console.log("La tua parola non è palindroma");
    }
}
checkPalindrome(lowerUserName);