
import engine from '../engine';
import randomizer from '../utilities';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) { if (num % i === 0) return false; }
  return num > 1;
};

const getcorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const gameData = () => {
  const question = randomizer(1, 300);
  const correctAnswer = getcorrectAnswer();
  const primeGameData = [question, correctAnswer];
  return primeGameData;
};

export default () => engine(description, gameData);
