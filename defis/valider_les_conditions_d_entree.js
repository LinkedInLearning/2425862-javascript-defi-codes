let ageMin = 16;
function validerEntree(age, ville){
    if(age >= ageMin && (ville >= 69001 && ville <= 69009)){
        console.log("Vous pouvez vous inscrire à la session de formation");
    }else if (age < ageMin && (ville < 69001 ||ville > 69009)){
        console.log("Vous ne remplissez pas les conditions pour vous inscrire à la session de formation");
    }else if (age < ageMin){
        console.log("Vous n'avez pas l'âge requis pour vous inscrire à la session de formation");
    }else{
        console.log("Contactez votre conseiller pour trouver une autre formation");
    }
}

validerEntree(17, 69009) ;