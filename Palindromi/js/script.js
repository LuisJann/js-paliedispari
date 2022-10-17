/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma. */


const userName = prompt("Inserisci una parola che vuoi controllare").toLowerCase();

/**
 * Description
 * @param {string} UserName
 * @returns {string}
 */

function checkPalindrome(userName) {
//CONVERTIAMO LA STRINGA IN ARRAY    
    const arrayName = userName.split("");
    console.log(arrayName);
//INVERTIAMO LE LETTERE DENTRO L'ARRAY    
    const reverseArrayName = arrayName.reverse("");
    console.log(reverseArrayName);
//RICONVERTIAMO L'ARRAY IN STRINGA    
    const reverseName = reverseArrayName.join("");
    console.log(reverseName);

//CONFRONTIAMO GLI OPPOSTI PER VEDERE SE COINCIDONO     
    if(userName === reverseName){
        console.log("La tua parola è palindroma");
    } else {
        console.log("La tua parola non è palindroma");
    }
}
checkPalindrome(userName);