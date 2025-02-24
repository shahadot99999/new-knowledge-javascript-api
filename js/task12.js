//function  related 

//easy question and answer

//1. Write a function to add two numbers
//Question: Write a function add that takes two numbers as arguments and returns their sum.

function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3)); // Output: 8

  //2. Write a function to check if a number is even
//Question: Write a function isEven that takes a number as an argument and
//  returns true if the number is even, otherwise false.

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false


//3. Write a function to greet a user
//Question: Write a function greet that takes a name as an argument and 
// returns a greeting message like "Hello, John!".

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("John")); // Output: Hello, John!