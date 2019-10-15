import readlineSync from 'readline-sync';
import { randomizer, checkAnswer, greeting } from '../functions';

greeting();

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);

console.log('What number is missing in the progression?\n');

const progression = (start, count, multiplier) => {
  let acc = multiplier;
  let output = `${start}`;
  for (let i = 0; i <= count; i += 1) {
    output += ` ${start + acc}`;
    acc += 2;
  }
  return output;
};

const findProgression = () => {
  const startProgression = randomizer(100);
  const miss = randomizer(10);
  let output = progression(startProgression, 10, 2);

  const arr = output.split(' ');
  const missNumb = arr[miss];
  arr[miss] = '..';
  output = arr.toString().replace(/,/g, ' ');

  const answer = readlineSync.question(`Question: ${output} \n`);

  const correctAnswer = missNumb;
  const wrongAnswer = answer;


  checkAnswer(answer, correctAnswer, wrongAnswer, userName);

  findProgression();
};

export default findProgression;
