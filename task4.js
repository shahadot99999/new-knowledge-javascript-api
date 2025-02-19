//1) Write an arrow function that will take 3 parameters,
//  will multiply the parameters and will return the result. 


// Task 1: Multiply 3 parameters
const multiply = (a, b, c) => a * b * c;
console.log(multiply(2, 3, 4)); // Output: 24


// 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code.
//  I love to eat biryani. 

// Task 2: Print a sentence in three lines
const multiLineSentence = `
I am a web developer.
I love to code.
I love to eat biryani.
`;
console.log(multiLineSentence);

//// 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter
//  will be a default parameter. Add these two parameters and return the result.

// Task 3: Arrow function with default parameter
const addWithDefault = (a, b = 5) => a + b;
console.log(addWithDefault(10)); // Output: 15
console.log(addWithDefault(10, 20)); // Output: 30