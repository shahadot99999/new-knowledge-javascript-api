// Example: Log "Hello, World!" every 2 seconds
let intervalID = setInterval(() => {
    console.log("Hello, World!");
  }, 2000);
  
  // Stop the interval after 10 seconds
  setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval stopped!");
  }, 10000);