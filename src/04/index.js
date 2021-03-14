// Identify Side Effects by Comparing Pure and Impure JavaScript Functions

const f = x => x + 1;

// ex 1 - global state
const COST_OF_ITEM = 16;
const cartTotal = quantity => COST_OF_ITEM * quantity;

console.log(cartTotal(1));
console.log(cartTotal(2));
console.log(cartTotal(3));

// ex 2 - same input, different output
const generateID = () => Math.floor(Math.random() * 10000);
const createUser = (name, age) => ({
    id: generateID(),
    name,
    age,
});

console.log(createUser('Kyle', 33));
console.log(createUser('Kyle', 33));
console.log(createUser('Kyle', 33));

// ex 3 - side effect 1
let id = 0;
const createFoodItem = name => ({
    id: id++,
    name,
});

console.log(createFoodItem('Cheeseburger'));
console.log(createFoodItem('Fries'));
console.log(createFoodItem('Milkshake'));

// ex 4 - side effect 2
const logger = msg => {
    console.log(msg);
};

logger('Hi eggheads');
