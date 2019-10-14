import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName} !`);
let streak = 0;

export const randomizer = (num) => {
  const randomNumber = Math.round(Math.random(num) * num);
  return randomNumber;
};
export const randomSign = (num) => {
  const randomNumber = Math.round(Math.random(num) * 3);
  if (randomNumber === 1) {
    return '+';
  } if (randomNumber === 2) {
    return '*';
  }
  return '-';
};

export const checkAnswer = (answer, correctAnswer, wrongAnswer, userName) => {
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
