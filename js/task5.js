//Write an arrow function where it will do the following: 
//a) It will take an away where the array elements will be the name of your friends 
//b) Check if the length of each element is even, push elements with even length to a new array and return the result 
//Print the result


// Arrow function to filter friends with even-length names
const filterEvenLengthNames = (friendsArray) => {
    // Create a new array to store names with even lengths
    const evenLengthNames = [];
  
    // Loop through each name in the input array
    friendsArray.forEach((name) => {
      // Check if the length of the name is even
      if (name.length % 2 === 0) {
        // If even, push it to the new array
        evenLengthNames.push(name);
      }
    });
  
    // Return the new array with even-length names
    return evenLengthNames;
  };
  
  // Example usage
  const friends = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
  const result = filterEvenLengthNames(friends);
  
  // Print the result
  console.log(result); // Output: ["Alice", "Dave", "Eve"]