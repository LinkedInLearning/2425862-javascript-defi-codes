let h2 = document.querySelector("h2");

let nbre = 0;
h2.innerHTML = nbre;
let plus = document.querySelector(".plus");
let moins = document.querySelector(".moins");

plus.addEventListener("click", function() {
    nbre++;
    h2.innerHTML = nbre;
})


moins.addEventListener("click", function() {
    if (nbre > 0) {
        nbre--;
        h2.innerHTML = nbre;
    }else{
        h2.innerHTML = 0;
    }
   
})