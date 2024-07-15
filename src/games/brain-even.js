const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const run = () => {
  const randInt = getRandomInt(1, 100);
  const answer = randInt % 2 === 0 ? 'yes' : 'no';
  return [randInt, answer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default { run, rules };
