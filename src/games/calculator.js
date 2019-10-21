import engine from '../engine';
import randomizer from '../utilities';

const description = 'What is the result of the expression?';

const getSignOfMathOperation = (mathSign) => (
  mathSign.charAt(randomizer(0, String(mathSign).length - 1)));

const getSign = (number1, sign, number2) => {
  let result;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case ('-'):
      result = number1 - number2;
      break;
    case ('*'):
      result = number1 * number2;
      break;
    default:
  }
  return result;
};

const gameData = () => {
  const mathSign = '-+*';
  const number1 = randomizer(1, 100);
  const number2 = randomizer(1, 100);
  const signOfMathOperation = getSignOfMathOperation(mathSign);
  const correctAnswer = getSign(number1, signOfMathOperation, number2);
  const question = `${number1} ${signOfMathOperation} ${number2}`;
  const newCorrectAnswer = String(correctAnswer);
  const calcGameData = [question, newCorrectAnswer];

  return calcGameData;
};

export default () => engine(description, gameData);
