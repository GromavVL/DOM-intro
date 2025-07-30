console.log(document);

console.log(document.body);

console.log(document.head);

const elements = document.getElementById('root');
console.log(elements);
console.dir(elements);

const divEl = document.getElementsByTagName('div');
console.log('divEl :>> ', divEl);

const divroot2 = divEl[0];

const divElClass = document.getElementsByClassName('content');
console.log(divElClass);

const rootEl3 = document.querySelector('#root');
console.log('rootEl3 :>> ', rootEl3);

const divElemant = document.querySelectorAll('div');
console.log('divElemant :>> ', divElemant);

const divEl5 = document.querySelector('.content');
console.log('divEl5 :>> ', divEl5);