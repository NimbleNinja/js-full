'use strict';

// algoritm
// func getLocalStorageData()
// add data to localStorage for tests
// use loop for to iterate localstorage
// JSON.parse(value)

// input: none
// return: Object
export const getLocalStorageData = () => {
  return (
    Object.entries(localStorage)
      // reduce
      // input callback, initValue
      // return accamulator value
      // callback (acc, current value, [index], [array]) => return acc
      .reduce((obj, [key, value]) => {
        let newValue;

        try {
          newValue = JSON.parse(value);
        } catch {
          newValue = value;
        }

        return {
          ...obj,
          [key]: newValue,
        };
      }, {})
  );
};
