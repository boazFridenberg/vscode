const exampleArr = [3, 12, 4, 8, 16];

const reminder = (arr, n)=> arr.map(x => x % 2);
console.log(exampleArr, reminder(exampleArr, 5));

const greaterThan = (arr, n)=> arr.map(x => x > 2);
console.log(exampleArr, greaterThan(exampleArr, 5));

const greaterThanFilter = (arr, n)=> arr.filter(x => x > n);
console.log(exampleArr, greaterThanFilter(exampleArr, 5));

const filterRange = (arr, n, m)=> arr.filter(x => x > 2 && x < m).map(x => x * 2);
console.log(exampleArr, filterRange(exampleArr, 5, 15));

const sortByReminder = (arr, n)=> arr.sort((a, b) => a % n - b % n);
console.log(exampleArr, sortByReminder(exampleArr, 5));

const power = arr => arr.reduce((result, x)=>result * x, 1);
console.log(exampleArr, power(exampleArr));

const myObj = {a: 5, b: 8};
console.log(myObj.a);
console.log(myObj['a']);
console.log(myObj == {a:5, b:8});
