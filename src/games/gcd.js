import readlineSync from 'readline-sync';
import { randomizer, checkAnswer, userName } from '../functions';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, (a % b));
};

export const commonDivisor = () => {
  const randomNumber = randomizer(1000);
  const randomNumberTwo = randomizer(1000);
  const result = findGCD(randomNumber, randomNumberTwo);
  const answer = readlineSync.question(`Question: ${randomNumber} ${randomNumberTwo}   \n`);
  const correctAnswer = result;
  const wrongAnswer = answer;
  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  commonDivisor();
};
