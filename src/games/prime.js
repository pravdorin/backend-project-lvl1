import readlineSync from 'readline-sync';
import { randomizer, checkAnswer,greeting } from '../functions';

greeting();

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

const findPrime = () => {
  const randomNumber = randomizer(100);

  let result = isPrime(randomNumber);

  if (result === true) {
    result = 'yes';
  } else {
    result = 'no';
  }

  readlineSync.setDefaultOptions({ limit: ['yes', 'no'] });
  const answer = readlineSync.question(`Question: ${randomNumber}   `);

  const correctAnswer = result;
  const wrongAnswer = answer;

  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  findPrime();
};

export default findPrime;
