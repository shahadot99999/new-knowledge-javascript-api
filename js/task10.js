//const people = [ 
// { name: 'Meena', age: 
//     20 }, 
//     { name: 'Rina', 
//     age: 
//     15 }, 
//     { name: 'Suchorita', 
//     age: 22 } 
//     ]; 

//     1) Follow above array of objects.
//      So, you have 3 objects as array element. Can you find out the total sum from here? 

//     20 + 15+ 22 = 57. The output will be 57 
//     What are you thinking? Yeah! Do it with for loop. I know you can do it. 
//     But! Wait !! Wait !!! Do the same task using array.reduce() method


// Given array of objects
const people = [ 
    { name: 'Meena', age: 20 }, 
    { name: 'Rina', age: 15 }, 
    { name: 'Suchorita', age: 22 } 
];

// 1. Using a for loop
let totalAgeForLoop = 0;

for (let i = 0; i < people.length; i++) {
    totalAgeForLoop += people[i].age;
}

console.log("Total age using for loop:", totalAgeForLoop); // Output: 57

// 2. Using array.reduce() method
const totalAgeReduce = people.reduce((accumulator, currentPerson) => {
    return accumulator + currentPerson.age;
}, 0);

console.log("Total age using reduce method:", totalAgeReduce); // Output: 57