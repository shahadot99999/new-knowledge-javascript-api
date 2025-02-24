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

//Medium Question and answer

//1. Write a function to find the factorial of a number
//Question: Write a function factorial that takes a number as an argument and returns its factorial.

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // Output: 120


//2. Write a function to reverse a string
//Question: Write a function reverseString that takes a string as an argument and 
// returns the reversed string.

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: olleh


//3. Write a function to check if a string is a palindrome
//Question: Write a function isPalindrome that takes a string as an argument and 
// returns true if the string is a palindrome, otherwise false.

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false


//Hard Questions


//1. Write a function to flatten a nested array
//Question: Write a function flattenArray that takes a nested array as an argument and 
// returns a flattened array.

function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}
console.log(flattenArray([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]

//2. Write a function to find the longest word in a sentence
//Question: Write a function longestWord that takes a sentence as an argument and
//  returns the longest word in the sentence.

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: quick


//3. Write a function to memoize another function
//Question: Write a function memoize that takes a function as an argument and
//  returns a memoized version of that function.

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage:
function expensiveCalculation(n) {
  console.log("Calculating...");
  return n * 2;
}

const memoizedCalculation = memoize(expensiveCalculation);
console.log(memoizedCalculation(5)); // Output: Calculating... 10
console.log(memoizedCalculation(5)); // Output: 10 (from cache)


//4. Write a function to implement a simple calculator
//Question: Write a function calculator that takes three arguments: two numbers and an operator (+, -, *, /), and 
// returns the result of the operation.

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
console.log(calculator(5, 3, "+")); // Output: 8
console.log(calculator(5, 3, "*")); // Output: 15
