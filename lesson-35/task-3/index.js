import { renderReposList } from './src/scripts/renderReposList.js';
import { renderUserData } from './src/scripts/renderUserData.js';
import { showSpinner } from './src/scripts/spinner.js';
import { getReposList, getUserData } from './src/scripts/workWithServer.js';

// use DOMContentLoaded => show default avatar (https://avatars3.githubusercontent.com/u10001)
// func showSpinner() before requests
// get userData from github => fetch(https://api.github.com/users/USERNAME) => data => {avatar_url, name, location, repos_url} =>
// fetch(repos_url) => data => {name} => .repo-list.append(repo-list__item)
// error => alert('Failed to load data')

const nameFormInputElem = document.querySelector('.name-form__input');
const repoListElem = document.querySelector('.repo-list');

const defaultUser = {
  name: '',
  location: '',
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
};
renderUserData(defaultUser);

const onShowBtnHandler = () => {
  showSpinner(true);
  repoListElem.innerHTML = '';

  getUserData(nameFormInputElem.value)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => getReposList(url))
    .then(reposlist => {
      renderReposList(reposlist);
    })
    .then(() => {
      nameFormInputElem.value = '';
    })
    .catch(() => {
      alert('Failed to load data');
    })
    .finally(() => showSpinner(false));
};

const showBtn = document.querySelector('.name-form__btn');
showBtn.addEventListener('click', () => onShowBtnHandler());
