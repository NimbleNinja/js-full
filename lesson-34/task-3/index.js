'use strict';

// algoritm
// send userData to server
// 1. get all userData from fields
// 2. create
// btn => listener => fetch => then(data => alert(data(obj)))
// => clear form fields = ''
// use validation (? how check fields)
// create validation func
// info => reportValidity()
// refactoring

// 1. validation => form.reportValidity()
// 2. submit form
// 3. send userData to server

const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/usersform';

const emailInput = document.querySelector('#email');
const userNameInput = document.querySelector('.form-input[name="name"]');
const userPasswordInput = document.querySelector('.form-input[name="password"]');
const submitBtnElem = document.querySelector('.submit-button');
const loginFormElem = document.querySelector('.login-form');

const isFormValidHandler = () => {
  const isFormValid = loginFormElem.reportValidity();
  const isSubmitBtnDisabled = submitBtnElem.disabled;

  if (isFormValid && isSubmitBtnDisabled) {
    submitBtnElem.disabled = !isSubmitBtnDisabled;
  }
};

const formInputsElems = document.querySelectorAll('.form-input');
for (let elem of formInputsElems) {
  elem.addEventListener('input', isFormValidHandler);
}

const sendUserData = user => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

const onSubmitHandler = event => {
  event.preventDefault();
  const userData = {
    email: emailInput.value,
    name: userNameInput.value,
    password: userPasswordInput.value,
  };

  sendUserData(userData)
    .then(data => data.json())
    .then(user => alert(JSON.stringify(user)))
    .then(() => {
      emailInput.value = '';
      userNameInput.value = '';
      userPasswordInput.value = '';
    });
};

loginFormElem.addEventListener('submit', onSubmitHandler);
