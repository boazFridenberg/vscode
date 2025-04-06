const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const sign = document.querySelector('#sign');
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const check = document.querySelector('#check');

const randTwoDigits = () => Math.floor(Math.random() * 90) + 10;

const num1 = randTwoDigits();
const num2 = randTwoDigits();
const operatorIsMultiplication = Math.random() < 0.5;

number1.innerHTML = num1;
number2.innerHTML = num2;
sign.innerHTML = operatorIsMultiplication ? '*' : '+';

check.addEventListener('click', function() {
    let res = operatorIsMultiplication ? num1 * num2 : num1 + num2;
    input.value == res ? result.innerHTML = 'Correct!' : result.innerHTML = 'Wrong!';
});