import readlineSync from 'readline-sync';
import { randomizer, checkAnswer, greeting } from '../functions';

greeting();

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const findEven = () => {
  const randomNumber = randomizer(100);

  let correctAnswer = '';
  let wrongAnswer = '';

  const result = randomNumber % 2 === 0 ? 'even' : 'odd';
  if (result === 'even') {
    correctAnswer = 'yes';
    wrongAnswer = 'no';
  } else {
    wrongAnswer = 'no';
    correctAnswer = 'no';
  }
  readlineSync.setDefaultOptions({ limit: ['yes', 'no'] });
  const answer = readlineSync.question(`Question: ${randomNumber}   `);

  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  findEven();
};

export default findEven;
