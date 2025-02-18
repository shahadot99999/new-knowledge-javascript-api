//The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. 
// Complete the code below and see the output 


// function tellJoke() { 
//     console.log("Why don't scientists trust atoms? Because they make up everything!"); 
//     const jokeInterval = setInterval(?, ?); 
//     // After 10 seconds, stop telling jokes. 
//     setTimeout(() => { 
//     //write code 
//     ), ?); 

function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");

    // Set an interval to log the joke every 2 seconds
    const jokeInterval = setInterval(() => {
        console.log("Why don't scientists trust atoms? Because they make up everything!");
    }, 2000);

    // After 10 seconds, stop telling jokes
    setTimeout(() => {
        clearInterval(jokeInterval); // Stop the interval
        console.log("Okay, that's enough jokes for now!");
    }, 10000); // 10 seconds
}

// Call the function to see the output
tellJoke();