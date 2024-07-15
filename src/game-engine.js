import readlineSync from 'readline-sync';
import greeting from './utils/cli.js';
import game from './utils/game-selector.js';

const games = (gameName) => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log(game[gameName].rules);
  for (let i = 0; i < 3; i += 1) {
    const [randInt, answer] = game[gameName].run();
    console.log(`Question: ${randInt}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer.toLowerCase() === answer) {
      console.log('Correct!');
    } else {
      console.log('Not correct');
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default games;
