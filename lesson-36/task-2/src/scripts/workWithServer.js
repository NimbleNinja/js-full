const mainUrl = 'https://api.github.com/users';

export const getUserData = async userName => {
  const response = await fetch(`${mainUrl}/${userName}`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to load data');
};

export const getReposList = async url => {
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to load data');
};
