import { cleanReposListElem, renderReposList } from './src/scripts/renderReposList.js';
import { renderUserData } from './src/scripts/renderUserData.js';
import { showSpinner } from './src/scripts/spinner.js';
import { getReposList, getUserData } from './src/scripts/workWithServer.js';

const nameFormInputElem = document.querySelector('.name-form__input');

const defaultUser = {
  name: '',
  location: '',
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
};
renderUserData(defaultUser);

const onShowBtnHandler = async () => {
  try {
    showSpinner(true);
    cleanReposListElem();

    const userData = await getUserData(nameFormInputElem.value);
    renderUserData(userData);

    const reposList = await getReposList(userData.repos_url);
    renderReposList(reposList);

    nameFormInputElem.value = '';
  } catch (err) {
    alert(err.message);
  } finally {
    showSpinner(false);
  }
};

const showBtn = document.querySelector('.name-form__btn');
showBtn.addEventListener('click', onShowBtnHandler);
