import { initHandlers } from './src/scripts/initHandlers.js';

// use DOMContentLoaded => show default avatar (https://avatars3.githubusercontent.com/u10001)
// func showSpinner() before requests
// get userData from github => fetch(https://api.github.com/users/USERNAME) => data => {avatar_url, name, location, repos_url} =>
// fetch(repos_url) => data => {name} => .repo-list.append(repo-list__item)
// error => alert('Failed to load data')

document.addEventListener('DOMContentLoaded', () => {
  const avatarElem = document.querySelector('.user__avatar');
  avatarElem.src = 'https://avatars3.githubusercontent.com/u10001';
  initHandlers();
});
