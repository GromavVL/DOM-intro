'use strict';

// setTimeout
// setInterval

function timeoutAction() {
    console.log('Hello');
}

console.log('Before timeout');
setTimeout(timeoutAction, 10000);

let i = 0;

function intervalHendler() {
    if (i === 5) {
        return clearInterval(setIntervald);
    }
    console.log(++i);
}

const setIntervald = setInterval(intervalHendler, 1000);

const btn = document.querySelector('button');

// function deleteBtn(e) {
//     btn.remove();
// }

function newColorbtn() {
    btn.style.backgroundColor = 'green';
}

// setInterval(deleteBtn, 5000);

btn.addEventListener('click', () => {setInterval(newColorbtn, 2000)});