const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const mergedArray = [...arr1,...arr2,...arr3];

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

const rows = arr1.length;
const column = arr1[0].length;
constisSquare = rows === columns;
const sum = arr => arr.reduce((sum, x) => sum + x);

function Map(arr, callback){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        const mappedElement = callback(element, i);
        result.push(mappedElement);
    }
    return result;
}

function otherDiagonal(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[arr.length - 1 - i][i]);
    }
    return result;
    
}

function isMagic(arr){
    const dimenstion = arr.length;
    const s = sum(arr[0]);
    for (let i = 0; i < dimenstion; i++){
        if (sum(arr[i])!== s) return false;
    }
    for (let i = 0; i < dimenstion; i++){
        if (sum(columns(arr, i))!== s) return false;
    }
    if (sum(diagonal(arr))!== s || sum(otherDiagonal(arr)) != s) return false;
}
console.log(isMagic(arr));

function diagonal(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i][i]);
    }
    return result;
}
console.log(diagonal(arr));

function columns(arr, n){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i][n]);
    }
    return result;
}
const columnMap = (arr, n) => arr.map(row => row[n]);
console.log(columns(arr, 0));
