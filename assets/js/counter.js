// View - *** - Model
const counterEl = document.getElementById('counter');
const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');

// Model
let counter = 0;
counterEl.textContent = counter;
function decCount(e) {
    counter--;
    counterEl.textContent = counter;
}

function incCount(e) {
    counter++;
    counterEl.textContent = counter;
}
incBtn.addEventListener('click', incCount);
decBtn.addEventListener('click', decCount);