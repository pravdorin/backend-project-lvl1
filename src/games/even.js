import readlineSync from 'readline-sync';
import { randomizer, checkAnswer, userName } from '../functions';

export const findEven = () => {
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
