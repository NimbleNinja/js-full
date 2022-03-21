import { renderer } from './renderer.js';

export const initHandlers = () => {
  const onShowBtnClick = () => {
    renderer();
  };

  const showBtn = document.querySelector('.name-form__btn');
  showBtn.addEventListener('click', onShowBtnClick);
};
