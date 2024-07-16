import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const randInt1 = getRandomInt(1, 100);
  const randInt2 = getRandomInt(1, 100);
  const quest = `${randInt1} ${randInt2}`;
  let answer = 0;
  if (randInt1 > randInt2) {
    const nums = [];
    for (let i = 1; i <= randInt2; i += 1) {
      nums.push(i);
    }
    const almostRightNums = [];
    for (let i = 0; i <= nums.length; i += 1) {
      if (randInt2 % nums[i] === 0) {
        almostRightNums.push(nums[i]);
      }
    }
    const rightNums = [];
    for (let i = 0; i <= almostRightNums.length; i += 1) {
      if (randInt1 % almostRightNums[i] === 0) {
        rightNums.push(almostRightNums[i]);
      }
    }
    answer = rightNums[rightNums.length - 1];
  } else if (randInt2 > randInt1) {
    const nums = [];
    for (let i = 1; i <= randInt1; i += 1) {
      nums.push(i);
    }
    const almostRightNums = [];
    for (let i = 0; i <= nums.length; i += 1) {
      if (randInt1 % nums[i] === 0) {
        almostRightNums.push(nums[i]);
      }
    }
    const rightNums = [];
    for (let i = 0; i <= almostRightNums.length; i += 1) {
      if (randInt2 % almostRightNums[i] === 0) {
        rightNums.push(almostRightNums[i]);
      }
    }
    answer = rightNums[rightNums.length - 1];
  } else {
    answer = randInt1;
  }
  answer = answer.toString();

  return [quest, answer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default { run, rules };
