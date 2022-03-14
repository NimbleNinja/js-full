'use strict';

// algoritm
// get .name-form__btn, .user__avatar, .user__name, .user__location elements
// add listener to showBtn
// do request => use fetch(url).then(response => response.json())
// get userData = > getUserData
// process userData => processUserData

const showBtnElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');
const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const userRequest = userName => {
  const url = `https://api.github.com/users/${userName}`;

  return fetch(url).then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location;
};

const onShowBtnClick = () => {
  const inputValue = inputElem.value;

  userRequest(inputValue).then(userData => {
    renderUserData(userData);
  });
};

showBtnElem.addEventListener('click', onShowBtnClick);
