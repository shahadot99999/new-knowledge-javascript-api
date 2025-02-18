//a) Write a function that displays a message after 5s

function displayMessage() {
    setTimeout(function() {
        console.log("Hello javascript ...I love you ...Do you love me java script!");
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Call the function
displayMessage();



//b) Write a function called delayedGreeting() that takes two parameters,
//  name and delay time, and logs a greeting message after the given delay time. 
//Input: delayGreeting('Alice', 2000) 
//Output: Hello, Alice!

function delayedGreeting(name, delayTime) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
    }, delayTime);
}

// Example usage
delayedGreeting('Alice', 2000); // Logs "Hello, Alice!" after 2 seconds