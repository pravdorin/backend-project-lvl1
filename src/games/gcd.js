import engine from '../engine';
import randomizer from '../utilities';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (item1, item2) => {
  if (item2 > 0) {
    const k = item1 % item2;
    return gcd(item2, k);
  }
  return Math.abs(item1);
};

const gameData = () => {
  const item1 = randomizer(1, 100);
  const item2 = randomizer(1, 100);
  const question = (`${item1} ${item2}`);
  const result = gcd(item1, item2);
  const correctAnswer = String(result);
  const gcdGameData = [question, correctAnswer];
  return gcdGameData;
};

export default () => engine(description, gameData);
