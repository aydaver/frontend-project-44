import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const quest = getRandomInt(1, 100);
  const answer = quest % 2 === 0 ? 'yes' : 'no';
  return [quest, answer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default { run, rules };
