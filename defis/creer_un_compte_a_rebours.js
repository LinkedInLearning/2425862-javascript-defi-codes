
let h2 = document.querySelector("h2");
let btnCinq = document.querySelector(".cinq");
let btnVingt = document.querySelector(".vingt");
let btnTrente = document.querySelector(".trente");
let start = document.querySelector(".start");

h2.innerHTML = 0;

btnCinq.addEventListener("click", function() {
    h2.innerHTML = 5;
});

btnVingt.addEventListener("click", function() {
    h2.innerHTML = 20;
});

btnTrente.addEventListener("click", function() {
    h2.innerHTML = 30;
});

start.addEventListener("click", rebours);

function rebours() {
    setInterval(() =>{
        if (h2.innerHTML > 0) {
            h2.innerHTML --;
        } else {
            h2.innerHTML == 0;
        }
    }, 1000)
};