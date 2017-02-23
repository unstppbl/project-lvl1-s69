#!/usr/bin/env node
import getName from '..';
import game from '../games/brain-even';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = getName();
console.log(`Hello, ${userName}!`);

game(userName);
