'use strict';

// algoritm
// func createButton(text) => createElement => button.textContent(text)

// input: string
// return: undefined
export function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;

  document.querySelector('body').append(button);
}
