// Zrób własny przykład dziedziczenia

class Zoo {
    constructor(name,location){
        this.name = name;
        this.locaton = location;
    }

    welcome() {
        console.log(`Welcome to ${this.name} located in ${this.locaton}`);
    }
}

class Animals extends Zoo {
    constructor(name, location, species){
        super(name, location);
        this.species = species;
    }

    speciesInfo() {
        console.log(`In our zoo we have ${this.species}`);
    } 
}

const animals1 = new Animals("Wroclaw Zoo", "Wroclaw", "tigers, lions, bears");
animals1.welcome();
animals1.speciesInfo();





