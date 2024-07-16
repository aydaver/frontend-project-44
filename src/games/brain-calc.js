/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const randInt1 = getRandomInt(1, 100);
  const randInt2 = getRandomInt(1, 100);
  const ops = ['+', '-', '*'];
  const opIndex = getRandomInt(0, 3);
  const operator = ops[opIndex];
  const quest = `${randInt1} ${operator} ${randInt2}`;
  let answer = 0;
  switch (opIndex) {
    case 0:
      answer = randInt1 + randInt2;
      break;
    case 1:
      answer = randInt1 - randInt2;
      break;
    case 2:
      answer = randInt1 * randInt2;
      break;
  }
  answer = answer.toString();
  return [quest, answer];
};

const rules = 'What is the result of the expression?';

export default { run, rules };
