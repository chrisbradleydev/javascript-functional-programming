// Eliminate Anonymous JavaScript Functions with Pointfree Programming

const array = [1, 2, 3];
console.log(array.map(x => x * 2));

// vs

const double = x => x * 2;
console.log(array.map(double));

// legibility
// reduce surface area for bugs
// unit test our named functions
