
function hefresh(str, n){
    let sum = '';
for (let i = 1; i <= n; i++) {
    sum = sum + str;
}
return sum
}
console.log(hefresh(' text', 17))

function hipoch(x){
    let n = x[0];
    x[0] = x[x.length -1];
    x[x.length -1] = n;
    return x;
}
console.log(hipoch([4, 8, 7, 9]));

function evenOrNot(x){
    if (x.length % 2){
        return x[(x.length-1) /2]
        
    } 
    let sum = 0;
        for (let i = 0; i < x.length; i++) {
        sum = sum + x[i];
        }
            return sum; 
}
let arr = [5, 6, 7, 8, 9, 9]
console.log(evenOrNot(arr));
arr.push(10);
arr.pop()
console.log(arr);
console.log(arr.slice(1, 2))
console.log(arr.slice(1))
const newarr1 = arr.reduce((sum, x) => sum + x, 0);
const newarr2 = arr.filter(x => x % 3 != 0); 
console.log(arr.map(x => x + 5))

function testMap(m, n)
{
   return m.map(x => x + n)
}
console.log(test(arr, 8))


