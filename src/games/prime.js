import {
  randomizer, checkAnswer, greeting, question,
} from '../functions';

const userName = greeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

function isPrime(num) {
  for (let i = 2; i < num; i = +1) if (num % i === 0) return false;
  return num > 1;
}

const findPrime = () => {
  const random = randomizer(100);

  let result = isPrime(random);

  if (result === true) {
    result = 'yes';
  } else {
    result = 'no';
  }

  const answer = question(random, '', '', '');

  const correctAnswer = result;
  const wrongAnswer = answer;

  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  findPrime();
};

export default findPrime;
