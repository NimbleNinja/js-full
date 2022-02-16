export function createArrayOfFunctions(num) {
  if (num === undefined) {
    return [];
  }

  if (typeof num !== 'number') {
    return null;
  }

  const ressArr = [];

  for (let i = 0; i < num; i++) {
    ressArr[i] = () => i;
  }

  return ressArr;
}
