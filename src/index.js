import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');


console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);
let streak = 0;

const findEven = () => {
  const randomNumber = Math.round(Math.random(100) * 100);

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

  if (answer === correctAnswer) {
    if (streak < 3) {
      console.log('Correct!');
      streak++;
    }
    if (streak >= 3) {
      console.log(`Congratulations, ${userName}!`);
      streak = 0;
    }
  } else {
    console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${userName}`);
    streak = 0;
  }

  findEven();
};
findEven();

export default findEven;
