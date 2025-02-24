
//Easy question

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


//Medium question
//1. Filter even numbers using forEach
//Question: Use forEach to filter out even numbers from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// and store them in a new array.

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
arr4.forEach((element) => {
  if (element % 2 === 0) {
    evenNumbers.push(element);
  }
});
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


//2. Count occurrences of each element
//Question: Use forEach to count the occurrences of each element in the array ["a", "b", "a", "c", "b", "a"].

const arr5 = ["a", "b", "a", "c", "b", "a"];
const count = {};
arr5.forEach((element) => {
  if (count[element]) {
    count[element]++;
  } else {
    count[element] = 1;
  }
});
console.log(count); // Output: { a: 3, b: 2, c: 1 }


//3. Modify objects in an array
//Question: Use forEach to add a property isEven to each object in the array [{value: 1}, {value: 2}, {value: 3}]. 
// The property should be true if the value is even, otherwise false.

const arr6 = [{ value: 1 }, { value: 2 }, { value: 3 }];
arr6.forEach((element) => {
  element.isEven = element.value % 2 === 0;
});
console.log(arr6);
// Output: [{ value: 1, isEven: false }, { value: 2, isEven: true }, { value: 3, isEven: false }]
