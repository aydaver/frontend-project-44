import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const randInt1 = getRandomInt(1, 100);
  const randInt2 = getRandomInt(1, 100);
  const quest = `${randInt1} ${randInt2}`;
  let answer = 0;
  const nums = [];
  let lowestInt = 0;
  if (randInt1 > randInt2) {
    lowestInt = randInt2;
  } else if (randInt2 > randInt1) {
    lowestInt = randInt1;
  } else {
    nums.push(randInt1);
  }
  for (let i = 1; i <= lowestInt; i += 1) {
    if (randInt2 % i === 0 && randInt1 % i === 0) {
      nums.push(i);
    }
  }
  answer = nums[nums.length - 1];
  answer = answer.toString();
  return [quest, answer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default { run, rules };
