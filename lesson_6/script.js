// task_1

//function getArrayBounds(arr) {
//  if (!Array.isArray(arr)) {
//    return null;
//  }
//  return [arr.length, arr[0], arr[arr.length - 1]];
//}

// task_2

//function getSum(arr) {
//  if (!Array.isArray(arr)) {
//    return null;
//  }

//  let result = 0;

//  for (const num of arr) {
//    result += num;
//  }

//  return result;
//}

// task_3

//function getSpecialNumbers(from, to) {
//  const result = [];

//  for (let i = from; i <= to; i++) {
//    if (i % 3 === 0) {
//      result.push(i);
//    }
//  }

//  return result;
//}

// task_4

//function swap(numbers) {
//  const [firstEll, ...arr] = numbers;
//  return [...arr, firstEll];
//}

//function swapManual(numbers) {
//  const result = [];

//  for (let i = 1; i < numbers.length; i++) {
//    result[i - 1] = numbers[i];
//  }

//  result[result.length] = numbers[0];

//  return result;
//}

// task_5

//function createEmptyArray(len) {
//  const result = [];
//  result.length = len;
//  return result;
//}

// task_6

//function squareArray(arr) {
//  if (!Array.isArray(arr)) {
//    return null;
//  }
//  const result = [];

//  for (const num of arr) {
//    result.push(num * num);
//  }

//  return result;
//}

// examples
//console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
//console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
//console.log(squareArray([1])); // ==> [1]

// task_7

//function checkSum(arr) {
//  if (!Array.isArray(arr)) {
//    return null;
//  }

//  let result = 0;

//  for (const num of arr) {
//    result += num;
//  }

//  return result > 100;
//}

// task_8

//const increaseEvenEl = (arr, delta) => {
//  if (!Array.isArray(arr)) {
//    return null;
//  }

//  const result = [];

//  for (const num of arr) {
//    if (num % 2 == 0) {
//      result.push(num + delta);
//    } else {
//      result.push(num);
//    }
//  }

//  return result;
//};

//console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7], 20));

// task_9

//function reverseArray(arr) {
//  if (!Array.isArray(arr)) {
//    return null;
//  }
//  return [...arr].reverse();
//}

// task_10

//function cloneArr(arr) {
//  if (!Array.isArray(arr)) {
//    return null;
//  }

//  const resultArr = [];

//  for (const num of arr) {
//    resultArr.push(num);
//  }

//  return resultArr;
//}

// task_11

//function checker(arr) {
//  if (!Array.isArray(arr)) {
//    return null;
//  }

//  let minNum = arr[0];
//  let maxNum = arr[0];

//  for (const num of arr) {
//    if (minNum > num) {
//      minNum = num;
//    } else if (maxNum < num) {
//      maxNum = num;
//    }
//  }

//  const sum = minNum + maxNum;

//  return sum > 1000;
//}

// task_12

// Мое решение
//function sortAsc(array) {
//  let sortedArr = [...array];
//  let arrSorted = false;

//  while (!arrSorted) {
//    for (let i = 0; i < sortedArr.length - 1; i++) {
//      let currentEll = sortedArr[i];
//      let nextEll = sortedArr[i + 1];

//      if (currentEll >= nextEll) {
//        sortedArr[i] = nextEll;
//        sortedArr[i + 1] = currentEll;
//      }
//    }

//    for (let j = 0; j < sortedArr.length - 1; j++) {
//      if (sortedArr[j] <= sortedArr[j + 1]) {
//        arrSorted = true;
//        continue;
//      } else {
//        arrSorted = false;
//        break;
//      }
//    }
//  }

//  return sortedArr;
//}

// Мое решение
//function sortDesc(array) {
//  let sortedArr = [...array];
//  let arrSorted = false;

//  while (!arrSorted) {
//    for (let i = 0; i < sortedArr.length - 1; i++) {
//      let currentEll = sortedArr[i];
//      let nextEll = sortedArr[i + 1];

//      if (currentEll <= nextEll) {
//        sortedArr[i] = nextEll;
//        sortedArr[i + 1] = currentEll;
//      }
//    }

//    for (let j = 0; j < sortedArr.length - 1; j++) {
//      if (sortedArr[j] >= sortedArr[j + 1]) {
//        arrSorted = true;
//        continue;
//      } else {
//        arrSorted = false;
//        break;
//      }
//    }
//  }

//  return sortedArr;
//}

//function sortAsc(array) {
//  if (!Array.isArray(array)) {
//    return null;
//  }

//  const resultArr = [...array];

//  for (let i = 0; i < resultArr.length; i++) {
//    for (let j = 0; j < i; j++) {
//      if (resultArr[i] < resultArr[j]) {
//        let currentEll = resultArr[i];
//        resultArr[i] = resultArr[j];
//        resultArr[j] = currentEll;
//      }
//    }
//  }

//  return resultArr;
//}

//function sortDesc(array) {
//  if (!Array.isArray(array)) {
//    return null;
//  }

//  const arr = [...array];

//  for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < i; j++) {
//      if (arr[i] > arr[j]) {
//        let currentEll = arr[i];
//        arr[i] = arr[j];
//        arr[j] = currentEll;
//      }
//    }
//  }

//  return arr;
//}

// task_13

//function withdraw(clients, balances, client, amount) {
//  for (let i = 0; i < clients.length; i++) {
//    if (clients[i] === client && balances[i] >= amount) {
//      return (balances[i] -= amount);
//    } else if (clients[i] === client && balances[i] < amount) {
//      return -1;
//    }
//  }
//}

// task_14

//const getSubArray = (arr, numberOfElements) => {
//  const result = [...arr];
//  result.length = numberOfElements;
//  return result;
//};

// task_15

//const includes = (arr, num) => {
//  for (const n of arr) {
//    if (n === num) {
//      return true;
//    }
//  }

//  return false;
//};

// task_16

//const removeDuplicates = array => {
//  if (!Array.isArray(array)) {
//    return null;
//  }

//  if (array.length > 0) {
//    const result = [];

//    for (const num of array) {
//      if (!result.includes(num)) {
//        result.push(num);
//      }
//    }

//    return result;
//  }
//};

// task_17

//const uniqueCount = arr => {
//  if (!Array.isArray(arr) || !arr.length) {
//    return null;
//  }

//  const resultArr = [];

//  for (const num of arr) {
//    if (!resultArr.includes(num)) {
//      resultArr.push(num);
//    }
//  }

//  return resultArr.length;
//};
