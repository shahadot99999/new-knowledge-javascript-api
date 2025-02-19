//Write an arrow function where it will do the following: x² 
//a) Square each array element 
//b) Calculate the sum of the squared elements 
//c) Return the average of the sum of the squared elements 
//Print the result.

// Arrow function to square elements, calculate sum, and return average
const processArray = (arr) => {
    // Step a: Square each array element
    const squaredArray = arr.map((num) => num ** 2);
  
    // Step b: Calculate the sum of the squared elements
    const sumOfSquares = squaredArray.reduce((sum, num) => sum + num, 0);
  
    // Step c: Return the average of the sum of the squared elements
    const average = sumOfSquares / arr.length;
  
    return average;
  };
  
  // Example usage
  const numbers = [2, 4, 6, 8];
  const result = processArray(numbers);
  
  // Print the result
  console.log(result); // Output: 30