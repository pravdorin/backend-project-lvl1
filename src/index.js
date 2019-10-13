import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);
let streak = 0;

const randomizer = (num) => {
  const randomNumber = Math.round(Math.random(num) * num);
  return randomNumber;
};
const randomSign = (num) => {
  const randomNumber = Math.round(Math.random(num) * 3);
  if (randomNumber === 1) {
    return '+';
  } else if (randomNumber === 2) {
    return '*';
  }
  return '-';
};

const checkAnswer = (answer, correctAnswer, wrongAnswer, userName) => {
  if (answer == correctAnswer) {
    if (streak < 3) {
      console.log('Correct!');
      streak++;
    }
    if (streak >= 3) {
      console.log(`Congratulations, ${userName}!`);
      streak = 0;
    }
  } else if (answer !== correctAnswer) {
    console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${userName} \n`);
    streak = 0;
  }
};

export const findEven = () => {
  const randomNumber = randomizer(100);

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

  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  findEven();
};

export const calculator = () => {
  const randomNumber = randomizer(100);
  const randomNumberTwo = randomizer(100);
  const Sign = randomSign(3);

  const result = eval(randomNumber + Sign + randomNumberTwo);

  const answer = readlineSync.question(`Question: ${randomNumber} ${Sign} ${randomNumberTwo}   \n`);
  const correctAnswer = result;
  const wrongAnswer = answer;
  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  calculator();
};

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  } else {
  return findGCD(b, (a % b));
  }
};

export const commonDivisor = () => {
  const randomNumber = randomizer(1000);
  const randomNumberTwo = randomizer(1000);

  const result = findGCD(randomNumber, randomNumberTwo);

  const answer = readlineSync.question(`Question: ${randomNumber} ${randomNumberTwo}   \n`);
  const correctAnswer = result;
  const wrongAnswer = answer;

  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  commonDivisor();
};

const progression = (start, count, multiplier, miss) => {
  let output = start + '';
  for (let i = 0; i <= count; i++) {
    output += ' ' + (start + multiplier);
    multiplier+= 2;
  }
  return output;
};

export const findProgression = () => {
  const startNumber = randomizer(100);
  const miss = randomizer(10);
  let output = progression(startNumber, 10, 2, miss);

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

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

export const findPrime = () => {
  const randomNumber = randomizer(100);

  let result = isPrime(randomNumber);

  if (result === true) {
    result = 'yes';
  } else {
    result = 'no';
  }

  readlineSync.setDefaultOptions({ limit: ['yes', 'no'] });
  const answer = readlineSync.question(`Question: ${randomNumber}   `);

  const correctAnswer = result;
  const wrongAnswer = answer;

  checkAnswer(answer, correctAnswer, wrongAnswer, userName);
  findPrime();
};
