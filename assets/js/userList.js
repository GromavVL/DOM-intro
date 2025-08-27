'use strict';

const user = {
    firstName: 'Test1',
    lastName: 'Testovych',
    age: 28,
    photoSrc:
        'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png',
}

const userCard = document.createElement('article');
userCard.classList.add('userCard');
document.body.append(userCard);

const userImg = createImg(user);
const userDiv = createUserInfo(user);
const icon = createTrashIcon();
userCard.append(icon, userImg, userDiv);

function deleteUser(e) {
    e.target.closest('.userCard').remove();
}
icon.onclick = deleteUser;
userCard.append(icon)


function createTrashIcon() {
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-trash');
    icon.classList.add('trash');
    return icon;
}

function createUserInfo({ firstName, lastName, age }) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('userInfo');

    const fullName = document.createElement('p');
    fullName.classList.add('userName');
    fullName.textContent = `${firstName} ${lastName}`;
    userDiv.append(fullName)

    const userAge = document.createElement('span');
    userAge.classList.add('userAge');
    userAge.textContent = age;
    userDiv.append(userAge);
    return userDiv;
}

function createImg({ photoSrc, firstName, lastName }) {
    const userImg = document.createElement('img');
    userImg.src = photoSrc;
    userImg.alt = `${firstName}, ${lastName}`;
    userImg.classList.add('userImg');
    return userImg;
}