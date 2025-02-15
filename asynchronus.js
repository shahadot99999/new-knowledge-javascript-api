
//Asynchronous
//In asynchronous code, tasks can be initiated and then set aside while waiting for something (like a network request or timer). The program can continue executing other tasks without waiting for the asynchronous task to complete.

console.log("Task 1");
setTimeout(() => {
    console.log("Task 2");
}, 1000);
console.log("Task 3");