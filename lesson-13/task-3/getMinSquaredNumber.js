export default arr => {
  if (!Array.isArray(arr) || !arr.length) {
    return null;
  }

  const result = arr.map(num => Math.abs(num)).sort((a, b) => a - b);

  return result[0] * result[0];
};

//console.log(test([-777, 3, -2, 6, 45, -20]));
