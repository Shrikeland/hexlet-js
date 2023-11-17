import readlineSync from 'readline-sync';

const welcomeUser = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

welcomeUser();
