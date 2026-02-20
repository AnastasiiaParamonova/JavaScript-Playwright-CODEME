
console.log("------------------");

const isUserLoggedIn = false;
console.log(isUserLoggedIn);

if (isUserLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in") 
}

console.log("------------------");

// Napisz program w JavaScript, który na podstawie liczby punktów (0–100) przyznaje ocenę uczniowi według poniższych zasad:
// • Jeśli punktów jest 90 lub więcej, wypisz: Ocena: 5 (celujący)
// • Jeśli punktów jest między 70 a 89, wypisz: Ocena: 4 (dobry)
// • Jeśli punktów jest między 50 a 69, wypisz: Ocena: 3 (dostateczny)
// • W przeciwnym razie wypisz: Ocena: 2 (niedostateczny)

const point = 50;

if (point >= 90) {
    console.log("Ocena: 5 (celujący)");
} else if (point >= 70 && point <= 89) {
    console.log("Ocena: 4 (dobry)");
} else if (point >= 50 && point <= 69) {
    console.log("Ocena: 3 (dostateczny)");
} else {
    console.log("Ocena: 2 (niedostateczny)");
}
console.log("------------------");

// 1. Stwórz tablice names z kilkoma imionami.
// 2. Dodaj do tablicy imię „David”. Użyj metody push() na tablicy names.
// 3. Utwórz pustą tablicę.
// 4. Posortuj tablicę names. Użyj metody sort() na tablicy
// 5. Sprawdź liczbę elementów w tablicy
// 6. Sprawdź czy tablica zawiera element „Adam” i czy zawiera element „David”

// 1
console.log("Tablica names z kilkoma imionami");
const names = ["Adam", "Rosy", "John"];
console.log(names);
// 2
console.log("Dodaj do tablicy imię 'David'");
names.push("David");
console.log(names);
// 3
console.log("Pusta tablica");
const empty = [];
console.log(empty);
// 4
console.log("Posortuj tablicę names");
names.sort();
console.log(names);
// 5
console.log(`Liczba elementów w tablicy names: ${names.length}`);
// 6
console.log(`Czy tablica zawiera "Adam": ${names.includes("Adam")}`);
console.log(`Czy tablica zawiera "David": ${names.includes("David")}`);



// 1.Bazując na pętli powyżej, wyświetl liczby od 1 do 10
// 2. Wypisz liczby parzyste od 0 do 20.
// 3. Wypisz 10 razy tekst „Hello, world!”

// 1
console.log("Liczby od 1 do 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
console.log("Liczby parzyste od 0 do 20");
for (let i = 0; i <= 20; i+=2) {
        console.log(i);     
}
//3
console.log("Tekst 'Hello, world!' 10 razy");
for (let i = 1; i < 11; i++) {
    console.log(i +". Hello, world!");
}   


