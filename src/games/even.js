import engine from '../engine';
import randomizer from '../utilities';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const gameData = () => {
  const question = randomizer(1, 100);
  const correctAnswer = getCorrectAnswer(question);
  const evenGameData = [question, correctAnswer];
  return evenGameData;
};

export default () => engine(description, gameData);
