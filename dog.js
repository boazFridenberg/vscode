class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    bark() {
        console.log(`Woof!! i am ${this.name} and my color is ${this.color}.`);
    }
}
const d = new Dog('rex', 'brown');
const e = new Dog('Max', 'black');

d.bark();
e.bark();

class Dice {
    constructor() {
        this.result = Math.floor(Math.random() * 6) + 1;
    }
    roll() {
        console.log(`The dice rolled a ${dice.result}`);
    }
}

const dice = new Dice();
dice.roll();