import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const name = `${greeting()}`;

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const randInt = getRandomInt(1, 100);

    console.log(`Question: ${randInt}`);

    let isEven = true;

    if (randInt % 2 === 0) {
      isEven = true;
    } else {
      isEven = false;
    }

    const answer = readlineSync.question('Answer: ');

    if (i === 2) {
      if (isEven === true) {
        if (answer === 'yes') {
          return `Correct!\nCongratulations, ${name}!`;
        }
        return `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
      }

      if (isEven === false) {
        if (answer === 'no') {
          return `Correct!\nCongratulations, ${name}!`;
        }
        return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
      }
    }

    if (isEven === true) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        return `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
      }
    }

    if (isEven === false) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
      }
    }
  }
};

export default isEvenGame;
