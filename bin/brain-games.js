#!/usr/bin/env node

import greeting from '../src/cli.js';
import isEvenGame from './brain-even.js';

console.log('Welcome to the Brain Games!');

console.log(`Hello, ${greeting()}!`);

console.log(isEvenGame());
