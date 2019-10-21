
import readlineSync from 'readline-sync';
import getName from '.';

const rounds = 3;

const engine = (description, gameData) => {
  console.log('Welcome to the Brain Games! \n');
  console.log(description);
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log();
  for (let i = 1; i <= rounds; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      console.log();
    } else {
      console.log(`"${answer}" is wrong answer! Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
