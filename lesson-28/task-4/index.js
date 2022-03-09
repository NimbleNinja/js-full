// algoritm
// create func compose
// use method reduce

export const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  };
