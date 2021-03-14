// Improve JavaScript Function Usability with Proper Argument Order in Functional Programming

const arr = [1, 2, 3, 4, 5];
const double = n => n * 2;

// order of arguments in non curried functions is somewhat trivial
const map1 = (array, cb) => array.map(cb);

// vs

const map2 = array => cb => array.map(cb);
const withArr = map2(arr);
console.log(withArr(double));
console.log(withArr(n => n * 3));
console.log(withArr(n => n * 4));

// vs

const map3 = cb => array => array.map(cb);
const withDouble = map3(double);
console.log(withDouble(arr));
console.log(withDouble([2, 4, 6, 8, 10]));

// curried functions order arguments from most specific to least specific

// the least specific will always be the data, e.g. boolean, number, string, object, array

const prop = key => obj => obj[key];

const propName = prop('name');

const people = [
    { name: 'Alex' },
    { name: 'George' },
    { name: 'Kent' },
    { name: 'Sam' },
    { name: 'Sarah' },
    { name: 'William' },
];

console.log(map3(propName)(people));
