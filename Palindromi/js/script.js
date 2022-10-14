const userName = prompt("Inserisci una parola");

/**
 * Description
 * @param {string} userName
 * @returns {string}
 */

function checkPalindrome(userName) {
//CONVERTIAMO LA STINGA IN ARRAY    
    const arrayName = userName.split("");
//INVERTIAMO LE LETTERE DENTRO L'ARRAY    
    const reverseArreyName = arrayName.reverse("");
//RICONVERTIAMO L'ARRAY IN STINGA    
    const reverseName = reverseArreyName.join("");

//CONFRONTIAMO GLI OPPOSTI PER VEDERE SE COINCIDONO     
    if(userName === reverseName){
        console.log("La tua parola è palindroma");
    } else {
        console.log("La tua parola non è palindroma");
    }
}
checkPalindrome(userName);