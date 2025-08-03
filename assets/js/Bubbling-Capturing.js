const body = document.body;
const section = document.querySelector('section');
const button = document.querySelector('button');

let clickCount = 0;

// Обробник кліку по body
const handleBodyClick = () => {
    clickCount++;
    console.log('clickCount:', clickCount);
};

// Обробник кліку по кнопці (зупиняє спливання)
const handleButtonClick = (event) => {
    event.stopPropagation();
};

// Обробник кліку по секції
const handleSectionClick = function () {
    this.style.backgroundColor = 'red';
};

body.addEventListener('click', handleBodyClick);
button.addEventListener('click', handleButtonClick);