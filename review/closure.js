const saveArr = () => {
  saveArr.arr = [];

  return (...args) => {
    saveArr.arr.push(...args);

    return saveArr.arr;
  };
};

const arr1 = saveArr();

arr1(1);
arr1(2);
arr1(3);

console.log(arr1());
