// set taskList to storage
// input: string(key), string(value)
// return: none
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// get taskList from storage
// input: string
// return: string || null
export const getItem = key => JSON.parse(localStorage.getItem(key));

//export const tasks = [
//  { text: 'Buy milk', done: false, id: 1 },
//  { text: 'Pick up Tom from airport', done: false, id: 2 },
//  { text: 'Visit party', done: false, id: 3 },
//  { text: 'Visit doctor', done: true, id: 4 },
//  { text: 'Buy meat', done: true, id: 5 },
//];
