// Debug Functional Compositions with a Logging Side Effect in JavaScript

const { compose } = require('../07/index');

const bookTitles = ['The Culture Code', 'Designing Your Life', 'Algorithms to Live By'];

const join = separator => xs => xs.join(separator);
const lowerCase = str => str.toLowerCase();
const map = fn => xs => xs.map(fn);
const split = pattern => str => str.split(pattern);
const trace = msg => x => (console.log(msg, x), x);

// const slugify = compose(
//     map(join('-')),
//     trace('after split'),
//     map(split(' ')),
//     trace('after lowercase'),
//     map(lowerCase),
//     trace('before lowercase'),
// );

const slugify = compose(map(compose(join('-'), split(' '), lowerCase)));

const slugs = slugify(bookTitles);

console.log(slugs);
