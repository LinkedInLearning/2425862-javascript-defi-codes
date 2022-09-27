
let texteAccueil = document.querySelector(".texteAccueil");
let a = document.querySelector("a");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let monEmail = "paul@test.com";
let monMotDePasse = "kiwi";


a.addEventListener("click", function() {
    let emailValue = email.value;
    let passwordValue = password.value;

    if (monMotDePasse === passwordValue && monEmail === passwordValue) {
        texteAccueil.innerHTML = "Vous êtes connecté"; 
    }else if(emailValue == "" || passwordValue == "" ) {
        texteAccueil.innerHTML = "Veuillez remplir tous les champs"; 
    } else {
        
    }
    let ageValue = age.value;
    texteAccueil.innerHTML = `Bonjour, je m'apelle ${nomValue} ${prenomValue} et j'ai ${ageValue} ans`;
});