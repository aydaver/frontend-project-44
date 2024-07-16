import getRandomInt from '../utils/getRandomInt.js';
import pushCD from '../utils/pushCD.js';

const run = () => {
  const randInt1 = getRandomInt(1, 100);
  const randInt2 = getRandomInt(1, 100);
  const quest = `${randInt1} ${randInt2}`;
  let answer = 0;
  const nums = pushCD(randInt1, randInt2);
  answer = nums[nums.length - 1];
  answer = answer.toString();
  return [quest, answer];
};
const rules = 'Find the greatest common divisor of given numbers.';
export default { run, rules };
