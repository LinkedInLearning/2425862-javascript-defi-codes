let nbreLigne = 10;
let nbreEtoile = 1;
let nbreEspace = nbreLigne -1;

for (let ligne = 0; ligne < nbreLigne; ligne++) {
    let toLog = "";

    for (let colonne = 0; colonne < nbreEspace; colonne++) {
        toLog += " ";
    }

    for (let colonne = 0; colonne < nbreEtoile; colonne++) {
        toLog += "*";
    }

    console.log(toLog);
    nbreEtoile += 2;
    nbreEspace -- ;
    
}