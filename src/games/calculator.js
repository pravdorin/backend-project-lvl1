import readlineSync from 'readline-sync';
import { randomizer, randomSign, checkAnswer, userName } from '../functions';

export const calculator = () => {
  const randomNumber = randomizer(100);
  const randomNumberTwo = randomizer(100);
  const Sign = randomSign(3);

  const result = eval(randomNumber + Sign + randomNumberTwo);

  const answer = readlineSync.question(`Question: ${randomNumber} ${Sign} ${randomNumberTwo}   \n`);
  const correctAnswer = result;
  const wrongAnswer = answer;
  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  calculator();
};
