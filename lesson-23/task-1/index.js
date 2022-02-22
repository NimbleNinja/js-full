'use strict';

// algoritm
// formData => Object.fromEntries(new FormData(formElem))
// submit buttom => preventDefault =>  alert {formData}
// validation =>
// *Required
// *Email
// func errorMessage(fieldName, errorText)
// input add listener 'input'

const inputEmailElem = document.querySelector('#email');
const inputPasswordElem = document.querySelector('#password');

const errorEmailElem = document.querySelector('.error-text_email');
const errorPasswordElem = document.querySelector('.error-text_password');

const formElem = document.querySelector('.login-form');

// input: string
// return: bollean
const isEmail = value =>
  value.includes('@') ? undefined : 'Should be an email';

// input: string
// return: boolean
const isRequired = value => (value ? undefined : 'Required');

const onEmailChange = event => {
  const errorText = [isEmail, isRequired]
    .map(validator => validator(event.target.value))
    .filter(el => el)
    // input: [separator]
    // return: arr.length ? string : void string
    .join(', ');

  errorEmailElem.innerHTML = errorText;
};

const onPasswordChange = event => {
  const errorText = [isRequired]
    .map(validator => validator(event.target.value))
    .filter(el => el)
    // input: [separator]
    // return: arr.length ? string : void string
    .join(', ');

  errorPasswordElem.innerHTML = errorText;
};

inputEmailElem.addEventListener('input', onEmailChange);
inputPasswordElem.addEventListener('input', onPasswordChange);

const onSubmitForm = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));
  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onSubmitForm);
