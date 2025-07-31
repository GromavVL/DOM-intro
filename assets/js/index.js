
const btn = document.getElementById('clickBtn');

const clickHandler = function(event) {
    console.log('Button war clicked');
}

btn.onclick = clickHandler;

btn.onclick = null;

//------------------------------------------
const logBtn = document.getElementById('loginBtn');

function log(e) {
    alert('log in progress');
}

logBtn.addEventListener('click', log);

logBtn.removeEventListener('click', log);


function logMouse(event) {
    console.log('Click me');
}

logBtn.addEventListener('mousemove', logMouse)


const user = document.getElementById('userBtn');

function userLog(event) {
    console.log('Hello World!');
}

user.onclick = userLog;