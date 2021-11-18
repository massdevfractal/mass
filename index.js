#!/usr/bin/env node

const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');

// clears the console
clearConsole();

console.log(`
NAME: ${pkgJSON.name}
`);

console.log("Mass Dev + Hi! I am new in node.js!!");

