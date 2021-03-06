import { cleanReposListElem, renderReposList } from './src/scripts/renderReposList.js';
import { renderUserData } from './src/scripts/renderUserData.js';
import { showSpinner } from './src/scripts/spinner.js';
import { getReposList, getUserData } from './src/scripts/workWithServer.js';

// use DOMContentLoaded => show default avatar (https://avatars3.githubusercontent.com/u10001)
// func showSpinner() before requests
// get userData from github => fetch(https://api.github.com/users/USERNAME) => data => {avatar_url, name, location, repos_url} =>
// fetch(repos_url) => data => {name} => .repo-list.append(repo-list__item)
// error => alert('Failed to load data')

// init render defaultUser
const defaultUser = {
  name: '',
  location: '',
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
};
renderUserData(defaultUser);

// button and input
const nameFormInputElem = document.querySelector('.name-form__input');
const showBtn = document.querySelector('.name-form__btn');

// handler
const onShowBtnHandler = () => {
  showSpinner(true);
  cleanReposListElem();

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
    .catch(err => {
      alert(err.message);
    })
    .finally(() => showSpinner(false));
};

showBtn.addEventListener('click', onShowBtnHandler);
