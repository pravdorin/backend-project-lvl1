import readlineSync from 'readline-sync';

function getName() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}
export default getName;
