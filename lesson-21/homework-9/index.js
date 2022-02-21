'use strict';

// algoritm
// func finishForm()
// create element input setAttribute type=text, name=login
// search input type=text if name=password type=password

// input: none
// return: undefined
export function finishForm() {
  const passInput = document.querySelector(
    '.login-form input[name="password"]'
  );
  passInput.type = 'password';

  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.name = 'login';

  document.querySelector('.login-form').prepend(inputElement);
}
