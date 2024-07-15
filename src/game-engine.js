import readlineSync from 'readline-sync';
import greeting from './utils/cli.js';
import game from './utils/game-selector.js';

const games = (gameName) => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log(game[gameName].rules);
  for (let i = 0; i < 3; i += 1) {
    const [quest, answer] = game[gameName].run();
    console.log(`Question: ${quest}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default games;
