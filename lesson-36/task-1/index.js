'use strict';

export const fetchUser = async userId => {
  try {
    const userData = await fetch(`https://api.github.com/users/${userId}`);
    //console.log(userData);
    if (!userData.ok) {
      return null;
    }
    return await userData.json();
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

//fetchUser('google')
//  .then(data => {
//    console.log(data);
//  })
//  .catch(err => console.log(err));
