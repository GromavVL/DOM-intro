
const body = document.body;
const section = document.querySelector('section');
const button = document.querySelector('button');

// function btnClickHendler(event) {
//     console.log('event :>> ', event);
//     this.style.backgroundColor = 'red';
// }

// function f(e) {
//     this.style.backgroundColor = 'green';
// }

// button.addEventListener('click', f);
// section.addEventListener('click', btnClickHendler);

let clickCount = 0;

body.addEventListener('click', () => {
    clickCount++;
    console.log('clickCount :>> ', clickCount);
})


button.addEventListener('click', e => {
    e.stopPropagation();
})