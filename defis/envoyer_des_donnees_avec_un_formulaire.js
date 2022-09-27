
let texteAccueil = document.querySelector(".texteAccueil");
let a = document.querySelector("a");
let nom = document.querySelector(".nom");
let prenom = document.querySelector(".prenom");
let age = document.querySelector(".age");


a.addEventListener("click", function() {
    let nomValue = nom.value;
    let prenomValue = prenom.value;
    let ageValue = age.value;
    texteAccueil.innerHTML = `Bonjour, je m'apelle ${nomValue} ${prenomValue} et j'ai ${ageValue} ans`;
});