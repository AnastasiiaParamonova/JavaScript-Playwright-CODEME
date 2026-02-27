// 1. Dodanie nowego elementu przy ładowaniu strony

  const newElement = document.createElement('p');
  newElement.textContent = 'To jest nowy paragraf.';
  document.body.appendChild(newElement);

// 2. Zmiana koloru paragrafu

const paragraph = document.querySelector('p')
paragraph.style.color = 'green';

// 3. Dla chętnych: pobierz element paragrafu nr 2
// Pobierz element przycisku i uruchom na nim metodę addEventListener na zdarzenie ‚click’.
// W metodzie addEventListener zmień kolor przycisku.

const secondParegraf = document.getElementById('paragraph-for-button');
const button = document.getElementById('changeColorBtn');

// button.addEventListener('click', () => {
//     secondParegraf.style.color = 'green';
// });


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } return color;
} 
button.addEventListener('click', () => {
    secondParegraf.style.color = getRandomColor();
}); 

button.addEventListener('click', () => {
    button.style.backgroundColor = "red";
});