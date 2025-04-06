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
    roll() {
        console.log(Math.floor(Math.random() * 6) + 1);
    }
}

const dice = new Dice();
dice.roll();