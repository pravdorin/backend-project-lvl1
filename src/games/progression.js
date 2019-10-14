import readlineSync from 'readline-sync';
import { randomizer, checkAnswer, userName } from '../functions';

const progression = (start, count, multiplier) => {
  let output = `${start}`;
  for (let i = 0; i <= count; i++) {
    output += ` ${start + multiplier}`;
    multiplier += 2;
  }
  return output;
};

export const findProgression = () => {
  const startNumber = randomizer(100);
  const miss = randomizer(10);
  let output = progression(startNumber, 10, 2);

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
