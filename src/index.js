import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);
let streak = 0;

const randomizer = (num) => {
  const randomNumber = Math.round(Math.random(num) * 100);
  return randomNumber;
};
const randomSign = (num) => {
  const randomNumber = Math.round(Math.random(num) * 3);
  if (randomNumber === 1) {
    return '+';
  } else if (randomNumber === 2) {
    return '*';
  }
  return '-';
};

const checkAnswer = (answer, correctAnswer, wrongAnswer, userName) => {
  if (answer == correctAnswer) {
    if (streak < 3) {
      console.log('Correct!');
      streak++;
    }
    if (streak >= 3) {
      console.log(`Congratulations, ${userName}!`);
      streak = 0;
    }
  } else if (answer !== correctAnswer) {
    console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${userName} \n`);
    streak = 0;
  }
};

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
