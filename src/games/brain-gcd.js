import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const randInt1 = getRandomInt(1, 100);
  const randInt2 = getRandomInt(1, 100);
  const quest = `${randInt1} ${randInt2}`;
  const nums = [];
  let answer = 0;
  if (randInt1 > randInt2) {
    for (let i = 1; i <= randInt2; i += 1) {
      if (randInt2 % i === 0 && randInt1 % i === 0) {
        nums.push(i);
      }
    }
  } else if (randInt2 > randInt1) {
    for (let i = 1; i <= randInt1; i += 1) {
      if (randInt2 % i === 0 && randInt1 % i === 0) {
        nums.push(i);
      }
    }
  } else {
    answer = randInt1;
  }
  answer = nums[nums.length - 1];
  answer = answer.toString();
  return [quest, answer];
};
const rules = 'Find the greatest common divisor of given numbers.';
export default { run, rules };
