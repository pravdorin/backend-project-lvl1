
let streak = 0;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const randomizer = (num) => {
  const randomNumber = Math.round(Math.random(num) * num);
  return randomNumber;
};

export const checkAnswer = (answer, correctAnswer, wrongAnswer, userName) => {
  if (answer == correctAnswer) {
    if (streak < 3) {
      console.log('Correct!');
      streak += 1;
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
