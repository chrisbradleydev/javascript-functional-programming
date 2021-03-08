// Avoiding Mutations in JavaScript with Immutable Data Structures

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);

const c = { foo: 'bar' };
const d = c;
d.foo = 'baz';
console.log(c);

const push = value => array => {
    const clone = [...array];
    clone.push(value);
    return clone;
};

const e = [1, 2, 3];
const f = push(4)(e);
console.log(e);
console.log(e === f);

class MutableGlass {
    constructor(content, amount) {
        this.content = content;
        this.amount = amount;
    }

    takeDrink(value) {
        this.amount = Math.max(this.amount - value, 0);
        return this;
    }
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1.takeDrink(20);

console.log(mg1 === mg2);
console.log(mg1.amount === mg2.amount);

class ImutableGlass {
    constructor(content, amount) {
        this.content = content;
        this.amount = amount;
    }

    takeDrink(value) {
        return new ImutableGlass(this.content, Math.max(this.amount - value, 0));
    }
}

const ig1 = new ImutableGlass('water', 100);
const ig2 = ig1.takeDrink(20);

console.log(ig1 === ig2);
console.log(ig1.amount === ig2.amount);
