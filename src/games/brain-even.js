const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const run = () => {
  const quest = getRandomInt(1, 100);
  const answer = quest % 2 === 0 ? 'yes' : 'no';
  return [quest, answer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default { run, rules };
