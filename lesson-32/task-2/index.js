'use strict';

// algoritm
// create func getUserASAP(userId) => return promise
// Promise.race()

// input: string (userId)
// return: promise

const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1, 3);
    setTimeout(() => {
      console.log(randomDelay);
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const urls = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

export const getUserASAP = userId => {
  const requestsAdressess = urls.map(url => `${url}/${userId}`);

  const requests = requestsAdressess.map(url => request(url));

  return Promise.race(requests);
};
