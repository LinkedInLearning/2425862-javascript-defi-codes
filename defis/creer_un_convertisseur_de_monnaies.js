

let eurosInput = document.querySelector('.euros');
let dollarsInput = document.querySelector('.dollars');
let resultat = document.querySelector('.resultat');

let dollars = 1.08;
let euros = 0.92;

eurosInput.addEventListener('change', function() {
    dollarsInput.value = "";
    resultat.textContent = event.target.value*dollars+"$";
});

dollarsInput.addEventListener('change', function() {
    eurosInput.value = "";
    resultat.textContent = event.target.value*euros+"$";
});
