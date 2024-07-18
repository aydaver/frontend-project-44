import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const randInt = getRandomInt(1, 30);
  const progStep = getRandomInt(1, 10);
  const progLength = getRandomInt(5, 15);
  const dotsPosit = getRandomInt(6, progLength);
  const quest = [randInt];
  for (let i = 0; i < progLength; i += 1) {
    quest.push(quest[i] + progStep);
  }
  const answer = quest[dotsPosit];
  quest[dotsPosit] = '..';

  return [quest, answer];
};

const rules = 'What number is missing in the progression?';

export default { run, rules };
