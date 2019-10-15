import readlineSync from 'readline-sync';
import { randomizer, checkAnswer, greeting } from '../functions';

greeting();

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);

console.log('Find the greatest common divisor of given numbers.\n');
const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, (a % b));
};

const commonDivisor = () => {
  const randomNumber = randomizer(1000);
  const randomNumberTwo = randomizer(1000);
  const result = findGCD(randomNumber, randomNumberTwo);
  const answer = readlineSync.question(`Question: ${randomNumber} ${randomNumberTwo}   \n`);
  const correctAnswer = result;
  const wrongAnswer = answer;
  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  commonDivisor();
};

export default commonDivisor;
