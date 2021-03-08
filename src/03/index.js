// Refactor a Function to Use Currying in JavaScript

function add(x) {
    return function (y) {
        return x + y;
    };
}

const addThree = add(3);
console.log(addThree(4));
console.log(addThree(5));
console.log(addThree(6));

const add2 = x => y => x + y;

// Arity is the number of arguments or operands taken by a function

// 1 = unary
// 2 = binary
// 3 = ternary
// 4 = quaternary
