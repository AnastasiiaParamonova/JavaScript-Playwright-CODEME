// // Class definition (the "recipe" for a cake)
// class Cake {
//   constructor(flavor, frosting) {
//     this.flavor = flavor;
//     this.frosting = frosting;
//   }

//   bake() {
//     console.log(`Baking a ${this.flavor} cake with ${this.frosting} frosting.`);
//   }

//   serve() {
//     console.log(`Serving a delicious ${this.flavor} cake with ${this.frosting}! `);
//   }
// }

// // Creating objects (actual cakes)
// const cake1 = new Cake("chocolate", "strawberry");
// const cake2 = new Cake("vanilla", "chocolate");

// Using class methods
// cake1.bake();  // Baking a chocolate cake with strawberry frosting.
// cake1.serve(); // Serving a delicious chocolate cake with strawberry frosting! 

// cake2.bake();  // Baking a vanilla cake with chocolate frosting.
// cake2.serve(); // Serving a delicious vanilla cake with chocolate frosting! 


// Wzorując się na przykładzie z ciastem, utwórz klasę „Person” (osoba). Niech osoba posiada pole imię, nazwisko, wiek oraz metodę,
// która będzie służyła do przedstawiania się. 


class Peron {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} ${this.surname} and I am ${this.age} years old. `);
  }
}

const person1 = new Peron("John", "Ray", 30);
person1.introduce(); 


// 1. Stwórz 3 obiekty samochód (car) i przypisz każdemu pola: brand, model, year. Niech rok produkcji będzie unikalny dla każdego auta.
// 2. Umieść obiekty w tablicy.
// 3. Dla chętnych: przy pomocy funkcji .map przeiteruj po tablicy i wyświetl wszystkie informacje (brand, model, year) dla każdego
// samochodu
// 4. Dla chętnych: Przy pomocy funkcji .filter wyświetl informacje tylko dla dwóch najmłodszych aut. 

const car1 = {
  brand : "Mazda",
  model : "3",
  year : 2021
}

const car2 = {
  brand : "Toyota",
  model : "Corolla",
  year : 2019
}

const car3 = {
  brand : "Porsche",
  model : "911",
  year : 2024
}

const cars = [car1, car2, car3];

console.log(cars)

cars.map(cars => {
  console.log(`Brand: ${cars.brand}, Model: ${cars.model}, Year: ${cars.year}`);
})

cars.filter(car => car.year >= 2020)