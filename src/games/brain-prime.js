import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const quest = getRandomInt(1, 100);
  const nums = [];
  for (let i = 1; i <= quest; i += 1) {
    if (quest % i === 0) {
      nums.push(i);
    }
  }
  const answer = nums.length === 2 ? 'yes' : 'no';

  return [quest, answer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default { run, rules };
