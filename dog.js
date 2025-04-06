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
        this.roll();
    }
    roll() {
        this.result = Math.ceil(Math.random() * 6);
    }
}

const dice = new Dice();
console.log(dice.result);
dice.roll();
console.log(dice.result);


  const dicePatterns = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  };

  function createDice(dieValue, elementId) {
    const dice = document.getElementById(elementId);
    dice.innerHTML = '';

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      if (dicePatterns[dieValue].includes(i)) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        cell.appendChild(dot);
      }
      dice.appendChild(cell);
    }
  }

  function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    createDice(die1, 'dice1');
    createDice(die2, 'dice2');
  }

  // טען קוביות בהתחלה
  rollDice();