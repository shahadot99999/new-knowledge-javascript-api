
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


//Hard question


//1. Flatten a nested array
//Question: Use forEach to flatten the nested array [[1, 2], [3, 4], [5, 6]] into a single array.

const arr7 = [[1, 2], [3, 4], [5, 6]];
const flattened = [];
arr7.forEach((subArray) => {
  subArray.forEach((element) => {
    flattened.push(element);
  });
});
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]


//2. Group objects by a property
//Question: Use forEach to group objects in the array
// [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 25}] by the age property.

const arr8 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ];
  const grouped = {};
  arr8.forEach((element) => {
    if (!grouped[element.age]) {
      grouped[element.age] = [];
    }
    grouped[element.age].push(element);
  });
  console.log(grouped);
  // Output: { 25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], 30: [{ name: "Bob", age: 30 }] }


  //3. Find the intersection of two arrays
  //Question: Use forEach to find the intersection of two arrays [1, 2, 3, 4] and [3, 4, 5, 6].

  const arr9 = [1, 2, 3, 4];
const arr10 = [3, 4, 5, 6];
const intersection = [];
arr9.forEach((element) => {
  if (arr10.includes(element)) {
    intersection.push(element);
  }
});
console.log(intersection); // Output: [3, 4]
