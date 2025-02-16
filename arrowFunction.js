const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8

const calculate = (a, b, operation) => {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    } else {
        return 'Invalid operation';
    }
};

console.log(calculate(10, 5, 'add')); // Output: 15
console.log(calculate(10, 5, 'subtract')); // Output: 5
console.log(calculate(10, 5, 'multiply')); // Output: Invalid operation