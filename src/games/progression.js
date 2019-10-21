
import engine from '../engine';
import randomizer from '../utilities';

const description = 'What number is missing in the progression?';

const lengthOfProgression = 10;
const gameData = () => {
  const first = randomizer(1, 100);
  const difference = randomizer(1, 10);
  const hiddenElementPosition = randomizer(1, lengthOfProgression);
  let question = '';
  const answer = String(first + hiddenElementPosition * difference);

  for (let counter = 1; counter <= lengthOfProgression; counter += 1) {
    const space = ((counter === lengthOfProgression) ? '' : ' ');
    if (counter === hiddenElementPosition) {
      question = `${question}..${space}`;
    } else {
      question = `${question}${first + counter * difference}${space}`;
    }
  }
  const GameProgressioninfo = [question, answer];
  return GameProgressioninfo;
};

export default () => engine(description, gameData);
