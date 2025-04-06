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
        this.roll;
    }
    roll() {
        this.result = Math.ceil(Math.random() * 6);
    }
}

const dice = new Dice();
console.log(dice.result);
dice.roll();
console.log(dice.result);
