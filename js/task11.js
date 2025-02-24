//1. Print all elements of an array
//Question: Use forEach to print each element of the array [1, 2, 3, 4, 5].

const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element);
});

//2. Calculate the sum of all elements
//Question: Use forEach to calculate the sum of all elements in the array [10, 20, 30, 40, 50].

const arr1 = [10, 20, 30, 40, 50];
let sum = 0;
arr1.forEach((element) => {
  sum += element;
});
console.log(sum); // Output: 150


//3. Convert all elements to uppercase
//Question: Use forEach to convert all elements of the array ["apple", "banana", "cherry"] to uppercase.

const arr3 = ["apple", "banana", "cherry"];
arr3.forEach((element, index, array) => {
  array[index] = element.toUpperCase();
});
console.log(arr3); // Output: ["APPLE", "BANANA", "CHERRY"]