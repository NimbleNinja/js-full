// algoritm
// create calc func
// create object with methods

// input: initial value
// return: Object
export const calc = value => {
  let result = value;

  const myObj = {
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };

  return myObj;
};
