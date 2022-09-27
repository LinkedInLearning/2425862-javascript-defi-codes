
let chiffreMystere = Math.floor(Math.random() * 10);
let count = 0;
let success = false;
console.log(chiffreMystere);

while(!success) { 
    let saisieUser = prompt("Entrez un chiffre entre 0 et 9");
   
    
    if (saisieUser == chiffreMystere) {
        success = true;
        alert("Bravo, vous avez trouvé le chiffre mystère ");
    } else {
            alert("Desolé, ce n'est pas le bon chiffre");
            count += 1;
            if (count == 3) {
                alert("Vous avez perdu! Fin du jeu. ");
                break;
            }
    }
}