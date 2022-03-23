const mainUrl = 'https://api.github.com/users';

export const getUserData = userName => {
  return fetch(`${mainUrl}/${userName}`).then(data => {
    if (data.ok) return data.json();
    throw new Error('Failed to load data');
  });
};

export const getReposList = url => {
  return fetch(url).then(data => {
    if (data.ok) return data.json();
    throw new Error('Failed to load data');
  });
};
