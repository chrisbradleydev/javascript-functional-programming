// Using the Associative Property in JavaScript Functional Compositions

const { compose, exclaim, repeat, scream } = require('../07/index');

const withExuberance = compose(repeat, exclaim, scream);

const TEXT = 'I love functional programming';

console.log(withExuberance(TEXT));

const repeatExcitedly = compose(repeat, exclaim);

console.log(compose(repeatExcitedly, scream)(TEXT));

const screamLoudly = compose(exclaim, scream);

console.log(compose(repeat, screamLoudly)(TEXT));
