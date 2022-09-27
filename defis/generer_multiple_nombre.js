function multiple(num, longueur) {
    let tab = [];

    for (let i = 0; i < longueur; i++) {
        tab.push(num *(i + 1));
    }
    console.log(tab);
}

multiple(7, 5);

