'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async users => {
  const url = `https://api.github.com/users`;

  const requests = users.map(user => {
    return fetch(`${url}/${user}`)
      .then(data => data.json())
      .then(user => user.blog);
  });

  return await Promise.all(requests);
};

// examples
getUsersBlogs(['google', 'facebook']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
//getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
//getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
