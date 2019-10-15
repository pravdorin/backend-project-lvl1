import {
  randomizer, checkAnswer, greeting, question,
} from '../functions';

const userName = greeting();

console.log('Find the greatest common divisor of given numbers.\n');
const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, (a % b));
};

const commonDivisor = () => {
  const random = randomizer(1000);
  const random2 = randomizer(1000);
  const result = findGCD(random, random2);
  const answer = parseInt(question(random, random2, '', ''), 10);
  const correctAnswer = result;
  const wrongAnswer = answer;
  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  commonDivisor();
};

export default commonDivisor;
