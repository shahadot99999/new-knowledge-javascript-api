//1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9]. 
// Now convert this array into an even array (array with even numbers). 
// [2, 4, 6, 8, 10]. Do this using for loop & array.map() method. 
// Hints: add one to any odd number and it will become an even number. 


//2) You are given an array say: [33, 50, 79, 78, 90, 101, 30]. 
// return/get all the elements which are divisible by 10 using array.filter() method. 

//Now do the same task of question 2. But do this using array.filter method. 
// Then compare the output of question 2 & question 3.

// 1. Convert odd array to even array
const oddArray = [1, 3, 5, 7, 9];

// Using for loop
const evenArrayForLoop = [];
for (let i = 0; i < oddArray.length; i++) {
  evenArrayForLoop.push(oddArray[i] + 1);
}
console.log("Even Array (for loop):", evenArrayForLoop); // Output: [2, 4, 6, 8, 10]

// Using array.map()
const evenArrayMap = oddArray.map((num) => num + 1);
console.log("Even Array (map):", evenArrayMap); // Output: [2, 4, 6, 8, 10]

// 2. Get elements divisible by 10 using array.filter()
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10Filter = numbers.filter((num) => num % 10 === 0);
console.log("Divisible by 10 (filter):", divisibleBy10Filter); // Output: [50, 90, 30]

// 3. Get elements divisible by 10 using array.find()
const divisibleBy10Find = numbers.find((num) => num % 10 === 0);
console.log("Divisible by 10 (find):", divisibleBy10Find); // Output: 50