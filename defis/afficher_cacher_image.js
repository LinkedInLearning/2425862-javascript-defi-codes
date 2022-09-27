
let img = document.querySelector("img");
let button = document.querySelector("button");
let affiche = false;

button.addEventListener("click", function() {

    if(!affiche){
        img.style.visibility = "hidden";
        button.innerHTML = "Afficher";
        affiche = true;
    }else{
        img.style.visibility = "visible";
        button.innerHTML = "Cacher";
        affiche = false;
    }
});