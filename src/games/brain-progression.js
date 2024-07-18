import getRandomInt from '../utils/getRandomInt.js';

const run = () => {
  const randInt = getRandomInt(1, 20);
  const progStep = getRandomInt(1, 8);
  const progLength = getRandomInt(5, 15);
  const dotsPosit = getRandomInt(5, progLength);
  const preQuest = [randInt];
  for (let i = 0; i < progLength; i += 1) {
    preQuest.push(preQuest[i] + progStep);
  }
  console.log(preQuest);
  console.log(dotsPosit);
  const answer = preQuest[dotsPosit - 1];
  const quest = preQuest;
  quest[dotsPosit - 1] = '..';

  return [quest, answer];
};

const rules = 'What number is missing in the progression?';

export default { run, rules };
