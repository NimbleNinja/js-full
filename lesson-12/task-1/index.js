'use strict';

const calc = expression => {
  const [leftOperand, operator, rightOperand] = expression.split(' ');
  let answer;

  switch (operator) {
    case '+':
      answer = +leftOperand + +rightOperand;
      break;

    case '-':
      answer = leftOperand - rightOperand;
      break;

    case '*':
      answer = leftOperand * rightOperand;
      break;

    case '/':
      answer = leftOperand / rightOperand;
  }

  return `${leftOperand} ${operator} ${rightOperand} = ${answer}`;
};

console.log(calc('10 / 2'));
