import {
  randomizer, checkAnswer, greeting, question,
} from '../functions';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const findEven = () => {
  const random = randomizer(100);

  let correctAnswer = '';
  let wrongAnswer = '';

  const result = random % 2 === 0 ? 'even' : 'odd';
  if (result === 'even') {
    correctAnswer = 'yes';
    wrongAnswer = 'no';
  } else {
    wrongAnswer = 'no';
    correctAnswer = 'no';
  }
  const answer = question(random, '', '', '');

  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  findEven();
};

export default findEven;
