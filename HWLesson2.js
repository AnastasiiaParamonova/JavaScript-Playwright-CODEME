// 1. Utwórz tablicę i pobierz z niej ostatni element
console.log("------------------");

const fruits = ["apple", "orange", "banana"];

const lastFruit = fruits[fruits.length - 1];
console.log(`Last fruit: ${lastFruit}`);

console.log("------------------");
// 2. Napisz program, który na podstawie podanej temperatury w stopniach Celsjusza wypisze odpowiedni komunikat:
// • Jeśli temperatura jest poniżej 0, wypisz: Mróz! Ubierz się ciepło!
// • Jeśli temperatura jest od 0 do 15 włącznie, wypisz: Chłodno. Przyda się kurtka.
// • W przeciwnym razie wypisz: Ciepło! Zostaw kurtkę w domu.

const temperatura = 18;

if (temperatura < 0) {
    console.log("Mróz! Ubierz się ciepło!")
} else if (temperatura >= 0 && temperatura <= 15) {
    console.log("Chłodno. Przyda się kurtka.")
} else {
    console.log("Ciepło! Zostaw kurtkę w domu.")
}

console.log("------------------");
// 3. Napisz pętlę, która wyświetli liczby nieparzyste do 20
console.log("Liczby nieparzyste do 20:");
for (let i = 1; i <= 20; i+=2) {
    console.log(i);
}
