export const parseUser = jsonStr => {
  try {
    return JSON.parse(jsonStr);
  } catch (err) {
    return null;
  }
};

const test = parseUser(`{"name": "Oleg}`);
console.log(test);
