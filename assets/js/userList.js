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

const userImg = document.createElement('img');
userImg.src = user.photoSrc;
userImg.alt = `${user.firstName}, ${user.lastName}`;
userImg.classList.add('userImg');
userCard.append(userImg);

const userDiv = document.createElement('div');
userDiv.classList.add('userInfo');
userCard.append(userDiv);

const fullName = document.createElement('p');
fullName.classList.add('userName');
fullName.textContent = `${user.firstName} ${user.lastName}`;
userDiv.append(fullName)

const userAge = document.createElement('span');
userAge.classList.add('userAge');
userAge.textContent = user.age;
userDiv.append(userAge);

const icon = document.createElement('i');
icon.classList.add('fa-solid');
icon.classList.add('fa-trash');
icon.classList.add('trash');
userCard.append(icon);

function deleteUser(e) {
    e.target.closest('.userCard').remove();
}

icon.onclick = deleteUser;
userDiv.append(icon);