const box = document.getElementById('box');
const button = document.getElementById('button');
const text = document.getElementById('text');

console.log(box);

text.addEventListener('change', function() {
    box.style.backgroundColor = text.value;
});

button.addEventListener('click', function() {
    const newBox = document.createElement('div');
    const color = '#' + Math.floor(Math.random()*(16*6)).toString(16).padStart(6, '0');
    newBox.style.backgroundColor = color;
    newBox.style.width = '100px';
    newBox.style.height = '100px';
    newBox.style.margin = 'auto';
    document.body.insertBefore(newBox, box);
});



//console.log(box.innerHTML);
//box.innerHTML = '<button>button</button>';
//console.log(box.outerHTML);
/*
box.style.backgroundColor ='rgb(255, 0, 255)';
const newBox = document.createElement('div');
newBox.style.backgroundColor = 'blue';
newBox.style.width = '100px';
newBox.style.height = '100px';
newBox.innerHTML = 'text';
document.body.insertBefore(newBox, box);
*/
