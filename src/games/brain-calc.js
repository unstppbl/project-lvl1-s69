import { cons, car, cdr } from 'hexlet-pairs';
import * as gameLogic from '..';

const gameTask = ('Answer "yes" if number even otherwise answer "no".');
const questionTypes = [
  cons((a, b) => `${a} + ${b}`, (a, b) => a + b),
  cons((a, b) => `${a} - ${b}`, (a, b) => a - b),
  cons((a, b) => `${a} * ${b}`, (a, b) => a * b)];

const makeQuestionAnswer = (a, b) => {
  const questionType = gameLogic.randomArrayItem(questionTypes);
  const question = car(questionType)(a, b);
  const answer = cdr(questionType)(a, b);
  return gameLogic.questPair(question, answer);
};

const randInt = () => gameLogic.getRandomInt(1, 100);

const questionsAnswers = [
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
];
const numberOfTries = 3;
const makeGame = gameLogic.initiateGame(questionsAnswers, numberOfTries, gameTask);
export default makeGame;
