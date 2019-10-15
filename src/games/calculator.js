import readlineSync from 'readline-sync';
import { randomizer, checkAnswer, greeting } from '../functions';

greeting();

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);

console.log('What is the result of the expression?"\n');

const randomSign = (num) => {
  const randomNumber = Math.round(Math.random(num) * 3);
  if (randomNumber === 1) {
    return '+';
  } if (randomNumber === 2) {
    return '*';
  }
  return '-';
};

const calculator = () => {
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

export default calculator;
