import { showSpinner } from './spinner.js';
import { getReposList, getUserData } from './workWithServer.js';

export const renderer = () => {
  showSpinner();

  const userAvatarElem = document.querySelector('.user__avatar');
  const userNameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');
  const nameFormInputElem = document.querySelector('.name-form__input');
  const repoListElem = document.querySelector('.repo-list');

  getUserData(nameFormInputElem.value)
    .then(userData => {
      console.log(userData);
      const { avatar_url, name, location, repos_url } = userData;
      userAvatarElem.src = avatar_url;
      userNameElem.textContent = name;
      userLocationElem.textContent = location;

      return repos_url;
    })
    .then(url => getReposList(url))
    .then(reposlist => {
      const reposElems = [...reposlist].map(({ name }) => {
        const repoElem = document.createElement('li');
        repoElem.classList.add('repo-list__item');
        repoElem.textContent = name;
        return repoElem;
      });
      repoListElem.replaceChildren(...reposElems);
    })
    .then(() => {
      showSpinner();
    });
};

// 1. get data from server
// 2. get all DOM elements
// 3. render data
