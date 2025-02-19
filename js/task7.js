//Write an arrow function where it will do the following: 
//a) It will take two array inputs 
//b) Combine the two arrays and assign them in a new array 
//c) Find the maximum number from the new array and return the result 
//Print the result.


// Arrow function to combine two arrays and find the maximum number
const findMaxFromCombinedArrays = (array1, array2) => {
    // Step a: Combine the two arrays into a new array
    const combinedArray = [...array1, ...array2];
  
    // Step b: Find the maximum number from the combined array
    const maxNumber = Math.max(...combinedArray);
  
    // Step c: Return the maximum number
    return maxNumber;
  };
  
  // Example usage
  const array1 = [10, 20, 30];
  const array2 = [40, 50, 60];
  const result = findMaxFromCombinedArrays(array1, array2);
  
  // Print the result
  console.log(result); // Output: 60