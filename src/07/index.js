// Build Up Complex Functionality by Composing Simple Functions in JavaScript

const f = x => x + 2;
const g = x => x * 3;

// console.log(f(g(5)));

export const scream = str => str.toUpperCase();
export const exclaim = str => `${str}!`;
export const repeat = str => `${str} ${str}`;

const TEXT = 'I love egghead';

// hard to read
// console.log(repeat(exclaim(scream(TEXT))));

// last to first
export const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(repeat, exclaim, scream);

// console.log(withExuberance(TEXT));

// first to last
export const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const withExuberance2 = pipe(scream, exclaim, repeat);

// console.log(withExuberance2(TEXT));
