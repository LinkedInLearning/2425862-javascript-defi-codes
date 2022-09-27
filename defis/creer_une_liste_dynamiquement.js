let ulFruits = document.querySelector('.fruits');
let fruits = ["Kiwi", "Mangue", "Raisins", "Pomme", "Banane"];

for (const fruit of fruits) {
    let li = document.createElement('li');
    li.textContent = fruit;
    ulFruits.appendChild(li);
}