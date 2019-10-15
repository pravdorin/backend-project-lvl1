import {
  randomizer, checkAnswer, greeting, question,
} from '../functions';

const userName = greeting();

console.log('What is the result of the expression?"\n');

const randomSign = (num) => {
  const random = Math.round(Math.random(num) * 3);
  if (random === 1) {
    return '+';
  } if (random === 2) {
    return '*';
  }
  return '-';
};

const calculator = () => {
  const random = randomizer(100);
  const random2 = randomizer(100);
  const sign = randomSign(3);
  let result = 0;

  if (sign === '+') {
    result = random + random2;
  } else if (sign === '-') {
    result = random - random2;
  } else {
    result = random * random2;
  }

  const answer = parseInt(question(random, sign, random2, ''), 10);
  const correctAnswer = result;
  const wrongAnswer = Number(answer);
  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  calculator();
};

export default calculator;
